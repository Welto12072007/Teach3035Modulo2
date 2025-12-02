import React from 'react';
import { TaskProvider } from './context/TaskContext';
import AddTask from './components/AddTask';
import TaskList from './components/TaskList';
import './styles/layout.css';
import './styles/components.css';

const App: React.FC = () => {
  return (
    <TaskProvider>
      <div className="app-container">
        <header className="app-header">
          <h1>Lista de Tarefas</h1>
        </header>
        
        <main className="app-main">
          <AddTask />
          <TaskList />
        </main>
      </div>
    </TaskProvider>
  );
};

export default App;
