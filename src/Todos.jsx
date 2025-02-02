import { useState } from 'react';

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');
  return <div>
    <h1>Todos</h1>
    <ul>
        {todos?.map((todo) => <li key={todo}>{todo}</li>)}
    </ul>

    <p>{todos.length}</p>

    {/* add todos */}

    <div>
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
        <button onClick={() => setTodos(prev => [...prev, text])}>Add</button>
    </div>
  </div>;
};

export default Todos;
