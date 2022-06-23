import React from "react";
import { Link, useParams } from "react-router-dom";
// import script from './script'

class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      console.log('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit} className = "narrative">
          <label>
            Name:
            <input type="textbox" id="textbox" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
export default function Create() {
    const happy = ':)'; 
    const preview1 = document.querySelector('#textbox')
    return ( 
        <main>
            {console.log(preview1)}
            <h1> Below we have our feautured Narrative from </h1>
            <div className = "home-link" >
            <Link to = "/" > Go back to home </Link> 
            </div>
            <section >
            <div id = "read" > Read </div>
            <div id = "write" > Write </div> 
            </section>

            {/* <form className = "narrative" >
                <div> Enter your narrative </div>
                <textarea name = "textbox" id = "textbox" cols = "30"rows = "10" > </textarea>
            </form>  */}
            <NameForm />
            <div id = "preview" className = "narrative" ></div>
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