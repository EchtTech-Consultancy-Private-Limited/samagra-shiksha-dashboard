import React, { useState } from 'react';
import './dashboard.scss';
import growtharrow from '../../assets/images/Growth_curve.svg'
import { Link } from 'react-router-dom';

export default function Dashboard() {

   const [isActive, setisActive] = useState('');

   const handClick = e => {     
      const currTarget = e.currentTarget;
      if(currTarget.className === "card-box-samagra active")
      {
          currTarget.classList.remove(setisActive("active"));
      } 
      else {
          currTarget.classList.add(setisActive("active"));
      }     
  }

   return (
      <>
         <section className="ptb-30 bg-grey">
            <div className="container">
               <div className="row">
                  <h2 className="heading-blue mb-5">Welcome to Samagra Shiksha Dashboard </h2>
                  <div className="col-md-12">
                     <div className="card-row row-active">
                        <div className={"card-box-samagra " + isActive} onClick={handClick}>

                           <p className='mb-0 d-flex align-items-center text-black'><span className="material-icons-round d-none active-block me-2">arrow_back</span> Early Childhood Care And Education <br className='active-none' />(ECCE)</p>

                           <div className="after-active-card row">
                              <div className="col-md-4">
                                 <Link to="/ecce">
                                    <div className="samagra-inner-card">
                                       <p className='mb-0'>Enrolment And Access</p>
                                    </div>
                                 </Link>
                              </div>
                              <div className="col-md-4">
                                 <Link to="/ecce">
                                    <div className="samagra-inner-card">
                                       <p className='mb-0'>Pupil Teacher Ratio (PTR) And Teacher Qualification</p>
                                    </div>
                                 </Link>
                              </div>
                              <div className="col-md-4">
                                 <Link to="/ecce">
                                    <div className="samagra-inner-card">
                                       <p className='mb-0'>Teaching Learning Material</p>
                                    </div>
                                 </Link>
                              </div>
                              <div className="col-md-4">
                                 <Link to="/ecce">
                                    <div className="samagra-inner-card">
                                       <p className='mb-0'>Student Performance</p>
                                    </div>
                                 </Link>
                              </div>
                              <div className="col-md-4">
                                 <Link to="/ecce">
                                    <div className="samagra-inner-card">
                                       <p className='mb-0'>Percentage Of Children</p>
                                    </div>
                                 </Link>
                              </div>
                           </div>

                        </div>
                        <div className="card-box-samagra">
                           <p className='mb-0'>Foundational Literacy And Numeracy <br className='active-none' />(Fl&N)</p>
                        </div>
                        <div className="card-box-samagra">
                           <p className='mb-0'>Access And Retention</p>
                        </div>
                        <div className="card-box-samagra">
                           <p className='mb-0'>Ret Entitlements</p>
                        </div>
                        <div className="card-box-samagra">
                           <p className='mb-0'>Quality Interventions</p>
                        </div>
                        <div className="card-box-samagra">
                           <p className='mb-0'>Salary Of Teachers</p>
                        </div>
                        <div className="card-box-samagra">
                           <p className='mb-0'>Appointment Of Language Teachers</p>
                        </div>
                        <div className="card-box-samagra">
                           <p className='mb-0'>Gender and Equity </p>
                        </div>
                        <div className="card-box-samagra">
                           <p className='mb-0'>Inclusive Education </p>
                        </div>
                        <div className="card-box-samagra">
                           <p className='mb-0'>Vocational Education </p>
                        </div>
                        <div className="card-box-samagra">
                           <p className='mb-0'>ICT and Digital Initiatives  </p>
                        </div>
                        <div className="card-box-samagra">
                           <p className='mb-0'>Monitoring Information System (MIS) </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {/* growth arrow */}
            {/* <img src={growtharrow} alt="growth-arrow" className='growth-arrow-img' /> */}
         </section>
      </>
   )
}
