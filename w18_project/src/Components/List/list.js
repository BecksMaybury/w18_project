import ListItem from "../ListItems/listItems"

function List ({toDoList, handleDelete}) {
    return(
    <ul>
        {toDoList.map((toDo, i) => (
        <ListItem key={i} text={toDo} handleDelete={() => handleDelete(i)}/>
        ))}
    </ul>
    )
}

export default List