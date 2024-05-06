import { useEffect } from 'react';
import { useModalValue } from './useModalValue';
import './modal.css';

export const Modal = () => {
  const modalData = useModalValue();
  /**
   * - overflow : 스크롤 방지
   */
  useEffect(() => {
    if (modalData.isOpen) {
      document.body.style.overflow = 'hidden';
    }
    if (!modalData.isOpen) {
      document.body.style.removeProperty('overflow');
      document.body.style.removeProperty('margin-right');
    }
  }, [modalData.isOpen]);
  return modalData.isOpen ? (
    <div className="modal-container">
      <div className="modal-dimmer" style={modalData?.options?.dimmer} />
      <div className={`modal-content ${modalData?.options?.useAnimation && modalData.animation}`} style={modalData?.options?.body}>
        {modalData?.content}
      </div>
    </div>
  ) : null;
};
