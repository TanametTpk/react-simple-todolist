import React from 'react'
import styled from 'styled-components'

const Container = styled.div`

    background-color: white;
    box-shadow: 10px 10px 36px -10px rgba(0,0,0,0.75);
    border-radius: 6px;
    margin: 12px;
    padding: 12px;
    transition: all .2s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }

`

const DeleteButton = styled.button`

    float:right;
    background-color: #c4112c;
    color: white;
    font-size: medium;
    border-style: none;
    border-radius: 6px;
    box-shadow: 10px 10px 36px -10px rgba(0,0,0,0.75);
    outline: none;
    transition: all .2s ease-in-out;

    &:hover{
        background-color: #b4011c;
    }

`

const Todo = ({value, onClickRemove}) => {
    return (
        <Container>
            {value}
            <DeleteButton onClick={onClickRemove} > delete </DeleteButton>
        </Container>
    )
}

export default Todo
