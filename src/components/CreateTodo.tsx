import React, { useRef } from "react";

interface CreateTodoProps {
    onAddTodo: (value: string) => void;
}

const CreateTodo: React.FC<CreateTodoProps> = (props) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const todoHandler = (event: React.SyntheticEvent) => {
        event.preventDefault();
        const inputValue = inputRef.current!.value;
        props.onAddTodo(inputValue);

    }
    return <form onSubmit={todoHandler}>
        <label htmlFor="todo">Create your task </label>
        <input id="todo" ref={inputRef} />

        <button type="submit">Submit Task</button>
    </form>
}

export default CreateTodo;