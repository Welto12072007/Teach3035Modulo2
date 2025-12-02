import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import { Task, TaskContextType } from '../types/Task';
import { saveToLocalStorage, loadFromLocalStorage } from '../utils/storage';
import { generateId } from '../utils/helpers';
import { STORAGE_KEYS } from '../utils/constants';

// Create the Context
const TaskContext = createContext<TaskContextType | undefined>(undefined);

// Context Provider
interface TaskProviderProps {
  children: ReactNode;
}

export const TaskProvider: React.FC<TaskProviderProps> = ({ children }) => {
  // Load tasks from localStorage on mount
  const [tasks, setTasks] = useState<Task[]>(() => {
    const savedTasks = loadFromLocalStorage<Task[]>(STORAGE_KEYS.TASKS);
    return savedTasks || [];
  });

  // Save tasks to localStorage whenever they change
  useEffect(() => {
    saveToLocalStorage(STORAGE_KEYS.TASKS, tasks);
  }, [tasks]);

  // Add new task
  const addTask = (title: string) => {
    const newTask: Task = {
      id: generateId(),
      title,
      completed: false,
      createdAt: new Date(),
    };
    setTasks([...tasks, newTask]);
  };

  // Delete task
  const deleteTask = (id: string) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle task completion status
  const toggleTask = (id: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, toggleTask }}>
      {children}
    </TaskContext.Provider>
  );
};

// Custom hook to use the Context
export const useTaskContext = () => {
  const context = useContext(TaskContext);
  if (context === undefined) {
    throw new Error('useTaskContext must be used within a TaskProvider');
  }
  return context;
};
