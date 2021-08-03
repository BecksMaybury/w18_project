function ListItem ({text, date, handleDelete}) {
    return (
    <li className="list-item">{date} {text}
    <div><button onClick={handleDelete}>delete</button></div>
    {/* <div><button onClick={handleCompleted}>done!</button></div> */}
    </li>
    )
}

export default ListItem