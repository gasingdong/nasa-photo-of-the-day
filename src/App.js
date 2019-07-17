import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Header from "./header/Header";
import Preamble from "./preamble/Preamble";
import Content from "./content/Content";

function App() {
  const apiKey = "251h2uaJvdQrHzVG2pxwAUU2SXUoX1OIPxqI7F58";
  const [photo, setPhoto] = useState({});

  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
    .then(res => {
      setPhoto(res.data);
      console.log(res);
    })
  }, [])

  return (
    <div className="App">
      <Header title={photo.title} date={photo.date}/>
      <Preamble text={photo.explanation}/>
      <Content title={photo.title} type={photo.media_type} url={photo.url}/>
    </div>
  );
}

export default App;
