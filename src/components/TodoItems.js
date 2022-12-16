import React from "react";
import Checkbox from "@mui/material/Checkbox";
import "./TodoItems.css";

import { useDispatch } from "react-redux";
import setCheck from "../redux/todoSlice";

const TodoItems = ({ name, done, id }) => {
  const dispatch = useDispatch();

  const handleCheck = () => {
    dispatch(setCheck(id));
  };
  return (
    <div>
      TodoItems
      {/* checkbox */}
      <p className={done && "todoItem--done"}>{name}</p>
      <Checkbox
        checked={done}
        color="primary"
        onChange={handleCheck}
        inputProps={{ "aria-label": "controlled" }}
      />
    </div>
  );
};

export default TodoItems;
