import React from 'react'
import styled from 'styled-components'
import Todo from './Todo'

const Container = styled.div`

    display: flex;
    flex-direction: column;
    width: 100%;
    max-width:500px;

`

const TodoList = ({todoList, removeTodo}) => {
    return (
        <Container>
            { 
                todoList.map((todo, index) => <Todo value={todo} key={index} onClickRemove={() => removeTodo(index)} />)
            }
        </Container>
    )
}

export default TodoList
