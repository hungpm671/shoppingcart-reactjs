import { useState } from "react";
import "./Modal.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    setIsClosing(false);
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  return (
    <div>
      <button onClick={openModal} className="btn-show_modal p-2 m-2">
        Launch Demo Modal
      </button>

      {isOpen && (
        <div className="modal-overlay d-flex position-fixed top-0 start-0 end-0 bottom-0">
          <div className={`modal-content ${isClosing ? "closing" : ""}`}>
            <h2>Modal Title</h2>
            <p>This is a modal content.</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
