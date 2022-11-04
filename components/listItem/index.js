import React from "react";
import { useSelector } from "react-redux";
import Item from "../item.js";

const ListItems = ({ setEditValue }) => {
  const listItem = useSelector((state) => state.todoReducer.list);
  return (
    <div className="flex flex-row gap-4 items-center justify-center bg-slate-400">
      {listItem.slice(-3).map((item, idx) => {
        return <Item item={item} key={idx} setEditValue={setEditValue} />;
      })}
      <a href="/list">See All</a>
    </div>
  );
};

export default ListItems;
