import React from 'react';
import { useTaskContext } from '../context/TaskContext';
import TaskItem from './TaskItem';
import { UI_TEXT } from '../utils/constants';

const TaskList: React.FC = () => {
  const { tasks } = useTaskContext();

  if (tasks.length === 0) {
    return (
      <div className="empty-state" role="status">
        <p>{UI_TEXT.EMPTY_STATE_TITLE}</p>
        <p>{UI_TEXT.EMPTY_STATE_SUBTITLE}</p>
      </div>
    );
  }

  const pendingTasks = tasks.filter(task => !task.completed);
  const completedTasks = tasks.filter(task => task.completed);

  return (
    <div className="task-list" role="list">
      {pendingTasks.length > 0 && (
        <section className="task-section" aria-labelledby="pending-tasks">
          <h3 id="pending-tasks">{UI_TEXT.PENDING_TASKS} ({pendingTasks.length})</h3>
          {pendingTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </section>
      )}

      {completedTasks.length > 0 && (
        <section className="task-section" aria-labelledby="completed-tasks">
          <h3 id="completed-tasks">{UI_TEXT.COMPLETED_TASKS} ({completedTasks.length})</h3>
          {completedTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))}
        </section>
      )}
    </div>
  );
};

export default TaskList;
