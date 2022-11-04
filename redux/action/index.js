export const Add_Todo = "Add_Todo";
export const Delete_Todo_Item = "Delete_Todo_Item";
export const Update_Todo_Item = "Update_Todo_Item";
export const Set_Is_Editing_Item = "Set_Is_Editing_Item";
export const Set_Value_for_Update = "Set_Value_for_Update";

export const addTodo = (data) => {
  return {
    type: Add_Todo,
    payload: {
      id: data.id,
      title: data.title,
      des: data.des,
    },
  };
};

export const deleteTodo = (id) => {
  return {
    type: Delete_Todo_Item,
    payload: {
      id,
    },
  };
};

export const editTodoItem = (data) => {
  return {
    type: Update_Todo_Item,
    payload: data,
  };
};

export const setIsEditItem = (bool) => {
  return {
    type: Set_Is_Editing_Item,
    payload: bool,
  };
};
