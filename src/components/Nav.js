import React from 'react';
import {NavLink} from 'react-router-dom';

const Nav = (props) => {

  return(
      <nav className="main-nav">
        <ul>
          <li><NavLink to="/lightnings" onClick={()=>props.showPictures('lightningbolt')}>Lightnings</NavLink></li>
          <li><NavLink to="/ocean" onClick={()=>props.showPictures('ocean')}>Ocean</NavLink></li>
          <li><NavLink to="/horses" onClick={()=>props.showPictures('horse')}>Horses</NavLink></li>
        </ul>
      </nav>
    );

}

export default Nav;
