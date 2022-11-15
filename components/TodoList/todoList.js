import React from "react";

import InputForm from "../inputForm";
import ListItems from "../listItem";

const TodoList = () => {
  return (
    <div className="p-4">
      <InputForm />
      <ListItems />
    </div>
  );
};

export default TodoList;
