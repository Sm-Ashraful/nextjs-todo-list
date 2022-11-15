import React from "react";
import { Update_Todo_Item } from "../action";

const initialEditState = {
  editedValue: {},
};

export const editTodoReducer = (state = initialEditState, action) => {
  const { type, payload } = action;

  switch (type) {
    case Update_Todo_Item:
      console.log("payload: ", payload);
      return {
        ...state,
        editedValue: {
          id: payload.id,
          title: payload.title,
          des: payload.des,
        },
      };
    default:
      return state;
  }
};
