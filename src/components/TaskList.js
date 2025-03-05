import React from 'react';

const TaskList = ({ tasks, onComplete }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li key={index}>
          {task.name} - Deadline: {task.deadline}
          <button onClick={() => onComplete(task.name)}>Complete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
