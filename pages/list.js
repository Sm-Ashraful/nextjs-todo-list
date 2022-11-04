import React from "react";
import Item from "../components/item.js";
import { useSelector } from "react-redux";

const List = () => {
  const listItem = useSelector((state) => state.todoReducer.list);
  return (
    <div className="p-6 bg-slate-400 w-100 h-screen flex flex-col items-center gap-4">
      {listItem.length < 0 ? (
        <h2 className="font-lg">No Task Add Yet</h2>
      ) : (
        <div>
          <div>
            <h3 className="font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600">
              This full list
            </h3>
          </div>
          <div className="flex flex-row justify-evenly gap-7">
            {listItem.map((item) => {
              return <Item item={item} />;
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default List;
