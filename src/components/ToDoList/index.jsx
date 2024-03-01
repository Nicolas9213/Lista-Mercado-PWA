import React, { useState, useEffect } from 'react';
import './ToDoList.css';

function TodoList() {
  const [task, setTask] = useState([]);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    const storedTask = localStorage.getItem('task');
    if (storedTask) {
      setTask(JSON.parse(storedTask));
    }
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const changeText = (index) => {

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    const newTask = [...task, inputValue.trim()];
    setTask(newTask);

    localStorage.setItem('task', JSON.stringify(newTask));
    setInputValue('');
  };

  const handleDelete = (index) => {
    const newTask = task.filter((_, i) => i !== index);
    setTask(newTask);

    localStorage.setItem('task', JSON.stringify(newTask));
  };

  return (
    <div className='list'>
      <h1 className='title'>Lista de compras</h1>
      <form onSubmit={handleSubmit}>
        <input
          className='input'
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Insira o item"
        />
        <button classname='button' type="submit">Adicionar</button>
      </form>
      <ul>
        {task.map((task, index) => (
          <li key={index}>

            <input type='checkbox' onClick={() => changeText()}></input>
            
            {task}

            <button onClick={() => handleDelete(index)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
