import React from 'react'
import teacher from '../../assets/images/teachers-shikha.png'
import Arrowdown from '../../assets/images/arrow-lower.svg'
import { Link } from 'react-router-dom'
export default function Home() {
    return (

        <section className="main-card-home ptb-0 bg-grey bg-img">
            <div className="container">
                <div className="row">

                    <div className="col-md-6">
                        <div className="right-content-box">
                            <section className="pgicategory vision-mission-card ptb-30 pb-1">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-md-12 col-lg-12 p-0">
                                            <div className="common-content text-start right-card-sec">

                                                <div className="card-box-impact mt-4">
                                                    <div className="row">
                                                        <div className="col-md-12 mb-4">
                                                            <h2 className="heading-sm">Welcome to Samagra <br /> Shiksha Dashboard</h2>
                                                        </div>

                                                        <div className="col-md-12 mt-5">
                                                            <img src={teacher} alt="" className='login-img pt-5' />
                                                        </div>

                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="map-sec-h">
                            <section className="map-main-card h-100">
                                <div className="container h-100">
                                    <div className="row h-100">
                                        <div className="col-md-12">
                                            <div className="login-card">                                                
                                                <div className='card-div'>
                                                    <h2 className="login-text-m">
                                                        Login In
                                                    </h2>
                                                    <p className="login-subtext">
                                                        We have sent an OTP to your registered mobile no. and Email address
                                                    </p>

                                                    <form action="">
                                                        <input type="email" className='form-control' placeholder='Enter your email address' />
                                                        <input type="password" className='form-control' placeholder='Enter Password' />

                                                        {/* <button className='btn btn-primary login-btn'>ACTIVATE</button> */}
                                                        <Link to="dashboard" className='btn btn-primary login-btn'>Active</Link>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </section>



    )
}
