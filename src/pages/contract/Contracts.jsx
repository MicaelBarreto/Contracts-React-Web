import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Contracts({ token }) {
    const [contracts, setContracts] = useState([]);
    const data = [
        {title: 'New highway', company: 'Highway man company', date: '10/02/2019', price: '$ 1,000,000,000.00'},
        {title: 'New highway', company: 'Highway man company', date: '10/02/2019', price: '$ 1,000,000,000.00'},
        {title: 'New highway', company: 'Highway man company', date: '10/02/2019', price: '$ 1,000,000,000.00'},
        {title: 'New highway', company: 'Highway man company', date: '10/02/2019', price: '$ 1,000,000,000.00'},
        {title: 'New highway', company: 'Highway man company', date: '10/02/2019', price: '$ 1,000,000,000.00'},
        {title: 'New highway', company: 'Highway man company', date: '10/02/2019', price: '$ 1,000,000,000.00'},
        {title: 'New highway', company: 'Highway man company', date: '10/02/2019', price: '$ 1,000,000,000.00'},
        {title: 'New highway', company: 'Highway man company', date: '10/02/2019', price: '$ 1,000,000,000.00'},
        {title: 'New highway', company: 'Highway man company', date: '10/02/2019', price: '$ 1,000,000,000.00'},
    ];

    useEffect(() => {

    });

    return (
        <div className='inner-content'>
            <table className=''>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Company</th>
                        <th>Start Date</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(row => (
                        <tr>
                            <td>{row.title}</td>
                            <td>{row.company}</td>
                            <td>{row.date}</td>
                            <td>{row.price}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Contracts;