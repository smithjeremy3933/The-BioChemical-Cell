import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div className="modal is-active">
      <div onClick={props.onDismiss} className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <b style={{ fontSize: 13 }} className="modal-card-title">
            {props.title}
          </b>
          <button
            onClick={props.onDismiss}
            className="delete"
            aria-label="close"
          ></button>
        </header>
        <section className="modal-card-body">{props.content}</section>
        <footer className="modal-card-foot">{props.actions}</footer>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;
