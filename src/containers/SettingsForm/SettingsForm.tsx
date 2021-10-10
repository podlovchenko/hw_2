import React, { useCallback, useEffect, useReducer, useState } from 'react';

import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import {
    CANCEL,
    FIELDS,
    SAVE,
    SETTINGS,
    SETTINGS_DESCRIPTION,
} from '../../constants/text';
import { Status } from '../../reducers/repository';
import { FormData, IFormField } from '../../types/form';
import { ISettings } from '../../types/settings';
import classes from './SettingsForm.module.css';

type State = Record<IFormField, string>;

enum ActionType {
    Init,
    ChangeValue,
    ClearValue,
    ClearForm,
}

interface IAction {
    type: ActionType;
    payload?: any;
}

const initialState: FormData = {
    [IFormField.Repository]: '',
    [IFormField.Command]: '',
    [IFormField.Branch]: '',
    [IFormField.Time]: '',
};

function reducer(state: State, { type, payload }: IAction) {
    switch (type) {
        case ActionType.Init:
            return { ...state, ...payload };
        case ActionType.ChangeValue:
            const { field, value } = payload;

            return { ...state, [field]: value };
        case ActionType.ClearValue:
            return { ...state, [payload]: '' };
        case ActionType.ClearForm:
            return { ...initialState };
        default:
            throw new Error();
    }
}

interface IProps {
    status: Status;
    settings?: ISettings;
    onSubmit: (data: FormData) => void;
    onCancel: () => void;
    onRedirect: () => void;
}

const SettingsForm = ({
    status,
    settings,
    onSubmit,
    onCancel,
    onRedirect,
}: IProps) => {
    const [statusFromProps, setStatusFromProps] = useState(status);
    const [disabled, setDisabled] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        if (status && status !== statusFromProps) {
            if (status === Status.Fail) {
                setDisabled(false);
                setError(true);
            }

            if (status === Status.Loading) {
                setDisabled(true);
                setError(false);
            }

            if (status === Status.Success) {
                setDisabled(false);
                onRedirect();
            }
        }

        setStatusFromProps(status);
    }, [status, onRedirect]);

    const initialSettings: FormData = {
        [IFormField.Repository]:
            settings?.repository || initialState[IFormField.Repository],
        [IFormField.Command]:
            settings?.command || initialState[IFormField.Command],
        [IFormField.Branch]:
            settings?.branch || initialState[IFormField.Branch],
        [IFormField.Time]: settings?.time || initialState[IFormField.Time],
    };
    const [state, dispatch] = useReducer(reducer, initialSettings);

    useEffect(() => {
        dispatch({
            type: ActionType.Init,
            payload: settings,
        });
    }, [settings]);

    const onChangeValue = useCallback(
        (field: IFormField) => (value: string) =>
            dispatch({
                type: ActionType.ChangeValue,
                payload: {
                    field,
                    value,
                },
            }),
        []
    );
    const onClearValue = useCallback(
        (field: IFormField) => () =>
            dispatch({
                type: ActionType.ClearValue,
                payload: field,
            }),
        []
    );
    const onClearAll = useCallback(
        () =>
            dispatch({
                type: ActionType.ClearForm,
            }),
        []
    );
    const onSubmitForm = () => {
        const formData = {
            ...state,
            ...(state[IFormField.Time] && {
                [IFormField.Time]: state[IFormField.Time].replace(/_/g, ''),
            }),
        };

        onSubmit(formData);
    };
    const onCancelForm = useCallback(() => {
        onCancel();
        onClearAll();
    }, [onCancel, onClearAll]);

    const disabledSaveButton =
        disabled || !state[IFormField.Repository] || !state[IFormField.Command];

    return (
        <div className={classes.container}>
            <div>
                <div className={classes.title}>{SETTINGS}</div>
                <div className={classes.description}>
                    {SETTINGS_DESCRIPTION}
                </div>
            </div>
            <div className={classes.fields}>
                <div>
                    <div className={classes.label}>
                        {FIELDS[IFormField.Repository].label}
                        <span className={classes.required}>{' *'}</span>
                    </div>
                    <Input
                        type="text"
                        value={state[IFormField.Repository]}
                        placeholder={FIELDS[IFormField.Repository].placeholder}
                        required
                        onChange={onChangeValue(IFormField.Repository)}
                        onClear={onClearValue(IFormField.Repository)}
                    />
                </div>
                <div>
                    <div className={classes.label}>
                        {FIELDS[IFormField.Command].label}
                        <span className={classes.required}>{' *'}</span>
                    </div>
                    <Input
                        type="text"
                        value={state[IFormField.Command]}
                        placeholder={FIELDS[IFormField.Command].placeholder}
                        required
                        onChange={onChangeValue(IFormField.Command)}
                        onClear={onClearValue(IFormField.Command)}
                    />
                </div>
                <div>
                    <div className={classes.label}>
                        {FIELDS[IFormField.Branch].label}
                    </div>
                    <Input
                        type="text"
                        value={state[IFormField.Branch]}
                        placeholder={FIELDS[IFormField.Branch].placeholder}
                        onChange={onChangeValue(IFormField.Branch)}
                        onClear={onClearValue(IFormField.Branch)}
                    />
                </div>
                <div className={classes.timeField}>
                    <div>{FIELDS[IFormField.Time].label}</div>
                    <Input
                        type="number"
                        value={state[IFormField.Time]}
                        placeholder={FIELDS[IFormField.Time].placeholder}
                        onChange={onChangeValue(IFormField.Time)}
                        onClear={onClearValue(IFormField.Time)}
                    />
                    <div>{FIELDS[IFormField.Time].dimension}</div>
                </div>
            </div>
            {error && <div>ERROR</div>}
            <div className={classes.buttons}>
                <Button
                    variant="yellow"
                    onClick={onSubmitForm}
                    disabled={disabledSaveButton}
                >
                    {SAVE}
                </Button>
                <Button
                    variant="gray"
                    onClick={onCancelForm}
                    disabled={disabled}
                >
                    {CANCEL}
                </Button>
            </div>
        </div>
    );
};

export default SettingsForm;
