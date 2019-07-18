import React from 'react';
import styled from 'styled-components';
import { Popover, Button } from 'antd';

function Preamble({ text }) {

  const StyledPopover = styled(Popover)`
    max-width: 200px;
  `;

  const ContentWrapper = styled.div`
    max-width: 800px;
    text-align: justify;
  `;

  const content = (
    <ContentWrapper>
      <p>{text}</p>
    </ContentWrapper>
  )

  return (
    <StyledPopover content={content} trigger="click">
      <Button>Learn More</Button>
    </StyledPopover>
  );
}

export default Preamble;
