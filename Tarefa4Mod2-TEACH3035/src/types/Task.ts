export interface Task {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
}

export interface TaskContextType {
  tasks: Task[];
  addTask: (title: string) => void;
  deleteTask: (id: string) => void;
  toggleTask: (id: string) => void;
}
