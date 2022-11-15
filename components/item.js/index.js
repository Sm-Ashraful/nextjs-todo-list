import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  deleteTodo,
  setIsEditItem,
  setEditedTodoItem,
} from "../../redux/action";

const Item = ({ item }) => {
  const [readmore, setReadmore] = useState(false);
  const isEditItem = useSelector((state) => state.todoReducer.isEditItem);

  const dispatch = useDispatch();
  const handleEditClick = (e, data) => {
    e.preventDefault();
    const copyItem = {
      id: data.id,
      title: data.title,
      des: data.des,
    };
    console.log("Data: ", copyItem);
    dispatch(setEditedTodoItem(copyItem));
    dispatch(setIsEditItem(!isEditItem));
  };

  const deleteHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="w-64 h-40 flex flex-col relative justify-between bg-yellow-50 rounded-lg border border-gray-200 shadow-md">
      <div className=" bg-zinc-400 h-28 grid-cols-2">
        <h3 className="font-semibold text-center border-b-2 bg-green-400 h-8">
          {item.title}
        </h3>
        <p className="overflow-y-scroll bg-yellow-200 h-full p-2">
          {readmore ? item.des : `${item.des.substring(0, 200)} ...`}
          {item.length > 200 && (
            <button
              className="relative bottom-0 right-0"
              onClick={() => setReadmore(!readmore)}
            >
              {readmore ? " show less" : " read more"}
            </button>
          )}
        </p>
      </div>
      {isEditItem === false && (
        <div className="flex justify-between items-center relative ">
          <button
            onClick={(e) => handleEditClick(e, item)}
            className="h-fit pl-4 p-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Edit
          </button>
          <button
            onClick={() => deleteHandler(item.id)}
            className="h-fit pl-4 p-3 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-bold py-2 px-4 rounded dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default Item;
