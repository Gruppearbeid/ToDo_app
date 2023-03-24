import React, {useState} from 'react'

function TodoForm() {
    const [input, setInput] = useState('')

  return (
    <form className='todo-form'>
        <input 
        type='text' 
        placeholder='Ny oppgåve' 
        value={input}
        name='text'
        className='todo-input'
        />
        <button className='todo-button'>
            Legg til oppgåve
        </button>
    </form>
  )
}

export default TodoForm