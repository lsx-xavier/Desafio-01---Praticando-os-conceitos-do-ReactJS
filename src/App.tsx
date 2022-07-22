import { useState } from "react";
import { GlobalStyle } from "./Global.style";
import { AddNewTodo } from "./Shared/Components/AddNewTodo";
import { Header } from "./Shared/Components/header";
import { TodosContainer } from "./Shared/Components/TodosContainer/indes";

export type TodoList = {
  id: string;
  status: boolean;
  content: string;
}

export function App() {
  const [todoList, setTodoList] = useState<TodoList[]>([])

  console.log("todoList", todoList)
  
  const handleCreateNewTodo = (toDo: TodoList) => {
    console.log(toDo)
    setTodoList(state => ([...state, toDo]))
  }

  const handleDoneTodo = (id: string) => {
    setTodoList(state => (
      state.map(task => task.id === id
        ? ({id: task.id, content: task.content, status: !task.status})
        : task)
    ))
  }

  const handleDeleteTodo = (id: string) => {
    setTodoList(state => ([...state.filter(todo => todo.id !== id)]))
  }

  return (
    <>
      <GlobalStyle />

     <Header />
     <AddNewTodo onSubmit={handleCreateNewTodo} />
     <TodosContainer
      todoList={todoList}
      onStatusChange={handleDoneTodo}
      onDeleteTask={handleDeleteTodo}
    />
    </>
  )
}

