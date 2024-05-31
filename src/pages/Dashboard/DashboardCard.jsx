import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Carddata from './Carddata';

export default function DashboardCard(props) {

    const [isActive, setisActive] = useState('');

    const handClick = (e, text) => {
        const target = e.currentTarget;
        if (!target.classList.contains('card-box-samagra')) {
            return;
        }
        sessionStorage.setItem('handle', text);
        const elements = document.querySelectorAll('.card-box-samagra.active');
        elements.forEach(element => {
            element.classList.remove('active');
        });
        target.classList.add("active");
    };

    return (
        <div className={"card-box-samagra " + isActive} onClick={handClick}>
            <p className='mb-0 d-flex align-items-center text-black'><span className="material-icons-round d-none active-block me-2">arrow_back</span> {props.heading}</p>
            <div className="after-active-card row">
                <div className="col-md-4">
                    <Carddata title={"Enrolment And Access"} />
                </div>
                <div className="col-md-4">
                    <Carddata title={"Pupil Teacher Ratio (PTR) And Teacher Qualification"} />
                </div>
                <div className="col-md-4">
                    <Carddata title={"Teaching Learning Material"} />
                </div>
                <div className="col-md-4">
                    <Carddata title={"Student Performance"} />
                </div>
                <div className="col-md-4">
                    <Carddata title={"Percentage Of Children"} />
                </div>
            </div>

        </div>
    )
}
