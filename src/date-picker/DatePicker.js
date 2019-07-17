import React from 'react';

function DatePicker({ date, setDate }) {
  return (
    <section>
      <div className="date-picker">
        <input type="date" defaultValue={date} onInput={event => {
            setDate(event.target.value);
          }
        }></input>
      </div>
    </section>
  );
}

export default DatePicker;
