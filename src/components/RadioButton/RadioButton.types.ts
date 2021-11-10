import { ReactNode } from 'react';

export type RadioButtonProps = {
  label?: ReactNode;
  labelPosition?: 'left' | 'right';
  className?: string;
  name?: string;
  onBlur?: () => void;
  onChange: (value: boolean) => void;
  value: boolean;
};
