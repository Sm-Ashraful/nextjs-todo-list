import { combineReducers } from "redux";

import { todoReducer } from "./todoReducer";
import { editTodoReducer } from "./editTodoReducer";

export const rootReducer = combineReducers({
  todoReducer: todoReducer,
  editReducer: editTodoReducer,
});
