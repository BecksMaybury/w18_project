import {useState} from "react"

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
   <form onSubmit={handleSubmit}>
   <input 
    className={"input-date"}
     type={"date"}
     placeholder ={"dd-mm-yyyy"}
     onChange= {(e) => setDate(e.target.value)}
     required
   />
   <select
   
    className={"input-type"}
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
     className={"input-text"}
     value={text}
     placeholder={"add your item text here"}
     onChange= {(e) => setText(e.target.value)}
    // onChange= {(e) => setText([{id: Math.random(), toDoText: (e.target.value), completed: false}])}
    ></input>
    <button>add item</button>
   </form>
    )
}

export default Input