import React from "react";
import "./App.css";
import Input from "./components/Input";
import TodoItems from "./components/TodoItems";

import { useSelector } from "react-redux";
import { selectTodoList } from "./redux/todoSlice";

function App() {
  const todoList = useSelector(selectTodoList);

  return (
    <div className="app">
      <h1 className="header-class">A TODO LIST APP</h1>

      <div className="container">
        {/* Todo List */}
        {todoList.map((item) => (
          <TodoItems name={item.item} done={item.done} id={item.id} />
        ))}

        <div className="todoContainer">
          <Input />
        </div>
      </div>
    </div>
  );
}

export default App;
