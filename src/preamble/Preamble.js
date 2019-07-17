import React from 'react';

function Preamble({ text }) {
  return (
    <section>
      <div className="preamble">
        <p>{text}</p>
      </div>
    </section>
  );
}

export default Preamble;
