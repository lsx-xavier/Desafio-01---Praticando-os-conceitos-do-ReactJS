import { FormEvent, InvalidEvent, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { MdAddCircleOutline } from "react-icons/md";
import { TodoList } from "../../../App";
import * as S from "./styles"

type AddNewTodoProps = {
  onSubmit: (toDo: TodoList) => void;
}

export const AddNewTodo = ({onSubmit}: AddNewTodoProps) => {
  const [value, setValue] = useState("")
  
  const submit = (event: FormEvent) => {
    event.preventDefault();

    onSubmit({id: uuidv4(), content: value, status: false});
    setValue("");
  }

  const handleNewTodo = (event: InvalidEvent<HTMLInputElement>) => {
    event?.target?.setCustomValidity("")
    setValue(event.target.value)
  }

  const handleNewTodoInvalid = (event: InvalidEvent<HTMLInputElement>) => {
    event.target.setCustomValidity("Este campo é obrigatório!")
  }

  const isNewTodoEmpty = value.length === 0

  return (
    <S.Container
      onSubmit={submit}
    >
      <S.Input
        placeholder="Adicione uma nova tarefa"
        value={value}
        onChange={handleNewTodo}
        onInvalid={handleNewTodoInvalid}
        required
      />
      <S.Button disabled={isNewTodoEmpty}>
        Criar <MdAddCircleOutline />
      </S.Button>
    </S.Container>
  );
}
