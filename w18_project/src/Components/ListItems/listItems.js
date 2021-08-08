import bin from "../../images/bin.png"

function ListItem ({text, date, type, handleDelete}) {
    return (
    <li className={`list-item ${type}`}>
    <span> {date}: {text} </span>
    {/* <span> {date}: {`${text}.map((item) => text = item)`} </span> */}
    {/* <span>Date: {date}</span>  */}
    {/* <span>Activity type: {type}</span> */}
    {/* <span>Activity: {text}</span>     */}
    <div><submit onClick={handleDelete}><img className ={"delete-button"} src={bin} alt="bin"/></submit></div>
    {/* <div><button onClick={handleCompleted}>done!</button></div> */}
    </li>
    )
}

export default ListItem
