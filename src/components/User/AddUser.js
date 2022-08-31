import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from '../Helpers/Wrapper'

const AddUser = (props) => {
    const nameInputRef = useRef()
    const ageInputRef = useRef()

  const [isError, setIsError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value
    const enteredUserAge = ageInputRef.current.value

    if (enteredName.trim().length === 0 || enteredUserAge.trim().length === 0) {
      setIsError({
        title: "Invalid Input",
        message: "Please enter a valid username",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setIsError({
        title: "Invalid Input",
        message: "Please enter a valid age",
      });
      return;
    }
    props.onAddUser(enteredName, enteredUserAge);
    nameInputRef.current.value = ''
    ageInputRef.current.value = ''
  };

    const errorHandler = ()=>{
    setIsError(null)
}

  return (
    <Wrapper>
        {isError && <ErrorModal title={isError.title} message={isError.message} onClose={errorHandler}/>
}      
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            ref={nameInputRef}
          />
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            ref={ageInputRef}
          />
          <Button type="button" onClick={addUserHandler}>
            Add User
          </Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
