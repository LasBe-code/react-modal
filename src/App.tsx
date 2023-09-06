import React from 'react';
import { useModal } from './lib';
import { ModalButton, ModalFooterContainer } from './lib/react-modal';

function App() {
  const { openModal, closeModal } = useModal();
  return (
    <div className="App">
      <button
        onClick={() =>
          openModal({
            header: 'HI',
            body: 'BODY',
            footer: (
              <ModalFooterContainer>
                <ModalButton onClick={closeModal}>close</ModalButton>
                <ModalButton onClick={closeModal}>close</ModalButton>
              </ModalFooterContainer>
            ),
          })
        }
      >
        open modal
      </button>
      <button
        onClick={() =>
          openModal({
            header: 'HI',
            body: (
              <div>
                BODY, BODY, BODY, BODY, BODY, BODY, BODY, BODY, BODY, BODY, BODY, BODY, BODY, BODY, BODY, BODY, BODY, BODY, BODY, BODY,
                BODY, BODY, BODY, BODY, BODY, BODY, BODY, BODY, BODY, BODY, BODY, BODY, BODY, BODY, BODY, BODY, BODY, BODY, BODY, BODY,
                BODY, BODY, BODY, BODY, BODY, BODY, BODY, BODY, BODY, BODY, BODY, BODY, BODY, BODY, BODY, BODY, BODY, BODY, BODY,
                <ModalFooterContainer>
                  <ModalButton onClick={closeModal}>close</ModalButton>
                  <ModalButton onClick={closeModal}>close</ModalButton>
                </ModalFooterContainer>
              </div>
            ),
          })
        }
      >
        open modal
      </button>
    </div>
  );
}

export default App;
