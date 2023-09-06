import { ReactNode, createContext, useMemo, useState } from 'react';
import { Modal } from './Modal';
import { ModalValueType, OpenModalType, ModalContentsType, ModalSetType, ModalAnimationType } from './types';

export const ModalValueContext = createContext<ModalValueType>(undefined);
export const ModalSetContext = createContext<ModalSetType>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimation, setIsAnimation] = useState<ModalAnimationType>('open-modal');
  const [modalContents, setModalContents] = useState<ModalContentsType | undefined>({ header: '', body: '', footer: '' });
  console.log('Provider: ', isOpen, modalContents);
  const modalValue = { isOpen, modalContents };

  const openModal = ({ header, body, footer }: OpenModalType) => {
    setIsOpen(true);
    setModalContents({ header, body, footer });
  };
  const closeModal = () => {
    setIsAnimation('close-modal');
    setTimeout(() => {
      setIsOpen(false);
      setModalContents(undefined);
      setIsAnimation('open-modal');
    }, 170);
  };
  const modalSet = useMemo(() => ({ openModal, closeModal }), []);

  return (
    <ModalSetContext.Provider value={modalSet}>
      <ModalValueContext.Provider value={{ isAnimation, ...modalValue }}>
        {children}
        <Modal />
      </ModalValueContext.Provider>
    </ModalSetContext.Provider>
  );
};
