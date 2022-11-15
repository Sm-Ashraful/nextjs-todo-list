import React from "react";
import {
  Add_Todo,
  Delete_Todo_Item,
  Set_Is_Editing_Item,
  Set_Edit_Value_for_Update,
} from "../action";

export const initialState = {
  isEditItem: false,
  list: [],
};

export const todoReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case Add_Todo:
      const { id, title, des } = payload;
      return {
        ...state,
        list: [...state.list, { id, title, des }],
        isEditItem: false,
      };
    case Delete_Todo_Item:
      const newItems = state.list.filter(
        (newItem) => newItem.id !== payload.id
      );
      return {
        ...state,
        list: newItems,
        isEditItem: false,
      };
    case Set_Edit_Value_for_Update:
      const updateItem = state.list.map((item, idx) => {
        if (item.id !== payload.id) {
          return item;
        }
        return {
          ...item,
          id: payload.id,
          title: payload.title,
          des: payload.des,
        };
      });
      return {
        ...state,
        list: updateItem,
        isEditItem: false,
      };

    case Set_Is_Editing_Item:
      return {
        ...state,
        isEditItem: payload,
      };

    default:
      return state;
  }
};
