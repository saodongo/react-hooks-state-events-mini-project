import React from 'react';

function Task({ task, onDeleteTask }) {
  return (
    <div>
      <span>{task.text}</span>
      <span>{task.category}</span>
      <button onClick={() => onDeleteTask(task.text)}>Delete</button>
    </div>
  );
}

export default Task;
