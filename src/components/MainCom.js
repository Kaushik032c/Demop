import React, {useState} from 'react'

export default function MainCom() {
    var newText;
    const handelClick = () => {
        console.log("Upper Case Is clicked");
        newText = text.toUpperCase();
        setText(newText);
    }
    const handelchange = (event) => {
        console.log("On Change");
        setText(event.target.value);
        document.getElementById('review').innerHTML = text;
    }
    const [text, setText] = useState("");

  return (
    <>
        <div>
            <div className="container-fluid">
                <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label">Enter your Text Here</label>
                <textarea className="form-control" value={text}  id="exampleFormControlTextarea1" rows="8" onChange={handelchange}></textarea>
                </div>
                <button className="btn btn-primary" onClick={handelClick}>Click Me UpperCase</button>

                <h2>Review</h2>
                <p id="review"></p>
            </div>
        </div>
        <div className="containerfluid">
            <h3>Text Summary</h3>
            <p>{text.split(" ").length} Words  |  {text.length} Characters</p>
        </div>
    </>
  )
}
