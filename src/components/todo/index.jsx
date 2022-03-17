import React, { useState, useEffect } from "react";
import { allTodo, createTodo, deleteTodo } from "../../services/todo";
import { AiFillDelete } from "react-icons/ai";
import "./index.css";
const Index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const objNewTodo = {
      descpricion: newTodo,
      state: false,
    };

    const addtodo = async () => {
      await createTodo(objNewTodo);
      await showTodo();
    };
    addtodo();
    setNewTodo("");
  };
  const showTodo = async () => {
    try {
      return setTodoList(await allTodo());
    } catch (error) {
      throw new Error(error);
    }
  };

  const handleDeleteTodo = (id) => {
    const deleteT = async () => {
      await deleteTodo(id);
      await showTodo();
    };
    deleteT();
  };

  useEffect(() => {
    showTodo();
  }, []);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          <input
            type="text"
            name="descpricion"
            onChange={handleChange}
            value={newTodo}
          />
        </label>
        <button type="submit">Crear</button>
      </form>
      <p>show Todo</p>
      {todoList.map((todo) => (
        <h3 key={todoList.id} className={`${todoList.state ? `doit` : ""}`}>
          {todo.descpricion}
          <AiFillDelete
            onClick={() => {
              handleDeleteTodo(todo.id);
            }}
          />
        </h3>
      ))}
    </div>
  );
};

export default Index;
