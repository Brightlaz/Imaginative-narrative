import React from "react";
import Navbar from "../components/Navbar";
import Main2 from "../components/Main2";
import Footer from "../components/Footer";

export default function home() {
  const happy = ':)'
  return (
    <div>
      <Navbar />
      <Main2 nar = "This may be an image of an apple. You might imagine it to be a red apple but someone else will imagine a green apple."
          info = {`What we wanted to achieve through this project was to find ideas we can use to unit peoples unique experiences on matters they have seen, heard, or thought about. Things that they worry about and of course the ones that make them laugh ${happy}.`}    
      />
      <Footer />
    </div>
   
  )
}