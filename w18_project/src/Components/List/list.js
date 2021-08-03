import ListItem from "../ListItems/listItems"

function List ({toDoList, handleDelete}) {
     return(
    <ul>
        {toDoList.map((toDo, i) => (
            <ListItem 
             key={toDo.id} 
             text={`${toDo.date}: \t ${toDo.toDoText}`} 
             handleDelete={() => handleDelete(i)}
            />
            ))
        }
    </ul>
    )
}

export default List