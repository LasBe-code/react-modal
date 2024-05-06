import { createContext, useMemo, useState } from 'react';
import { Modal } from './Modal';
import { ModalValueType, ModalSetType, ModalProviderType, OpenModalPropsType } from './types';
import { useCallback } from 'react';

export const ModalValueContext = createContext<ModalValueType | null>(null);
export const ModalSetContext = createContext<ModalSetType | null>(null);

export const ModalProvider = ({ children, options }: ModalProviderType) => {
  const modalInitData: ModalValueType = useMemo(
    () => ({
      isOpen: false,
      animation: 'open-modal',
      content: null,
      options: options ? { useAnimation: true, ...options } : { useAnimation: true },
    }),
    [options],
  );
  const [modalValue, setModalValue] = useState<ModalValueType>(modalInitData);
  const openModal = useCallback(({ content, options }: OpenModalPropsType) => {
    setModalValue((prev) => ({ ...prev, content, isOpen: true, options: { ...prev.options, ...options } }));
  }, []);

  const closeModal = useCallback(() => {
    setModalValue((prev) => ({ ...prev, animation: 'close-modal' }));
    setTimeout(() => {
      setModalValue(modalInitData);
    }, 170);
  }, [modalInitData]);

  const modalSet = useMemo(() => ({ openModal, closeModal }), [closeModal, openModal]);

  return (
    <ModalSetContext.Provider value={modalSet}>
      <ModalValueContext.Provider value={modalValue}>
        <>
          {children}
          <Modal />
        </>
      </ModalValueContext.Provider>
    </ModalSetContext.Provider>
  );
};
