import React, {useState} from 'react'


export default function TextForm(props) {

    const handleUpperCaseClick = () => {
        // console.log("UpperCase was clicked." + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Coverted to uppercase", "success");
    }

    const handleLowerCaseClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Coverted to lowercase", "success");
    }

    const handleClear= () => {
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared", "success");
    }

    const handleCopy = () => {
        // console.log(text);
        let text = document.getElementById('myBox');
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to clipboard", "success");
    }

    const handleExtraSpace = ()=> {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed", "success");
    }

    const handleOnChange = (event) => {
        // console.log("On change.");
        setText(event.target.value);
    }

    const [text, setText] = useState('');
    // text = 'newText';   // wrong way to change state
    // setText('newText');   // Correct way to change state
    return (
        <>
        <div className="container" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" style={{backgroundColor: props.mode === 'dark' ? 'rgb(57 60 63)' : 'white', color: props.mode === 'dark' ? 'white' : '#042743'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpperCaseClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowerCaseClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpace}>Remove Extra Spaces</button>
            <button className="btn btn-primary mx-1 my-2" onClick={handleClear}>Clear</button>
        </div>
        <div className="container my-3" style={{color: props.mode === 'dark' ? 'white' : '#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length > 0 ? text : "Enter something in the textbox above preview your text."}</p>
        </div>
        </>
    )
}
