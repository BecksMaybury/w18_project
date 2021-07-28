function ListItem ({text, handleDelete}) {
    return (
    <li>{text}
    <button onClick={handleDelete}>delete</button>
    </li>
    )
}

export default ListItem