import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './header/Header';
import Content from './content/Content';
import styled from 'styled-components';
import { Card } from 'antd';

function App() {
  const appTitle = "NASA Astronomy Photo of the Day";
  const apiKey = '251h2uaJvdQrHzVG2pxwAUU2SXUoX1OIPxqI7F58';
  const [cache, setCache] = useState({});
  const [date, setDate] = useState(new Date().toLocaleDateString('en-CA'));
  const [photo, setPhoto] = useState({});

  const AppWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
  `;

  const AppInnerWrapper = styled.div`
    width: 80%;
    max-width: 800px;
    display: flex;
    flex-flow: column;
    align-items: center;
    margin: 20px 5%;
  `;

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
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [cache, date]);

  return (
    <AppWrapper>
      <AppInnerWrapper>
        <Card title={<Header title={appTitle} date={date} setDate={setDate}/>}>
          <Content title={photo.title} text={photo.explanation} type={photo.media_type} url={photo.url} />
        </Card>
      </AppInnerWrapper>
    </AppWrapper>
  );
}

export default App;
