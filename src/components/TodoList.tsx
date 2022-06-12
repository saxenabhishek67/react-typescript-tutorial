interface TodoItem {
    items: { id: number, task: string }[]
}
const TodoList: React.FC<TodoItem> = (props) => {
    return <ul>
        {
            props.items.map(item => <li key={item.id}>{item.task}</li>)
        }
    </ul>
}

export default TodoList;