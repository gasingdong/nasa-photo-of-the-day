import React, { useState, useEffect } from 'react';
import './App.scss';
import axios from 'axios';
import Header from './header/Header';
import Preamble from './preamble/Preamble';
import Content from './content/Content';
import DatePicker from './date-picker/DatePicker';

function App() {
  const apiKey = '251h2uaJvdQrHzVG2pxwAUU2SXUoX1OIPxqI7F58';
  const [cache, setCache] = useState({});
  const [date, setDate] = useState(new Date().toLocaleDateString('en-CA'));
  const [photo, setPhoto] = useState({});

  useEffect(() => {

    if (cache[date]) {
      setPhoto(cache[date]);
    } else {
      axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${date}`)
        .then(res => {
          setPhoto(res.data);
          setCache(cache => ({...cache, [date]: res.data}));
          console.log(res);
        });
    }
  }, [cache, date]);

  return (
    <div className="app">
      <Header title={photo.title} />
      <DatePicker date={date} setDate={setDate} />
      <Preamble text={photo.explanation} />
      <Content title={photo.title} type={photo.media_type} url={photo.url} />
    </div>
  );
}

export default App;
