import React from 'react';
import styled from 'styled-components';
import { Popover, Button } from 'antd';

function Preamble({ text }) {

  const StyledPopover = styled(Popover)`
    max-width: 200px;
    margin-top: 20px;
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
    <StyledPopover placement="bottom" content={content} trigger="click">
      <Button>Details</Button>
    </StyledPopover>
  );
}

export default Preamble;
