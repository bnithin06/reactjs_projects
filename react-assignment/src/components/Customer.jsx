import React from 'react'
import { NavLink } from 'react-router-dom'

function Customer() {
    return (
        <>
        <div >
            <NavLink to={'/customer-details'} className={({ isActive }) => (isActive ? ` text-blue-500 w-full h-24 border-2` : ' text-black')}><div>hii</div></NavLink>
        </div>
        <div >
            <NavLink to={'/customer-details'}><div className='w-full h-24 border-2'>hii</div></NavLink>
        </div>
        <div>
            <NavLink to={'/customer-details'}><div className='w-full h-24 border-2'>hii</div></NavLink>
        </div>
        </>
        
    )
}

export default Customer
