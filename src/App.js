import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo } from './features/tood/todoSlice';

function App() {
  const [input, setInput] = useState("");
  const [editableObject,setEditableObject] = useState(null)
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (editableObject !== null) {
      dispatch(updateTodo({ id: editableObject.id, text: input }));
      setEditableObject(null); 
    } else {
      dispatch(addTodo(input));
    }

    setInput("");
  };

  return (
    <>
    <div className=' container max-w-[500px] text-center items-center mx-auto'>
      <AddTodo input={input} setInput={setInput} addTodoHandler={addTodoHandler} editableObject={editableObject} setEditableObject={setEditableObject}/>
      <Todos setInput={setInput} setEditableObject={setEditableObject}/>
    </div>
    </>
  );
}

export default App;
