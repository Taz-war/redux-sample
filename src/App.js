import logo from './logo.svg';
import './App.css';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';

function App() {
  return (
    <>
    <div className=' container max-w-[500px] text-center items-center mx-auto'>
      <AddTodo />
      <Todos />
    </div>
    </>
  );
}

export default App;
