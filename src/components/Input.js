import React from 'react'
import styled from 'styled-components'

const Input = styled.input`

  height: 15px;
  margin: 15px;
  border-radius: 5rem;
  border-style: solid;
  border-color: #eeeeee;
  box-shadow: 10px 10px 36px -10px rgba(0,0,0,0.75);
  padding: 15px;
  font-size: large;
  outline: none;

`

export default (props) => <Input {...props} />