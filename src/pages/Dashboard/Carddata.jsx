import React from 'react'
import { Link } from 'react-router-dom';

export default function Carddata(props) {
    return (
        <Link to="/ecce">
            <div className="samagra-inner-card">
                <p className='mb-0'>{props.title}</p>
            </div>
        </Link>
    )
}
