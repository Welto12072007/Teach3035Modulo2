import React, { useState } from 'react';
import { useTaskContext } from '../context/TaskContext';
import { isValidString } from '../utils/helpers';
import { VALIDATION, UI_TEXT } from '../utils/constants';

const AddTask: React.FC = () => {
  const [title, setTitle] = useState('');
  const { addTask } = useTaskContext();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValidString(title)) {
      addTask(title.trim());
      setTitle('');
    }
  };

  return (
    <form className="add-task-form" onSubmit={handleSubmit} aria-label="Adicionar nova tarefa">
      <input
        type="text"
        placeholder={UI_TEXT.ADD_TASK_PLACEHOLDER}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="task-input"
        aria-label="Título da tarefa"
        maxLength={VALIDATION.MAX_TASK_LENGTH}
      />
      <button 
        type="submit" 
        className="add-button"
        disabled={!isValidString(title)}
        aria-label="Adicionar tarefa"
      >
        {UI_TEXT.ADD_BUTTON}
      </button>
    </form>
  );
};

export default AddTask;
