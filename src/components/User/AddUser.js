import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUser, setEnteredUser] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUser.trim().length === 0 || enteredAge.trim().length === 0) {
      return;
    }
    if (+enteredAge < 1) {
      return;
    }
    props.onAddUser(enteredUser, enteredAge);
    setEnteredUser("");
    setEnteredAge("");
  };
  const usernameChangeHandler = (event) => {
    setEnteredUser(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  return (
    <div>
      {" "}
      <ErrorModal
        title="An error occured"
        message="Cannot set a user without a name"
      ></ErrorModal>
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            value={enteredUser}
            type="text"
            id="username"
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age</label>
          <input
            value={enteredAge}
            type="number"
            id="age"
            onChange={ageChangeHandler}
          />
          <Button type="button" onClick={addUserHandler}>
            Add User
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
