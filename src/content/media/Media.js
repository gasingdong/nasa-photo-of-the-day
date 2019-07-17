import React from 'react';

function Media({ title, type, url }) {
  
  if (type === "video") {
    return (
      <div className="media">
        <iframe title={title} width="420" height="315" src={url}>
        </iframe> 
      </div>
    );
  } else {
    return (
      <div className="media">
        <img src={url} alt={title}></img>
      </div>
    );
  }
}

export default Media;
