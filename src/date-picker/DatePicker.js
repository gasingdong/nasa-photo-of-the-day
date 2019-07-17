import React from 'react';

function DatePicker({ date, setDate }) {
  return (
    <section>
      <div className="date-picker">
        <input type="date" defaultValue={new Date().toLocaleDateString('en-CA')} onInput={event => {
            setDate(event.target.value);
          }
        }></input>
      </div>
    </section>
  );
}

export default DatePicker;
