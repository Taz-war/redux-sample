import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo } from "../features/tood/todoSlice";

const Todos = ({ setInput,setEditableObject }) => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      <div>Todos</div>
      <ul className=" list-none">
        {todos?.map((todo) => (
          <li
            className=" mt-4 flex justify-between items-center bg-zinc-800 py-2 px-1 rounded"
            key={todo.id}
          >
            <div className=" text-white" onClick={() =>{ setEditableObject(todo);setInput(todo.text)}}>
              {todo.text}
            </div>
            <button
              className=" bg-red-500 border-0 py-1 px-4 text-white focus:outline-none hover:bg-red-600 rounded text-md"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Todos;
