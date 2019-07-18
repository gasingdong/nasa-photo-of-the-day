import React from 'react';
import styled from 'styled-components';

function DatePicker({ date, setDate }) {

  const DatePickerWrapper = styled.div`
    text-align: center;
  `;

  return (
    <section>
      <DatePickerWrapper>
        <input type="date" defaultValue={date} onInput={event => {
            setDate(event.target.value);
          }
        }></input>
      </DatePickerWrapper>
    </section>
  );
}

export default DatePicker;
