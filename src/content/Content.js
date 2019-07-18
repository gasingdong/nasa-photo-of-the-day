import React from 'react';
import Preamble from './preamble/Preamble';
import Media from './media/Media';
import styled from 'styled-components';

function Content({ title, text, type, url }) {

  const ContentWrapper = styled.div`
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
  `;

  return (
    <section>
      <ContentWrapper>
        <Media title={title} type={type} url={url}/>
        <Preamble text={text}/>
      </ContentWrapper>
    </section>
  );
}

export default Content;