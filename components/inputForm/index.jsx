import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  addTodo,
  setIsEditItem,
  SetUpdateValueToTheList,
} from "../../redux/action";

const InputForm = () => {
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [copyValue, setCopyValue] = useState([]);
  const [copyTitle, setCopyTitle] = useState("");
  const [copyDes, setCopyDes] = useState("");
  const [inputEvent, setInputEvent] = useState([]);
  const dispatch = useDispatch();

  const state = useSelector((state) => state);
  const isEditItem = useSelector((state) => state.todoReducer.isEditItem);
  const editedValue = useSelector((state) => state.editReducer.editedValue);

  useEffect(() => {
    console.log("state: ", state);
    console.log("edited Value: ", editedValue);
    const copyItem = {
      id: editedValue.id,
      title: editedValue.title,
      des: editedValue.des,
    };
    setCopyTitle(copyItem.title);
    setCopyDes(copyItem.des);
  }, [editedValue]);

  useEffect(() => {
    const editedData = {
      id: editedValue.id,
      title: copyTitle,
      des: copyDes,
    };
    setCopyValue(editedData);
  }, [copyTitle, copyDes]);

  useEffect(() => {
    const data = {
      id: new Date().getTime().toLocaleString(),
      title: title,
      des: des,
    };
    setInputEvent(data);
  }, [title, des]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(inputEvent));
    setTitle("");
    setDes("");
  };

  const updateHandleSubmit = (e) => {
    e.preventDefault();
    dispatch(SetUpdateValueToTheList(copyValue));
    dispatch(setIsEditItem(!isEditItem));
  };

  const editVisibilityHandler = (e) => {
    dispatch(setIsEditItem(!isEditItem));
  };

  return (
    <div className="p-6 w-1/2 mx-auto relative">
      {isEditItem === false ? (
        <div className="space-x-4 flex flex-col gap-1 justify-center items-center">
          <h3 className="text-xl">Enter your todo</h3>
          <div className="flex flex-row justify-center items-end">
            <form onSubmit={handleSubmit}>
              <div className="relative z-0 w-full group">
                <input
                  type="text"
                  name="title"
                  placeholder="Enter Title"
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full pl-4 p-3 border-2 text-sm border-gray-300 rounded-lg"
                  value={title}
                  required
                />
                <textarea
                  id="message"
                  rows="4"
                  className="w-full pl-4 p-3 border-2 text-sm border-gray-300 rounded-lg"
                  placeholder="Your message..."
                  onChange={(e) => setDes(e.target.value)}
                  value={des}
                ></textarea>
              </div>

              <button
                type="submit"
                className="h-fit pl-4 p-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Add
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="space-x-4 flex flex-col gap-1 justify-center items-center">
          <h3 className="text-xl">Update your todo</h3>
          <div className="flex flex-row justify-center items-end">
            <form onSubmit={updateHandleSubmit}>
              <div className="relative z-0 w-full group">
                <input
                  type="text"
                  name="title"
                  className="w-full pl-4 p-3 border-2 text-sm border-gray-300 rounded-lg"
                  value={copyTitle || ""}
                  onChange={(e) => setCopyTitle(e.target.value)}
                  required
                />
                <textarea
                  id="message"
                  rows="4"
                  className="w-full pl-4 p-3 border-2 text-sm border-gray-300 rounded-lg"
                  value={copyDes || ""}
                  onChange={(e) => setCopyDes(e.target.value)}
                ></textarea>
              </div>

              <button
                type="submit"
                className="h-fit pl-4 p-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Update
              </button>
              <button
                type="submit"
                onClick={editVisibilityHandler}
                className="h-fit pl-4 p-3 focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-bold py-2 px-4 rounded dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default InputForm;
