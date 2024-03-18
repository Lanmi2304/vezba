import { createPortal } from "react-dom";
import { useRef, useImperativeHandle, forwardRef } from "react";

const ErrorModal = forwardRef(function ErrorModal({ children }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  return (
    <dialog ref={dialog}>
      {children}
      <form method="dialog">
        <button>Okay</button>
      </form>
    </dialog>
  );
});

export default ErrorModal;
