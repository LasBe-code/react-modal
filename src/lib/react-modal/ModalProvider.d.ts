import { ReactNode } from 'react';
import { ModalValueType, ModalSetType } from './types';
export declare const ModalValueContext: import("react").Context<ModalValueType>;
export declare const ModalSetContext: import("react").Context<ModalSetType>;
export declare const ModalProvider: ({ children }: {
    children: ReactNode;
}) => import("react/jsx-runtime").JSX.Element;
