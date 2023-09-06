import React from 'react';
import { useModal } from './lib';

function App() {
  const { openModal, closeModal } = useModal();
  return (
    <div className="App">
      <button onClick={() => openModal({ header: 'HI', body: 'BODY', footer: <button onClick={closeModal}>close</button> })}>
        open modal
      </button>
    </div>
  );
}

export default App;
