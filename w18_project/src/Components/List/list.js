import ListItem from "../ListItems/listItems"

function List ({toDoList, handleDelete}) {
     return(
    <ul>
        {toDoList.map((toDo, i) => (
            <ListItem 
             key={toDo.id} 
             date={`${toDo.date}`}
             text={`${toDo.toDoText}`} 
             type={`${toDo.type}`}
             handleDelete={() => handleDelete(i)}
            />
            ))
        }
    </ul>
    )
}

export default List