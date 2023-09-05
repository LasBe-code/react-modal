import React from 'react';
import { Modal } from './Modal';

type ModalContentType = string | React.ReactElement;
type ModalIsOpenStateType = [boolean, React.Dispatch<React.SetStateAction<boolean>>];
type ModalContentStateType = [ModalContentType, React.Dispatch<React.SetStateAction<ModalContentType>>];
type ModalProviderProps =
  | {
      isOpenState: ModalIsOpenStateType;
      headerState: ModalContentStateType;
      bodyState: ModalContentStateType;
      footerState: ModalContentStateType;
    }
  | undefined;

export const ModalContext = React.createContext<ModalProviderProps>(undefined);

export const ModalProvider = ({ children }: { children: React.ReactNode }) => {
  const isOpenState = React.useState(false);
  const headerState = React.useState<ModalContentType>('');
  const bodyState = React.useState<ModalContentType>('');
  const footerState = React.useState<ModalContentType>('');
  return (
    <ModalContext.Provider value={{ isOpenState, headerState, bodyState, footerState }}>
      {children}
      <Modal />
    </ModalContext.Provider>
  );
};
