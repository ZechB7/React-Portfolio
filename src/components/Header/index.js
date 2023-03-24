import React from 'react';
import coverImage from '../../assets/cover/cover-image.JPG';

function Header(props) {

  return (
    <header className="flex-row space-between px-1">
      <h1>Zechariah Barrett</h1>
      <img src={coverImage} alt="background"></img>
      {props.children}
    </header>
  );
}

export default Header;
