import React, { useState } from "react";
import { UsersCollectionRef, updateUsers } from "../../../FirebaseCall";
import { addDoc } from "firebase/firestore";
import ListofEmployees from "./ListofEmployees";
const EmployeeForm = ({ refreshList , users}) => {
  const [userId, setUserId] = useState("");
  const [userEmail, setUserEmail] = useState();
  const [userPassword, setUserPassword] = useState();

  const setNewEmployee = async (e) => {
    e.preventDefault();
    try {
      if (userId === "" && userEmail !== "" && userPassword !== "") {
        await addDoc(UsersCollectionRef, {
          password: userPassword,
          email: userEmail,
          userCat: "employee",
        });
      } else {
        if (userId !== "" && userEmail !== "" && userPassword !== "") {
          updateUsers(userId, userEmail, userPassword, "employee");
        }
      }

      setUserEmail("");
      setUserEmail("");
      setUserPassword("");
      refreshList();
    } catch (err) {
      console.error(err);
    }
  };

  const employeeEdit = (userData) => {
    const data = { ...userData };
    setUserEmail(data.email)
    setUserPassword(data.password)
    setUserId(data.id)
  }

  const clearInputHandler = () =>{
    setUserEmail("")
    setUserPassword("")
    setUserId("")
  }

  return (
    <>
      <form className="list-group " onSubmit={setNewEmployee}>
        <h2>Empleados</h2>
        <input
          id="mail"
          type="email"
          placeholder="agregar mail"
          className="list-group-item list-group-item-action d-flex flex-row justify-content-start"
          value={userEmail}
          onChange={(e) => {
            setUserEmail(e.target.value);
          }}
        />
        <input
          id="password"
          type="password"
          placeholder="Contraseña"
          autoComplete="on"
          className="list-group-item list-group-item-action d-flex flex-row justify-content-start"
          value={userPassword}
          onChange={(e) => {
            setUserPassword(e.target.value);
          }}
        />
        <button className="btn btn-success m-2">Update</button>
        <button onClick={clearInputHandler} className="btn btn-danger m-2">Cancelar</button>
      </form>
      <ListofEmployees 
      users = {users}
      employeeEdit = {employeeEdit}
      refreshList = {refreshList}
     />
    </>
  );
};

export default EmployeeForm;
