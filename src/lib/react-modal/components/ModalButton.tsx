import '../modal.css';

type ModalButtonType = {
  children?: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const ModalButton = (props: ModalButtonType) => {
  const newProps = { ...props };
  if (props.className) newProps.className += ' modal-button';
  return (
    <button className="modal-button" {...newProps}>
      {props.children}
    </button>
  );
};
