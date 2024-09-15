import React, { useState,useEffect } from 'react'
import PropTypes from 'prop-types';
export default function TextForm(props) {
    const[text,setText]=useState('Enter Text here ..');
    useEffect(() => {
        setText("new text");
      }, []);
    // const [count, setCount] = useState(0);
    const handleUpCase = () => {
      let newText=text.toUpperCase();
      setText(newText);
      props.showalert("Converted to Upper Case","success")
      // document.title="Textutils-Upper Case"
      };
    const handleOnChange = (event) => {
        console.log("On Change")
        setText(event.target.value);
    };
    const handleLowCase = (event) => {
      let newText=text.toLowerCase();
      setText(newText);
      props.showalert("Converted to lower case","success")
      // document.title="Textutils-Lower Case"
  };
  const handleClrtxt = (event) => {
    setText('');
    props.showalert("Cleared Text","success")
    // document.title="Textutils-Clear Text"
};
const handleCopy=(event)=>{
  var text=document.getElementById("myBox");
  text.select();
  text.setSelectionRange(0,9999);
  navigator.clipboard.writeText(text.value);
  props.showalert("Copied Text","success")
  // document.title="Textutils-Copy Text"
}
const handleExtraSpaces=()=>{
  let newText=text.split(/[ ]+ /);
  setText(newText.join(" "))
}
// const TxtColor=props.mode ==='grey'?'white':'black';
    return (
      <>
    <div className='container my-3' style={{color : props.mode==='grey'?'white':'black'}}>
        <h3>{props.Heading}</h3>
        <div className="my-3">
        {/* <label htmlFor="myBox" className="form-label">{props.Exampletextarea}</label> */}
        <textarea className="form-control" value={text} style={{color : props.mode==='grey'?'white':'black',backgroundColor : props.mode==='grey'?'rgb(36 74 104)':'white'}} onChange={handleOnChange} id="myBox" rows="3"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleUpCase}>Convert to Uppercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleLowCase}>Convert to Lowercase</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleClrtxt}>Clear Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleCopy}>Copy Text</button>
        <button disabled={text.length===0} className="btn btn-primary mx-2 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        {/* <p>You clicked {count} times</p>
        <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        Click me
        </button> */}
    </div>
    <div className="container my-3" style={{color : props.mode==='grey'?'white':'black'}}>
      <h1>Your Text Summary</h1>
      <p>{text.split(' ').filter((element)=>{return element.length!==0}).length} words and {text.length} charecters</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:'Enter something to Preview'}</p>
    </div>
    </>
    )
}
TextForm.propTypes={Heading : PropTypes.string,
    Exampletextarea : PropTypes.string
  }
// TextForm.defaultProps={
//     Heading : 'set title is here ',
//     Exampletextarea: 'Example textarea -007 '
//   }