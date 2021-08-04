function ListItem ({text, date, type, handleDelete}) {
    return (
    <li className={`list-item ${type}`}>
    <span> {date}: {text} </span>
    {/* <span>Date: {date}</span>  */}
    {/* <span>Activity type: {type}</span> */}
    {/* <span>Activity: {text}</span>     */}
    <div><button className ={"delete-button"} onClick={handleDelete}>X</button></div>
    {/* <div><button onClick={handleCompleted}>done!</button></div> */}
    </li>
    )
}

export default ListItem