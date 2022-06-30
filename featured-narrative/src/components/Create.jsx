import React from "react";
import { Link, useParams } from "react-router-dom";
import img from '../assets/img/small.svg'
// import script from './script'

export default function Create() {
    const happy = ':)';
    const [textarea, setTextArea] = React.useState('');
    const [review, setReview] = React.useState('');
    const [output, setOutput] = React.useState('inner narrative off');
    const [input, setInput] = React.useState('narrative');

    function text(event) {
      event.preventDefault()
      setTextArea(event.target.value)
    }
    function read(event){
      event.preventDefault()
      setOutput('inner narrative')
      setInput('narrative off')
      setReview(textarea)
    }
    function write(event){
      event.preventDefault()
      setOutput('inner narrative off')
      setInput('narrative')
    }
    return ( 
        <main>
          <h1> Below we have our feautured Narrative from </h1>
          <div className = "home-link" >
              <Link to = "/" > Go back to home </Link> 
          </div>
          <div className="buttons">
              <div id="write" onClick={write}> Input </div>
              <div id="read" onClick={read}> Output </div>
          </div>
          <form className = {input}>
                <div> Enter your narrative </div>
                <textarea name = "textbox" id = "textbox" value={textarea} onChange={text}> </textarea>
          </form> 
          <div className={output}>
            <h1 id="h1"><sup id="small"><img src={img} alt="icon" /></sup>This may be an image of <span id="preview">{review}</span>.</h1>
          </div>
          <div className="container">
                <div className="about">
                    <p>
                        What we wanted to achieve through this project was to find ideas we can use to unit peoples unique experiences on matters they have seen, heard, or thought about. Things that they worry about and of course the ones that make them laugh {happy}.
                        <br />
                        <br />
                        Feel free to <Link to="/CreateNarrative">Create your Narrative,</Link> share it even stick it on pleaces you love.
                        <br />
                        <br />
                        See <Link to="/featuredNarrative">Feautured Narrative.</Link>
                    </p>
                </div>
          </div>
        </main>
    )
}