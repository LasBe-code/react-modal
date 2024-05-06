import React from 'react';
import { ModalStyle, useModal } from './lib';

function App() {
  const { openModal, closeModal } = useModal();
  return (
    <button
      onClick={() =>
        openModal({
          content: (
            <>
              <ModalStyle.Header>
                <ModalStyle.Title>Header</ModalStyle.Title>
              </ModalStyle.Header>
              <ModalStyle.Body>Body</ModalStyle.Body>
              <ModalStyle.Footer>
                <ModalStyle.Button color="gray" onClick={closeModal}>
                  Close
                </ModalStyle.Button>
                <ModalStyle.Button onClick={closeModal}>Submit</ModalStyle.Button>
              </ModalStyle.Footer>
            </>
          ),
        })
      }
    >
      OPEN MODAL
    </button>
  );
}

export default App;
