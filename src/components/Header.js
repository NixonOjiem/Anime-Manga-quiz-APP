import React from 'react';
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='Header'>
        <h2 className='Header-comp1'><Link to= "/Home" className='Heading'>A Quiz App</Link></h2>
        <ul className='Header-comp2'>
            <li><Link to="/quiz"className='Link'> Bolean Quiz</Link></li>
            <li><Link to="/open-quiz" className='Link'>Open Quiz</Link></li>
            <li><Link to="/Results" className='Link'>Quiz Results</Link></li>
            <li><a href='https://myportfolio-cde82.web.app/'>Portfolio</a></li>
            <li><a href=''>Github</a></li>
        </ul>
    </div>
  )
}

export default Header