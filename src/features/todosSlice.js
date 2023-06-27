import { createSlice, createAction } from "@reduxjs/toolkit";

export const loadTodos = createAction("todos/loadTodos");

const todoSlice = createSlice({
  name: "todos",
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      const newTodo = {
        id: Date.now(),
        text: action.payload.text,
        completed: false,
      };
      state.push(newTodo);
      saveTodosToLocalStorage(state);
    },

    toggleTodo: (state, action) => {
      const todo = state.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
      saveTodosToLocalStorage(state);
    },

    deleteTodo: (state, action) => {
      const index = state.findIndex((todo) => todo.id === action.payload);
      if (index !== -1) {
        state.splice(index, 1);
        saveTodosToLocalStorage(state);
      }
    },

    loadTodos: (state, action) => {
      const savedTodos = localStorage.getItem('todos')
      if(savedTodos){
        return JSON.parse(savedTodos)
      }
    },
  },
});

const saveTodosToLocalStorage = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
