import React from 'react';
import { Typography, DatePicker } from 'antd';
import styled from 'styled-components';
import moment from 'moment';

function Header({ title, date, setDate }) {

  const { Title } = Typography;

  const HeaderWrapper = styled.div`
    display: flex;
    flex-flow: column;
    align-items: center;
    margin-bottom: 20px;
  `;

  const StyledDatePicker = styled(DatePicker)`
    width: 20%;
  `;

  const dateFormat = 'YYYY-MM-DD';

  function onChange(date, dateString) {
    setDate(dateString);
  }

  return (
    <header>
      <HeaderWrapper>
        <Title>{title}</Title>
        <StyledDatePicker defaultValue={moment(date, dateFormat)} onChange={onChange}/>
      </HeaderWrapper>
    </header>
  );
}

export default Header;
