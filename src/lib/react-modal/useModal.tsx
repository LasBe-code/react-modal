import { useContext } from 'react';
import { ModalSetContext } from './ModalProvider';

/**
 * @example
 * 모달을 여는 함수인 openModal과 모달을 닫는 함수인 closeModal을 return합니다.
 *
 * openModal의 파라미터는 다음과 같습니다.
 * type openModalType = {
 *  header: string | ReactElement;
 *  body: string | ReactElement;
 *  footer?: string | ReactElement;
 * }
 *
 * 모달을 닫거나 이벤트 핸들링을 처리할 버튼은 기본적으로 footer에 넣어줍니다.
 * ex)
 * openModal({
 *   ..., footer: <button onClick={closeModal}>모달 닫기</button>
 * })
 *
 * 하지만 모달 body의 내용이 길어져 별도의 컴포넌트로 분리할 때는 button을 footer에 넣는 것 대신 컴포넌트 내부에 button을 포함하고 body에 넣어줍니다.
 */
export const useModal = () => {
  const value = useContext(ModalSetContext);

  if (!value) {
    throw new Error('ModalProvider를 최상위 컴포넌트(예: App)에 감싸주세요.');
  }
  return value;
};
