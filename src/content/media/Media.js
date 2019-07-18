import React from 'react';
import styled from 'styled-components';
import { Typography } from 'antd';

function Media({ title, type, url }) {

  const { Title } = Typography;
  const MediaWrapper = styled.div`
    text-align: center;
  `;

  return (
    <>
    <Title level={2}>{title}</Title>
    <MediaWrapper>
      {
        type === "video" 
        ? <iframe width="500" height="300"title={title} src={url}></iframe>
        : <img width="500" src={url} alt={title}></img>
      } 
    </MediaWrapper>
    </>
  );
}

export default Media;
