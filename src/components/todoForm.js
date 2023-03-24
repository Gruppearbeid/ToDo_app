import React, {useState} from 'react'

function TodoForm(props) {
    const [input, setInput] = useState('')

    const handleChange = event => {
        setInput(event.target.value);
    };

    const handleChangeSubmit = event => {
        // prevents the app to reload when submitting todos
        event.preventDefault();
        /*
        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })
        */
        setInput('');
    };
    

  return (
    <form 
    className='todo-form' 
    onSubmit={handleChangeSubmit}>
        <input 
        type='text' 
        placeholder='Ny oppgåve' 
        value={input}
        name='text'
        className='todo-input'
        onChange={handleChange}
        />
        <button className='todo-button'>
            Legg til oppgåve
        </button>
    </form>
  )
}

export default TodoForm