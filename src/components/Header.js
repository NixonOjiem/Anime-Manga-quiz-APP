import React from 'react';
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='Header'>
        <h2 className='Header-comp1'><Link to= "/Home" className='Heading'>A Quiz App</Link></h2>
        <ul className='Header-comp2'>
            <li><Link to="/quiz"className='Link'> Start Quiz</Link></li>
            <li><a>Quiz Results</a></li>
            <li><a>Portfolio</a></li>
            <li><a>Github</a></li>
        </ul>
    </div>
  )
}

export default Header