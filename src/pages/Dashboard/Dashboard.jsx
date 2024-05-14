import React from 'react';
import './dashboard.scss';
import { Link } from 'react-router-dom';

export default function Dashboard() {
   return (
      <>
         <section className="ptb-30 bg-grey">
            <div className="container">
               <div className="row">
                  <h2 class="heading-blue mb-5">Welcome to Samagra Shiksha Dashboard </h2>
                  <div className="col-md-12">
                     <div className="card-row row-active">
                        <div className="card-box-samagra active">
                           <Link to="/ecce">
                           <p className='mb-0 d-flex align-items-center text-white'><span className="material-icons-round d-none active-block me-2">arrow_back</span> Early Childhood Care And Education <br className='active-none' />(ECCE)</p>
                           </Link>
                           <div className="after-active-card row">
                              <div className="col-md-4">
                                 <div className="samagra-inner-card">
                                    <p className='mb-0'>Enrolment And Access</p>
                                 </div>
                              </div>
                              <div className="col-md-4">
                                 <div className="samagra-inner-card">
                                    <p className='mb-0'>Pupil Teacher Ratio (PTR) And Teacher Qualification</p>
                                 </div>
                              </div>
                              <div className="col-md-4">
                                 <div className="samagra-inner-card">
                                    <p className='mb-0'>Teaching Learning Material</p>
                                 </div>
                              </div>
                              <div className="col-md-4">
                                 <div className="samagra-inner-card">
                                    <p className='mb-0'>Student Performance</p>
                                 </div>
                              </div>
                              <div className="col-md-4">
                                 <div className="samagra-inner-card">
                                    <p className='mb-0'>Percentage Of Children</p>
                                 </div>
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
         </section>
      </>
   )
}
