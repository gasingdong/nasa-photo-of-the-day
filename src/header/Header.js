import React from 'react';

function Header({ title, date }) {
  return (
    <header>
      <div className="header">
        <h1 className="title">{title}</h1>
      </div>
    </header>
  );
}

export default Header;
