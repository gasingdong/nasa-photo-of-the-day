import React from 'react';

function Header({title, date}) {
  console.log(title);
  return (
    <header className="header">
      <h1 className="title">{title}</h1>
      <h2 className="date">{date}</h2>
    </header>
  );
}

export default Header;
