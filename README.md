# @lasbe/react-modal

[NPM](https://www.npmjs.com/package/@lasbe/react-modal)  
[Github](https://github.com/LasBe-code/react-modal)  
[Blog](https://lasbe.tistory.com/)  
선언적으로 모달을 사용할 수 있는 패키지입니다.  
구성과 디자인을 최대한 자유롭게 변경할 수 있습니다.  
기본적으로 모달의 배경인 dimmer와 스크롤 방지 기능이 포함 되어 있습니다.

### install

```bash
$ npm i @lasbe/react-modal
```

### example

1. `ModalProvider`를 상위 컴포넌트에 감아줍니다.

```tsx
root.render(
  <ModalProvider>
    <App />
  </ModalProvider>,
);
```

2. `useModal()` 훅을 이용해 모달을 여닫는 함수를 이용합니다.  
   `ModalStyle`을 import 하여 기본 스타일을 사용할 수 있습니다.

```tsx
import React from 'react';
import { useModal, ModalStyle } from '@lasbe/react-modal';

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
```

### props

1. `<ModalProvider />`

```ts
type ModalProvidertype = {
  children: React.ReactElement;
  options?: {
    // 모달 배경 스타일 지정
    dimmer?: React.CSSProperties;
    // 모달 body 스타일 지정
    body?: React.CSSProperties;
    // 모달 여닫을 때 애니메이션 적용 여부
    useAnimation?: boolean;
  };
};
```

2. `openModal()`

```ts
type OpenModalType = {
  // Modal에 띄울 요소
  content: React.ReactNode;
  options?: {
    // 모달 배경 스타일 지정
    dimmer?: React.CSSProperties;
    // 모달 body 스타일 지정
    body?: React.CSSProperties;
    // 모달 여닫을 때 애니메이션 적용 여부
    useAnimation?: boolean;
  };
};
```
