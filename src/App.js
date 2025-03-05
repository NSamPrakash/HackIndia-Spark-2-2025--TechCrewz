import React, { useEffect, useState } from 'react';
import TaskList from './components/TaskList';
import DependencyGraph from './components/DependencyGraph';
import Alert from './components/Alert';
import { fetchTasks, completeTask } from './api';

function App() {
  const [tasks, setTasks] = useState([]);
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    fetchTasks().then(data => setTasks(data.tasks));
  }, []);

  const handleComplete = (taskName) => {
    completeTask(taskName).then(data => {
      setTasks(data.updated_schedule);
      setAlert({ type: 'success', message: `Task "${taskName}" marked as complete!` });
    });
  };

  return (
    <div>
      <h1>Smart To-Do Task Scheduler</h1>
      {alert && <Alert type={alert.type} message={alert.message} />}
      <TaskList tasks={tasks} onComplete={handleComplete} />
      <DependencyGraph tasks={tasks} />
    </div>
  );
}

export default App;
