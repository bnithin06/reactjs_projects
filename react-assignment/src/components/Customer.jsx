import React from 'react';
import { NavLink } from 'react-router-dom';

function Customer() {
    // Define an array of customers
    const customers = [
        { name: 'Customer 1', description: 'Description 1', query: 'nature' },
        { name: 'Customer 2', description: 'Description 2', query: 'mountains' },
        { name: 'Customer 3', description: 'Description 3', query: 'beach' },
        { name: 'Customer 4', description: 'Description 4', query: 'forest' },
        { name: 'Customer 5', description: 'Description 5', query: 'city' }
    ];

    return (
        <>
            {/* Map through the customers array */}
            {customers.map((customer, index) => (
                <div key={index}>
                    {/* Render NavLink for each customer */}
                    <NavLink to={`/customer-details/${customer.query}`} className={({ isActive }) => (isActive ? 'text-blue-500' : 'text-black')}>
                        <div className='w-full h-24 border-2'>Click {customer.name}</div>
                    </NavLink>
                </div>
            ))}
        </>
    );
}

export default Customer;
