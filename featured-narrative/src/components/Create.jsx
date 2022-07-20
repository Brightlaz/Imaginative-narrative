import React from "react";
import { Link, useParams } from "react-router-dom";
import img from '../assets/img/small.svg';
import Pdf from "react-to-pdf";
import { Document, Page, Text, View, Image, StyleSheet } from '@react-pdf/renderer';
const ref = React.createRef();
// import script from './script'

export default function Create() {
    const happy = ':)';
    const [textarea, setTextArea] = React.useState('');
    const [review, setReview] = React.useState('');
    const [output, setOutput] = React.useState('inner narrative off');
    const [input, setInput] = React.useState('narrative');

    console.log(output)

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
    const options = {
      orientation: 'landscape',
      unit: 'mm',
      format: 'A4'
    }
    const styles = StyleSheet.create({
      page: {
        backgroundColor: '#E4E4E4'
      },
      section: {
        paddingRight: '100px'
      },
      text: {
        fontWeight: '950',
        fontSize: '35px',
        lineHeight: '62px',
      }
    })
// function print (event) {
//   html2pdf(print, {
//     margin: 10,
//     filename: 'create.pdf',
//     image: {
//         type: 'jpeg',
//         quality: 0.98
//     },
//     html2canvas: {
//         scale: 2,
//         logging: true,
//         dpi: 192,
//         letterRendering: true
//     },
//     jsPDF: {
//         unit: 'mm',
//         format: 'a4',
//         orientation: 'portrait'
//     }
// });
// }
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
          <div class="create-narrative">
            <form className = {input}>
                  <div> Enter your narrative </div>
                  <textarea name = "textbox" id = "textbox" value={textarea} onChange={text}> </textarea>
            </form>
            <Document ref={ref}>
              <Page size="A4" style={styles.page}>
                <View>
                  <div className={output} style={styles.section} >
                    <Text style={styles.text}><sup id="small"><Image><img src={img} alt="icon" /></Image></sup>This may be an image of <span id="preview">{review}.</span></Text>
                  </div>
                </View>
              </Page>
            </Document>
           
        </div>
        {/* logging={true} dpi={192} letterRendering={true} quality={0.98} */}
        <Pdf targetRef={ref} filename="Narrative.pdf" options={options}>
        {({ toPdf }) =><a id="button" onClick={toPdf}>Download</a>}
        </Pdf>
        {/* <a id="button" onClick={print}>Download</a> */}
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