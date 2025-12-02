/**
 * Application constants
 */

// Storage keys
export const STORAGE_KEYS = {
  TASKS: 'teach3035-tasks',
  THEME: 'teach3035-theme',
  USER_PREFERENCES: 'teach3035-preferences'
} as const;

// Application metadata
export const APP_INFO = {
  NAME: 'TEACH3035 To-Do List',
  VERSION: '2.0.0',
  DESCRIPTION: 'Task management with Context API'
} as const;

// Validation constraints
export const VALIDATION = {
  MAX_TASK_LENGTH: 100,
  MIN_TASK_LENGTH: 1
} as const;

// UI text
export const UI_TEXT = {
  ADD_TASK_PLACEHOLDER: 'Digite uma nova tarefa...',
  ADD_BUTTON: 'Adicionar Tarefa',
  DELETE_BUTTON_TITLE: 'Excluir tarefa',
  EMPTY_STATE_TITLE: 'Nenhuma tarefa adicionada ainda.',
  EMPTY_STATE_SUBTITLE: 'Adicione sua primeira tarefa acima!',
  PENDING_TASKS: 'Tarefas Pendentes',
  COMPLETED_TASKS: 'Tarefas Concluídas'
} as const;
