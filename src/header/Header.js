import React from 'react';
import { DatePicker } from 'antd';
import styled from 'styled-components';
import moment from 'moment';

function Header({ title, date, setDate }) {

  const HeaderWrapper = styled.div`
    font-size: 1.4rem;
    color: grey;
    background-color: red;
  `;

  const dateFormat = 'YYYY-MM-DD';

  function onChange(date, dateString) {
    setDate(dateString);
  }

  return (
    <header>
      <HeaderWrapper>
        <h1 className="title">{title}</h1>
        <DatePicker defaultValue={moment(date, dateFormat)} onChange={onChange}/>
      </HeaderWrapper>
    </header>
  );
}

export default Header;
