import React from 'react';

const Form = ({ setInputText, todos, setTodos, inputText }) => {
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();

        if(inputText === '')
        {
            alert('Enter a not empty value');
            return;
        }
        setTodos([
            ...todos, 
            { 
                text: inputText, 
                completed: false, 
                id: Math.random() *1000 
            }
        ]);
        setInputText('');
    };

    return (
        <form>
            <input value = {inputText} type="text" className="todo-input" onChange = {inputTextHandler}/>
            <button className="todo-button" type="submit" onClick = {submitTodoHandler}>
                <i className="fas fa-plus-square">Add</i>
            </button>

        </form>
    );
}

export default Form;