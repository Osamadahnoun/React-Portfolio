import React from "react";

const Modal = ({ setOpenModal }) => {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="modalText">Email: osamadahnoun98@gmail.com</div>
        <div className="modalText">Phone: 919-592-3190</div>
        <button className="closeModal" onClick={() => setOpenModal(false)}>
          Hide
        </button>
      </div>
    </div>
  );
};

export default Modal;
