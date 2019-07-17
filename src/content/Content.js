import React from 'react';
import Preamble from './preamble/Preamble';
import Media from './media/Media';

function Content({ title, text, type, url }) {
  return (
    <section>
      <div className="content">
        <Preamble text={text}/>
        <Media title={title} type={type} url={url}/>
      </div>
    </section>
  );
}

export default Content;