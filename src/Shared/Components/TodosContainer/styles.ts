import styled from "styled-components";
import { DefaultContainer } from "../../styles/DefaultContainer";

export const Container = styled.section`
  ${DefaultContainer}
  margin-top: 6.4rem;
  flex-direction: column;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: inherit;
  margin-bottom: 2.4rem;
`

export const TodosInfos = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: .8rem;
`

export const TextCreatedTodos = styled.p`
  color: #4EA8DE;
  font-size: 1.4rem;
  font-weight: 800;
`

export const Counter = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #333333;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 800;
  padding: .6rem;
  border-radius: 2rem;
`

export const TextFinishedTodos = styled.p`
  color: #8284FA;
  font-size: 1.4rem;
  font-weight: 800;
`

export const List = styled.ul`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  list-style: none;
  gap: 1.2rem;
  width: 100%;
`

export const ListItem = styled.li`
  border-radius: .8rem;
  background-color: #262626;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 1.2rem;
  padding: 1.6rem;
  width: 100%;
`

export const ItemStatus = styled.div`
  display: flex;
  width: 2.4rem;
  height: 2.4rem;
  border: 1px solid #4EA8DE;
  border-radius: 100%;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s linear;

  svg {
    display: none;
    padding: 0;
    margin: 0;
    width: fit-content;
    font-size: 2.5rem;
    color: #5E60CE;
  }

  &[data-active="true"] {
    border: 0;
    
    svg {
      display: block;
    }
  }
`

export const Content = styled.div`
  color: #fff;
  font-size: 1.4rem;
  font-weight: 400;

  width: 100%;

  p, strong {
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
  }
`

export const ButtonDelete = styled.button`
  width: fit-content;
  background: none;
  border: 0;
  cursor: pointer;
  transition: color 0.2s linear;

  svg {
    padding: 0;
    margin: 0;
    width: fit-content;
    font-size: 2.5rem;
    color: #808080;
  }

  &:hover svg {
    color: #fff;
  }
`

export const OutItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 2.4rem;
  border-top: 1px solid #333333;

  svg {
    font-size: 5.6rem;
    margin-bottom: 1.6rem;
    margin-top: 6.4rem;
    color: #3D3D3D;
  }
`

export const OutText = styled.p`
  text-align: center;
  color: #808080;

  strong {
    display: block;
    font-weight: 800;
  }
`