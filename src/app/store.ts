import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import repositoryReducer from '../reducers/repository';

export const store = configureStore({
    reducer: {
        repository: repositoryReducer,
    },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
