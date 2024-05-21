import React, { useState } from 'react';
import './dashboard.scss';
import DashboardCard from './DashboardCard';


export default function Dashboard() {

   return (
      <>
         <section className="ptb-30 bg-grey">
            <div className="container">
               <div className="row">
                  <h2 className="heading-blue mb-5">Welcome to Samagra Shiksha Dashboard </h2>
                  <div className="col-md-12">
                     <div className="card-row row-active">
                      <DashboardCard heading={"Early Childhood Care And Education (ECCE)"} />
                      <DashboardCard heading={"Foundational Literacy And Numeracy (Fl&N)"}/>
                      <DashboardCard heading={"Access And Retention"}/>
                      <DashboardCard heading={"Ret Entitlements"}/>
                      <DashboardCard heading={"Quality Interventions"}/>
                      <DashboardCard heading={"Appointment Of Language Teachers"}/>
                      <DashboardCard heading={"Salary Of Teachers"}/>
                      <DashboardCard heading={"Gender and Equity"}/>
                      <DashboardCard heading={"Inclusive Education"}/>
                      <DashboardCard heading={"Vocational Education"}/>
                      <DashboardCard heading={"ICT and Digital Initiatives"}/>
                      <DashboardCard heading={"Monitoring Information System (MIS)"}/>
                     
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
