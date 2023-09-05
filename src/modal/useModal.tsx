import { useCallback, useContext } from 'react';
import { ModalContext } from './ModalProvider';

export const useModal = () => {
  const contextValue = useContext(ModalContext);
  if (!contextValue) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  const { isOpenState, headerState, bodyState, footerState } = contextValue;
  const [isOpen, setIsOpen] = isOpenState;
  const [header, setHeader] = headerState;
  const [body, setBody] = bodyState;
  const [footer, setFooter] = footerState;

  const openModal = useCallback(() => {}, []);
};
