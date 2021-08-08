import ListItem from "../ListItems/listItems"

function List ({toDoList, handleDelete}) {
     return(
    <div className = "list-scroll">
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
    </div>
    )
}

export default List

