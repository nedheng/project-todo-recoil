import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {todos} from './assets/Todos'
import { RecoilRoot, useRecoilState, useSetRecoilState } from 'recoil'
import { todosAtom } from './store/atoms/atom'

function App() {
  
  // const todos = todos.todos();
  console.log(todos[0])

  return <div>
    <RecoilRoot>
    <AddTodos></AddTodos>
    <FilterTodos></FilterTodos>
    <Todos></Todos>
    </RecoilRoot>
  </div>
      
  function AddTodos() {
    
    return <div>
      <input type="text"  placeholder='Title'/><br />
      <input type="text" placeholder='description' /><br />
      <button>Add Todo</button><br />
    </div>
  }
  function FilterTodos(){

    return <div>
      <input type="text" placeholder='Filter' />
    </div>
  }
  
}

function Todos(){
  return <div>
    todos here
  </div>
}

export default App
