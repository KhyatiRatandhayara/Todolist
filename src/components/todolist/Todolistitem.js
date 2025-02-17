import React, {useEffect, uselistData, useState}from "react";
import Tododelete from "./Tododelete";
import "./Todolistitem.css";

const TodolistItem = (props) => {

  const [deleteData, setDeleteData] = useState(null); 
  const [deleted, setDeleted] = useState(false);
  const onDeleteUserHandler = (deleteUserId) => {
    props.onDeleteUser(deleteUserId);
  };
   
const onClose =()=>{
setDeleted(false);
}
const clickDeleteData = (userDeleteId) => {
setDeleted(true);
setDeleteData(userDeleteId);
}

  const itemChangeHandler = (itemId) => {
    props.checkedUpdatedItem(itemId);
  }
  return (
   <>
    <input type="checkbox" value={props.dataitem.isChecked} onChange ={()=>itemChangeHandler(props.dataitem.id)}/>
    <span
      className={
        props.dataitem.isChecked ? "checked-item" : "not-checked-item"
      }
    >
      {props.dataitem.value}
    </span>
    <button type ="button" onClick={() => clickDeleteData(props.dataitem.id)}>Delete</button>
    {deleted && (
        <Tododelete
        onClose={onClose}
        show={setDeleted}
        onDeleteUserHandler={onDeleteUserHandler}
        deleteData = {deleteData}
        />
      )}
    </>
  
  );
};
export default TodolistItem;
