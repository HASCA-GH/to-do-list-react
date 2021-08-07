import { useState, useEffect } from 'react';
import './App.css';
import Todo from './Todo';
import db from './firebase';


function App() {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    console.log("I ran when the component loaded");
//docs is refering to the document in the collection todos
    db.collection('todos').onSnapshot(snapshot => {
      // Aquí ve los objetos que mapea antes de ponerlo en la setTodos function
      console.log("Aquí van los datos que devuelve Cloud Firebase DB", snapshot.docs.map(doc=> doc.data()));
      //Despues de esto , se aprecia que la data devuelte con el "title" por eso se añadió "title" abajo
      setTodos(snapshot.docs.map(doc=> doc.data().title));
    })
  }, [])

  const addTodo = (e) => {
    e.preventDefault();
    // setTodos([...todos, input]);

    db.collection('todos').add({
      title: input,
    });

    // For delete a specific document "iushasuihauishauish" just try this:
    // db.collection('todos').doc('iushasuihauishauish').delete();

    setInput("");
  }
  // console.log("zzzzz" , input)
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

