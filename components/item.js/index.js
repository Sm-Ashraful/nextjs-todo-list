import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { deleteTodo, setIsEditItem } from "../../redux/action";

const Item = ({ item, setEditValue }) => {
  const [readmore, setReadmore] = useState(false);
  const isEditItem = useSelector((state) => state.todoReducer.isEditItem);

  const dispatch = useDispatch();
  const handleEditClick = (data) => {
    dispatch(setIsEditItem(!isEditItem));
    setEditValue(data);
  };

  const deleteHandler = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="w-64 h-40 flex flex-col relative justify-between bg-yellow-50 rounded-lg border border-gray-200 shadow-md">
      <div className=" bg-zinc-400 h-28">
        <h3 className="font-semibold text-center border-b-2">{item.title}</h3>
        <p className="overflow-y-scroll">
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
            onClick={() => handleEditClick(item)}
            className="h-fit pl-4 p-3 border-2 border-black bg-white text-black rounded-lg"
          >
            Edit
          </button>
          <button
            onClick={() => deleteHandler(item.id)}
            className="h-fit pl-4 p-3 border-2 border-black bg-white text-black rounded-lg"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
};

export default Item;
