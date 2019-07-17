import React from 'react';
import Preamble from './preamble/Preamble';
import Media from './media/Media';

function Content({ title, text, type, url }) {
  return (
    <section>
        <Preamble text={text}/>
        <Media title={title} type={type} url={url}/>
    </section>
  );
}

export default Content;