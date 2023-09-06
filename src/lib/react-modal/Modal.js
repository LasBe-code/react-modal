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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect } from 'react';
import { useModalValue } from './useModalValue';
import './modal.css';
export var Modal = function () {
    var modalData = useModalValue();
    console.log('Modal: ', modalData);
    /**
     * - overflow : 스크롤 방지
     * - margin-right: hidden시 스크롤 너비만큼 width가 늘어나기 때문에 scroll-bar, width:10px; 만큼 margin-right
     */
    useEffect(function () {
        if (modalData.isOpen) {
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = '10px';
        }
        if (!modalData.isOpen) {
            document.body.style.removeProperty('overflow');
            document.body.style.removeProperty('margin-right');
        }
    }, [modalData.isOpen]);
    return modalData.isOpen ? (_jsx("div", __assign({ className: "react-modal-dimmer" }, { children: !!modalData.modalContents && (_jsxs("div", __assign({ className: "react-modal-container ".concat(modalData.isAnimation) }, { children: [!!modalData.modalContents.header && _jsx("div", __assign({ className: "react-modal-header" }, { children: modalData.modalContents.header })), !!modalData.modalContents.body && _jsx("div", __assign({ className: "react-modal-body" }, { children: modalData.modalContents.body })), !!modalData.modalContents.footer && _jsx("div", __assign({ className: "react-modal-footer" }, { children: modalData.modalContents.footer }))] }))) }))) : (_jsx(_Fragment, {}));
};
