import React, { useState } from "react";

import { useGetTodosQuery } from "../api/apiSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faUpload } from "@fortawesome/free-solid-svg-icons";

function ToDoList() {
  const [newTodo, setNewToDo] = useState("");

  const {
    data: todos,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetTodosQuery()

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewToDo("");
  };

  const newItemSection =
  <form onSubmit={handleSubmit}>
<label htmlFor="new-todo">Enter new item</label>
<div className="new-todo">
    <input type="text"
    id="new-todo"
    value={newTodo}
    onChange={(event)=>setNewToDo(event.target.value)}
    placeholder="write here"
    />
</div>
<button className="submit">
    <FontAwesomeIcon icon={faUpload} />
</button>
  </form>

  let content;

  return <main>
    <h1>ToDo List</h1>
    {newItemSection}
    {content}
  </main>;
}

export default ToDoList;
