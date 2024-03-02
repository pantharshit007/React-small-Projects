import React from 'react'
import { FaShoppingCart } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

function Navbar() {
    return (
        <div className='bg-blue-400'>
            <div className='flex flex-row justify-between'>
                <NavLink to='/'>
                    <div>
                        <img src="src\assets\logo.png" alt="Logo" width={300} height={100} />
                    </div>
                </NavLink>

                <div>
                    <NavLink to='/'>
                        <p>Home</p>
                    </NavLink>
                    <NavLink to="/cart">
                        <FaShoppingCart />
                    </NavLink>

                </div>
            </div>
        </div>
    )
}

export default Navbar