import {ChangeEvent, DetailedHTMLProps, InputHTMLAttributes} from "react";

export type DefaultInputPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;
export type InputPropsType = DefaultInputPropsType & {
    labelName: string
    value: string;
    name: string;
    type: string;
    handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export type InputStateType = {}
