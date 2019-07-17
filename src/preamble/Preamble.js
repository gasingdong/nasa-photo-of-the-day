import React from 'react';

function Preamble({ text }) {
  return (
    <section className="preamble">
      <div>
        <p>{text}</p>
      </div>
    </section>
  );
}

export default Preamble;
