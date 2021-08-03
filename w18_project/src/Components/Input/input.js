import {useState} from "react"

function Input ({onChange}) {
    // const {onChange} = props
    const [text, setText] = useState("");
    const [date, setDate] = useState(Date);
    
    function handleSubmit(e) {
        e.preventDefault();
        onChange(text, date);
        setText("");
    }

    return (
   <form onSubmit={handleSubmit}>
   <input 
    class={"input-date"}
     type={"date"}
     placeholder ={"dd-mm-yyyy"}
     onChange= {(e) => setDate(e.target.value)}
     required
   />
    <input 
     class={"input-text"}
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