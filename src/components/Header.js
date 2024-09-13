import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  function myFunction() {
    console.log("Icon clicked!");
    const x = document.getElementById("myTopnav");
    if (x) {
      if (x.classList.contains("responsive")) {
        x.classList.remove("responsive");
        console.log("Removed responsive class");
      } else {
        x.classList.add("responsive");
        console.log("Added responsive class");
      }
    } else {
      console.error("Element with id 'myTopnav' not found");
    }
  }

  return (
    <div className='Header' id="myTopnav">
      <h2 className='Header-comp1'><Link to="/Home" className='Heading'>A Quiz App</Link></h2>
      <ul className='Header-comp2'>
        <li><Link to="/quiz" className='Link'>Boolean Quiz</Link></li>
        <li><Link to="/open-quiz" className='Link'>Open Quiz</Link></li>
        <li><Link to="/Results" className='Link'>Quiz Results</Link></li>
        <li><a href='https://myportfolio-cde82.web.app/'>Portfolio</a></li>
        <li><a href='https://github.com/NixonOjiem'>Github</a></li>
        <li>
          <a href="javascript:void(0);" className="icon" onClick={myFunction}>
            <i className="fa fa-bars"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
