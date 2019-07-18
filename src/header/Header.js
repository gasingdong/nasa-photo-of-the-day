import React from 'react';
import DatePicker from './date-picker/DatePicker';
import styled from 'styled-components';

function Header({ title, date, setDate }) {

  const HeaderWrapper = styled.div`
    font-size: 1.4rem;
    color: grey;
    background-color: red;
  `;

  return (
    <header>
      <HeaderWrapper>
        <h1 className="title">{title}</h1>
        <DatePicker date={date} setDate={setDate} />
      </HeaderWrapper>
    </header>
  );
}

export default Header;
