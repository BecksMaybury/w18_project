import {useState} from "react"
import check from "../../images/check.png"

function Input ({onChange}) {
    // const {onChange} = props
    const [text, setText] = useState("");
    const [date, setDate] = useState(Date);
    const [type, setType] = useState("");
    
    function handleSubmit(e) {
        e.preventDefault();
        onChange(text, date, type);
        setText("");
    }

    return (
   <form  onSubmit={handleSubmit}>
   <span className="input-text">Add your log here:</span>
   <input 
    className={"input"}
     type={"date"}
     placeholder ={"dd-mm-yyyy"}
     onChange= {(e) => setDate(e.target.value)}
     required
   />
   <select
    className={"input"}
    onChange= {(e) => setType(e.target.value)}
    required
    >
    <option>Select your activity type</option>
    <option value="connect">I connected</option>
    <option value="active">I was active</option>
    <option value="learn">I learned</option>
    <option value="notice">I took notice</option>
    <option value="give">I gave</option>
   </select>
    <input 
     className={"input"}
     value={text}
     placeholder={"add your item text here"}
     onChange= {(e) => setText(e.target.value)}
    // onChange= {(e) => setText([{id: Math.random(), toDoText: (e.target.value), completed: false}])}
    ></input>
    <submit className= "add-item"><img onClick={handleSubmit} className="add-item-image" src={check} alt="add log"/></submit>
   </form>
    )
}

export default Input