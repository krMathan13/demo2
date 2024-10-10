import React from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <div className='nav'> 
            <nav>
                <ul>
                    <Link to ="/"><li>Home</li></Link>
                    <Link to ="/Work"><li></li>Our work</Link>
                    <Link to ="/Contact"><li>Contact</li></Link>
                    <Link to ="/Todolist"><li>Todolist</li></Link>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Navbar