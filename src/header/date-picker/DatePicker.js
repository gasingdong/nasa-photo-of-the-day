import React from 'react';
import styled from 'styled-components';

function DatePicker({ date, setDate }) {

  const DatePickerWrapper = styled.div`
    text-align: center;
  `;

  const DateInput = styled.input`
    font-size: 1.4rem;
  `;

  return (
    <section>
      <DatePickerWrapper>
        <DateInput type="date" defaultValue={date} onInput={event => {
            setDate(event.target.value);
          }
        }></DateInput>
      </DatePickerWrapper>
    </section>
  );
}

export default DatePicker;
