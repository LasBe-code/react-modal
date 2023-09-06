import React from 'react';
import { useModal } from './lib';
import { ModalButton } from './lib/react-modal/components/ModalButton';

function App() {
  const { openModal, closeModal } = useModal();
  return (
    <div className="App">
      <button onClick={() => openModal({ header: 'HI', body: 'BODY', footer: <ModalButton onClick={closeModal}>close</ModalButton> })}>
        open modal
      </button>
    </div>
  );
}

export default App;
