import React, { Fragment } from "react";
import Card from "./Card";
import classes from "./ErrorModal.module.css";
import Button from "./Button";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};

const ModalOverlay = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>
        <p>{props.message}</p>
      </div>
      <foooter className={classes.actions}>
        <Button onClick={props.onClose}>Okay</Button>
      </foooter>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          onClose={props.onClose}
          title={props.title}
          message={props.message}
        />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default ErrorModal;
