import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { RootState } from '../app/store';
import { getBuilds, getSettings, submitSettings } from '../dataProviders';
import { IBuild } from '../types/build';
import { FormData } from '../types/form';
import { ISettings } from '../types/settings';

export enum Status {
    Default,
    Loading,
    Success,
    Fail,
}
export interface RepositoryState {
    status: Status;
    settings?: ISettings;
    builds: IBuild[];
}

const initialState: RepositoryState = {
    status: Status.Default,
    builds: [],
};

export const getSettingsAsync = createAsyncThunk('repository/getSettings', () =>
    getSettings()
);

export const getBuildsAsync = createAsyncThunk(
    'repository/getBuilds',
    (id: number) => getBuilds(id)
);

export const submitSettingsAsync = createAsyncThunk(
    'repository/submitSettings',
    (data: FormData) => submitSettings(data)
);

export const repositorySlice = createSlice({
    name: 'repository',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getSettingsAsync.fulfilled, (state, action) => {
                state.settings = action.payload;
            })
            .addCase(getBuildsAsync.fulfilled, (state, action) => {
                state.builds = action.payload;
            })
            .addCase(submitSettingsAsync.fulfilled, (state, action) => {
                state.status = Status.Success;
                state.settings = action.payload as ISettings;
            })
            .addCase(submitSettingsAsync.pending, (state, action) => {
                state.status = Status.Loading;
            })
            .addCase(submitSettingsAsync.rejected, (state, action) => {
                state.status = Status.Fail;
            });
    },
});

export const selectSettings = (state: RootState) => state.repository.settings;
export const selectBuilds = (state: RootState) => state.repository.builds;
export const selectStatus = (state: RootState) => state.repository.status;

export default repositorySlice.reducer;
