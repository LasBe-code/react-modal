import '../modal.css';

type ModalFooterContainerType = {
  children: React.ReactElement | React.ReactElement[];
};

export const ModalFooterContainer = ({ children }: ModalFooterContainerType) => {
  return <div className="modal-footer-container">{children}</div>;
};
