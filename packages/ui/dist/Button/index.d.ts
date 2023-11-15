import * as react_jsx_runtime from 'react/jsx-runtime';
import { IButtonBase } from './ButtonBase.js';
import 'react';

declare const ButtonPrimary: ({ children, onClick, href, type, id }: Omit<IButtonBase, 'className'>) => react_jsx_runtime.JSX.Element;
declare const ButtonSecondary: ({ children, onClick, href, type, id }: Omit<IButtonBase, 'className'>) => react_jsx_runtime.JSX.Element;
declare const ButtonWhite: ({ children, onClick, href, type, id }: Omit<IButtonBase, 'className'>) => react_jsx_runtime.JSX.Element;
declare const ButtonRed: ({ children, onClick, href, type, id }: Omit<IButtonBase, 'className'>) => react_jsx_runtime.JSX.Element;
declare const ButtonGreen: ({ children, onClick, href, type, id }: Omit<IButtonBase, 'className'>) => react_jsx_runtime.JSX.Element;
declare const ButtonGray: ({ children, onClick, href, type, id }: Omit<IButtonBase, 'className'>) => react_jsx_runtime.JSX.Element;

export { ButtonGray, ButtonGreen, ButtonPrimary, ButtonRed, ButtonSecondary, ButtonWhite };
