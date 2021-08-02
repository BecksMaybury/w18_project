import {useState} from "react"

function Input ({onChange}) {
    // const {onChange} = props
    const [text, setText] = useState("");
    
    function handleSubmit(e) {
        e.preventDefault();
        onChange(text);
        setText("");
    }

    return (
   <form onSubmit={handleSubmit}>
    <input 
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