import React from 'react';
import styled from 'styled-components';

function Media({ title, type, url }) {

  const MediaWrapper = styled.div`
    text-align: center;
  `;

  return (
    <MediaWrapper>
      {
        type === "video" 
        ? <iframe width="500" height="300"title={title} src={url}></iframe>
        : <img width="500" src={url} alt={title}></img>
      } 
    </MediaWrapper>
  );
}

export default Media;
