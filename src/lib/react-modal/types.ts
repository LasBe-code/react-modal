export type ModalContentType = string | React.ReactElement;

export type ModalContentsType =
  | {
      header?: ModalContentType;
      body?: ModalContentType;
      footer?: ModalContentType;
    }
  | undefined;

export type ModalAnimationType = 'open-modal' | 'close-modal';

export type ModalValueType =
  | {
      isAnimation: ModalAnimationType;
      isOpen: boolean;
      modalContents: ModalContentsType;
    }
  | undefined;

export type ModalSetType =
  | {
      openModal: ({ header, body, footer }: OpenModalType) => void;
      closeModal: () => void;
    }
  | undefined;

export type OpenModalType = {
  header: ModalContentType;
  body: ModalContentType;
  footer?: ModalContentType;
};
