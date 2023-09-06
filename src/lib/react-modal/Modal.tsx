import { useEffect } from 'react';
import { useModalValue } from './useModalValue';
import './modal.css';

export const Modal = () => {
  const modalData = useModalValue();
  console.log('Modal: ', modalData);
  /**
   * - overflow : 스크롤 방지
   * - margin-right: hidden시 스크롤 너비만큼 width가 늘어나기 때문에 scroll-bar, width:10px; 만큼 margin-right
   */
  useEffect(() => {
    if (modalData.isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.marginRight = '10px';
    }
    if (!modalData.isOpen) {
      document.body.style.removeProperty('overflow');
      document.body.style.removeProperty('margin-right');
    }
  }, [modalData.isOpen]);
  return modalData.isOpen ? (
    <div className="react-modal-dimmer">
      {!!modalData.modalContents && (
        <div className={`react-modal-container ${modalData.isAnimation}`}>
          {!!modalData.modalContents.header && <div className="react-modal-header">{modalData.modalContents.header}</div>}
          {!!modalData.modalContents.body && <div className="react-modal-body">{modalData.modalContents.body}</div>}
          {!!modalData.modalContents.footer && <div className="react-modal-footer">{modalData.modalContents.footer}</div>}
        </div>
      )}
    </div>
  ) : (
    <></>
  );
};
