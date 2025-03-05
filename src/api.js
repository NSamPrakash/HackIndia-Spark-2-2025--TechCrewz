import axios from 'axios';

const API_URL = 'http://localhost:5000';

export const fetchTasks = () => axios.get(`${API_URL}/tasks`).then(res => res.data);
export const completeTask = (taskName) => axios.post(`${API_URL}/tasks/${taskName}/complete`).then(res => res.data);
