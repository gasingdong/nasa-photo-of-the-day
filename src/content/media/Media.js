import React from 'react';

function Media({ title, type, url }) {
  
  if (type === "video") {
    return (
      <div className="media">
        <iframe width="500" height="300"title={title} src={url}>
        </iframe> 
      </div>
    );
  } else {
    return (
      <div className="media">
        <img width="500" src={url} alt={title}></img>
      </div>
    );
  }
}

export default Media;
