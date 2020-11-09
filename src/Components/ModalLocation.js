import React from "react";
import { Modal } from "react-bootstrap";

function ModalLocation({ size, show, onHide }) {
  return (
    <div className="modalLocation">
      <Modal
        size={size}
        show={show}
        onHide={onHide}
        aria-labelledby="example-modal-sizes-title-sm"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Small Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
    </div>
  );
}

export default ModalLocation;
