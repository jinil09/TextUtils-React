import React, {useState} from 'react'


export default function TextArea(props) {

    //------------------------------------
    //------------------------------------
    const handleUpClick = ()=>{
        console.log("button was clicked")
        let newText= text.toUpperCase();
        setText(newText);
        props.ShowAlert("Converted to Uppercase!!" , "success")
    }

    const handleLoClick = ()=>{
        console.log("button was clicked")
        let newText= text.toLowerCase();
        setText(newText);
        props.ShowAlert("Converted to Lowwercase!!" , "successz")
    }

    const handleClearClick = ()=>{
        let newText= '';
        setText(newText);  
    }

    const handleOnChange = (event)=>{
        console.log("On Change button was clicked")
        setText(event.target.value)
    }

    const [text, setText]= useState("Enter Text Here2");
    
  return (
    <>
    <div className="container" style={{color : props.mode=== 'dark'? 'white' : '#042743'}}>
         <div className="mb-3">
            <h1 className='my-4'>{props.heading}</h1>
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode=== 'dark'? '#212529' : 'white', color : props.mode=== 'light'? '#212529' : 'white'}} id="my-box" rows="8"></textarea>
         </div>

         <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>Convert to upper-case</button>
         <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLoClick}>Convert to Lower-case</button>
         <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>Clear All Text</button>
    </div>

    <div className="container my-4" style={{color : props.mode=== 'dark'? 'white' : '#042743'}}>
        <h2>Your Text Summary is Here</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words And {text.length} Charactors</p>
        <p>You Can Read this in <b>{0.008 * text.split(" ").filter((e1)=>{return e1.length!==0}).length}</b> Minutes</p>

    </div>

    </>
  )
}

TextArea.defaultProps={
    heading: "Write Your Heading Here"
}


