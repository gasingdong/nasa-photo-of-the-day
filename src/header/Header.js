import React from 'react';
import DatePicker from './date-picker/DatePicker';

function Header({ title, date, setDate }) {
  return (
    <header>
      <div className="header">
        <h1 className="title">{title}</h1>
        <DatePicker date={date} setDate={setDate} />
      </div>
    </header>
  );
}

export default Header;
