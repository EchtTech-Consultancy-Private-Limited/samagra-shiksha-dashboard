import React from 'react';
import './ecce.scss';
import Ecce_table from './Ecce_table';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

export default function Ecce() {
    return (
        <section className="bg-gray">
            <div className="main-heading-sec ptb-30 bg-secondry-gray ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className='blue-heading-main mb-0'>Early Childhood Care And <br /> Education (ECCE)</h4>
                        </div>
                    </div>
                </div>
            </div>


            <div className="tab-section tab-for-graph ptb-30 p-relative">
                            <div className="backgroung-white-bg-layer"></div>
                <div className="container">
                    <div className="row">
                        <div className="col-ms-12">
                            <Tabs defaultActiveKey="Enrolment And Access" id="uncontrolled-tab-example" className="">

                                <Tab eventKey="Enrolment And Access" title="Enrolment And Access">
                                  <Ecce_table title={"Enrolment And Access"} />
                                </Tab>
                                <Tab eventKey="PTR and teacher qualification" title="PTR and teacher qualification">
                                <Ecce_table title={"PTR and teacher qualification"} />
                                </Tab>
                                <Tab eventKey="Teaching Learning Material" title="Teaching Learning Material">
                                <Ecce_table title={"Teaching Learning Material"}/>
                                </Tab>
                                <Tab eventKey="Student Performance" title="Student Performance">
                                <Ecce_table title={"Student Performance"}/>
                                </Tab>
                                <Tab eventKey="Percentage of children" title="Percentage of children">
                                <Ecce_table title={"Percentage of children"}/>
                                </Tab>                              
                            </Tabs>

                        </div>
                    </div>
                </div>
            </div>



        </section>
    )
}
