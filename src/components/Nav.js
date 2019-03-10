import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = (props) => {

  return(
      <nav className="main-nav">
        <ul>
          <li><NavLink to="/lightnings" onClick={()=>props.showPictures('lightningbolt')}>Lightnings</NavLink></li>
          <li><NavLink to="/waves" onClick={()=>props.showPictures('waves+sea')}>Waves</NavLink></li>
          <li><NavLink to="/moon" onClick={()=>props.showPictures('moon')}>Moon</NavLink></li>
        </ul>
      </nav>
    );

}

export default Nav;
