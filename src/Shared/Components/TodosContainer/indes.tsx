import { MdCheckCircle } from "react-icons/md";
import { IoTrashOutline } from "react-icons/io5";
import { TbClipboardText } from "react-icons/tb";

import * as S from "./styles"
import { TodoList } from "../../../App";

type TodosContainerProps = {
  todoList: TodoList[];
  onStatusChange: (id: string) => void;
  onDeleteTask: (id: string) => void;
}

export const TodosContainer = ({
  todoList,
  onStatusChange,
  onDeleteTask
}:TodosContainerProps) => {

  return (
    <S.Container>
      <S.Header>
        <S.TodosInfos>
          <S.TextCreatedTodos>Tarefas criadas</S.TextCreatedTodos> <S.Counter>{todoList.length}</S.Counter>
        </S.TodosInfos>

        <S.TodosInfos>
        <S.TextFinishedTodos>Concluidas</S.TextFinishedTodos> <S.Counter>{todoList.filter(todo => todo.status).length} de {todoList.length}</S.Counter>
        </S.TodosInfos>
      </S.Header>

     
        {todoList.length === 0 ? (
          <S.OutItem>
            <TbClipboardText />
            <S.OutText>
              <strong>Você ainda não tem tarefas cadastradas</strong>
              Crie tarefas e organize seus itens a fazer
            </S.OutText>
          </S.OutItem>
        ): (
          <S.List>
            {
              todoList.map(todo => (
                <S.ListItem key={todo.id}>
                  <S.ItemStatus
                    data-active={todo.status}
                    onClick={() => onStatusChange(todo.id)}
                  >
                    <MdCheckCircle />
                  </S.ItemStatus>
                  <S.Content>
                    {todo.content}
                  </S.Content>
                  <S.ButtonDelete
                    onClick={() => onDeleteTask(todo.id)}
                  >
                    <IoTrashOutline />
                  </S.ButtonDelete>
                </S.ListItem>
              ))
            }
          </S.List>
        )}
      
    </S.Container>
  );
}
