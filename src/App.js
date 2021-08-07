import { useState } from 'react';
import './App.css';
import Todo from './Todo';

function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    e.preventDefault();
    setTodos([...todos, input]);
    setInput("");
  }
  console.log("zzzzz" , input)
  return (
    <div className="App">
      <form>
        <input 
          type="text" 
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Enter text here...">
        </input>
        <button 
          disabled={!input} 
          type="submit" 
          onClick={addTodo}>Add To-do</button>
      </form>
      <h1>To-do App created with Reactjs</h1>
      {todos.map((todo, index) => (
        <Todo 
          title={todo}
          key={index}/>
      ))}
      
    </div>
  )
}

export default App;
// /* <Todo title="Take the dog out 1"/> */

