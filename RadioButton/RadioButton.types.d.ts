import { ReactNode } from 'react';
export declare type RadioButtonProps = {
    label?: ReactNode;
    labelPosition?: 'left' | 'right';
    className?: string;
    name?: string;
    onBlur?: () => void;
    onChange: (value: boolean) => void;
    value: boolean;
};
