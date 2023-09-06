var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { createContext, useMemo, useState } from 'react';
import { Modal } from './Modal';
export var ModalValueContext = createContext(undefined);
export var ModalSetContext = createContext(undefined);
export var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = useState('open-modal'), isAnimation = _c[0], setIsAnimation = _c[1];
    var _d = useState({ header: '', body: '', footer: '' }), modalContents = _d[0], setModalContents = _d[1];
    console.log('Provider: ', isOpen, modalContents);
    var modalValue = { isOpen: isOpen, modalContents: modalContents };
    var openModal = function (_a) {
        var header = _a.header, body = _a.body, footer = _a.footer;
        setIsOpen(true);
        setModalContents({ header: header, body: body, footer: footer });
    };
    var closeModal = function () {
        setIsAnimation('close-modal');
        setTimeout(function () {
            setIsOpen(false);
            setModalContents(undefined);
            setIsAnimation('open-modal');
        }, 170);
    };
    var modalSet = useMemo(function () { return ({ openModal: openModal, closeModal: closeModal }); }, []);
    return (_jsx(ModalSetContext.Provider, __assign({ value: modalSet }, { children: _jsxs(ModalValueContext.Provider, __assign({ value: __assign({ isAnimation: isAnimation }, modalValue) }, { children: [children, _jsx(Modal, {})] })) })));
};
