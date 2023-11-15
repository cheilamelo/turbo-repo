import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';

interface IButtonBase {
    children: ReactNode;
    href?: string;
    onClick?: () => void;
    className: string;
    id?: string;
    type?: 'button' | 'submit' | 'reset';
    disabled?: boolean;
}
declare function ButtonBase({ children, onClick, href, className, id, type, disabled }: IButtonBase): react_jsx_runtime.JSX.Element;

export { ButtonBase, IButtonBase };
