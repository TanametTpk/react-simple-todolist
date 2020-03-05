import React, {useState} from 'react'
import TodoList from './components/TodoList'
import Input from './components/Input'
import Button from './components/Button'
import styled from 'styled-components'

const Container = styled.div`

  width: 100vw;
  height: 100vh;
  background-color: #f6f7f8;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`

function App() {

  const [todoList, setTodoList] = useState([])
  const [text, setText] = useState("")

  const onTextChange = ({target: {value}}) => {

    setText(value)

  }

  const addTask = () => {

    // add todo
    setTodoList([
      ...todoList,
      text
    ])

    // clear text
    setText("")

  }

  const removeTodo = (index) => {

    let todo = [...todoList]

    todo.splice(index, 1)
    setTodoList(todo)

  }

  return (
    <Container>
      
      <div>
        <Input type="text" value={text} onChange={ onTextChange } />
        <Button onClick={addTask} >Add task</Button>
      </div>

      <TodoList todoList={todoList} removeTodo={removeTodo} />

    </Container>
  )

}

export default App
