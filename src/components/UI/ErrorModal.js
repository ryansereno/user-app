import React from "react";
import Card from "./Card";
import classes from "./ErrorModal.module.css";
import Button from "./Button";

const ErrorModal = (props) => {
  return (

    <div>
        <div className={classes.backdrop} onClick={props.onClose}></div>
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
    </div>
  );
};

export default ErrorModal;
