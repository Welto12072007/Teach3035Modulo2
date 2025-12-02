import React from 'react';
import { useTaskContext } from '../context/TaskContext';
import { Task } from '../types/Task';
import { UI_TEXT } from '../utils/constants';

interface TaskItemProps {
  task: Task;
}

const TaskItem: React.FC<TaskItemProps> = ({ task }) => {
  const { deleteTask, toggleTask } = useTaskContext();

  return (
    <div 
      className={`task-item ${task.completed ? 'completed' : ''}`}
      role="listitem"
    >
      <div className="task-content">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
          className="task-checkbox"
          aria-label={`Marcar "${task.title}" como ${task.completed ? 'incompleta' : 'completa'}`}
        />
        <span className="task-title">{task.title}</span>
      </div>
      <button
        onClick={() => deleteTask(task.id)}
        className="delete-button"
        title={UI_TEXT.DELETE_BUTTON_TITLE}
        aria-label={`Excluir tarefa "${task.title}"`}
      >
        ×
      </button>
    </div>
  );
};

export default TaskItem;
