import React from 'react'

function Header() {
  return (
    <div className='Header'>
        <h2 className='Header-comp1'>A Quiz App</h2>
        <ul className='Header-comp2'>
            <li><a>Quiz</a></li>
            <li><a>Quiz Results</a></li>
            <li><a>Portfolio</a></li>
            <li><a>Github</a></li>
        </ul>
    </div>
  )
}

export default Header