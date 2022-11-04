import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { addTodo, editTodoItem, setIsEditItem } from "../../redux/action";

const InputForm = ({ editValue }) => {
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [copyValue, setCopyValue] = useState([]);
  const [ctitle, setCtitle] = useState("");
  const [cDes, setCdes] = useState("");
  const [inputEvent, setInputEvent] = useState([]);
  const dispatch = useDispatch();

  const isEditItem = useSelector((state) => state.todoReducer.isEditItem);

  useEffect(() => {
    setCdes(copyValue.des);
    setCtitle(copyValue.title);
  }, [copyValue]);

  useEffect(() => {
    setCopyValue(editValue);
  }, [editValue]);

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
    console.log("update handler call");
    e.preventDefault();
    const editedValue = {
      id: editValue.id,
      title: ctitle,
      des: cDes,
    };
    dispatch(editTodoItem(editedValue));
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
                className="h-fit pl-4 p-3 border-2 border-black bg-white text-black rounded-lg"
              >
                Add
              </button>
            </form>
          </div>
        </div>
      ) : (
        <form onSubmit={updateHandleSubmit}>
          <div className="space-x-4 flex flex-col gap-1 justify-center items-center">
            <h3 className="text-xl">Update your todo</h3>
            <div className="flex flex-row justify-center items-end">
              <div className="relative z-0 w-full group">
                <input
                  type="text"
                  name="title"
                  className="w-full pl-4 p-3 border-2 text-sm border-gray-300 rounded-lg"
                  value={ctitle || ""}
                  onChange={(e) => setCtitle(e.target.value)}
                  required
                />
                <textarea
                  id="message"
                  rows="4"
                  className="w-full pl-4 p-3 border-2 text-sm border-gray-300 rounded-lg"
                  value={cDes || ""}
                  onChange={(e) => setCdes(e.target.value)}
                ></textarea>
              </div>

              <button
                type="submit"
                className="h-fit pl-4 p-3 border-2 border-black bg-white text-black rounded-lg"
              >
                Update
              </button>
              <button
                type="submit"
                onClick={editVisibilityHandler}
                className="pl-4 p-3 border-2 border-black bg-red-400 text-black rounded-lg"
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      )}
    </div>
  );
};

export default InputForm;
