import React from 'react';

const NotFound = () => {
  return(
    <ul>
      <li className="not-found">
        <h3> Error 404: page not found</h3>
        <p>The route you requested doesn't exist.</p>
      </li>
    </ul>
  );
}

export default NotFound;
