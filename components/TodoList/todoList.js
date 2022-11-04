import React, { useState, useEffect } from "react";

import InputForm from "../inputForm";
import ListItems from "../listItem";

const TodoList = () => {
  const [editValue, setEditValue] = useState({});
  return (
    <div className="p-4">
      <InputForm editValue={editValue} />
      <ListItems setEditValue={setEditValue} />
    </div>
  );
};

export default TodoList;
