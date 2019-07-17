import React from 'react';

function Content({ title, type, url }) {
  
  if (type === "video") {
    return (
      <section>
        <div className="content">
          <iframe title={title} width="420" height="315" src={url}>
          </iframe> 
        </div>
      </section>
    );
  } else {
    return (
      <section>
        <div className="content">
          <img src={url} alt={title}></img>
        </div>
      </section>
    );
  }
}

export default Content;
