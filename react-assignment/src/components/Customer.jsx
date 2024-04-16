import React from 'react'
import { NavLink } from 'react-router-dom'

function Customer() {
    return (
        <>
        <div >
            <NavLink to={'/customer-details'} className={({ isActive }) => (isActive ? ' text-blue-500 ' : ' text-black')}><div className='w-full h-24 border-2'>Click Me1</div></NavLink>
        </div>
        <div >
            <NavLink to={'/customer-details'}><div className='w-full h-24 border-2'>Click Me2</div></NavLink>
        </div>
        <div>
            <NavLink to={'/customer-details'}><div className='w-full h-24 border-2'>Click Me3</div></NavLink>
        </div>
        </>
        
    )
}

export default Customer
