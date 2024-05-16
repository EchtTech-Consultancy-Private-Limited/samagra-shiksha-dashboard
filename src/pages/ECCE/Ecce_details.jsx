import React from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


import { useState } from "react";
import { useDispatch, useSelector, useEffect } from "react-redux";
import SearchFilter from '../../components/Partial/SearchFilter';
var breaks = [];    
export default function Ecce_details() {
    
    require('highcharts/modules/accessibility')(Highcharts);
    require('highcharts/modules/exporting')(Highcharts);
    const schoolFilterYear = useSelector((state) => state.schoolFilter);
    const [show, setShow] = useState(false);
    const dispatch = useDispatch();
    const school_data = useSelector((state) => state.school);

    return (
        
        <>
        <SearchFilter/>

        <section className="infrastructure-main-card p-0">
            <div className="bg-grey2 ptb-30">
                <div className="container tab-for-graph">
                    <div className="row align-items-center">
                        <div className="col-md-6 col-lg-6">
                            <div className="common-content text-start map-heading-map">
                                <span>Reports ID: 2007</span>
                                <h2 className="heading-sm1 mb-3">
                                    Pupil Teacher Ratio (PTR)
                                </h2>
                            </div>
                            <div className="tab-text-infra download-rep">
                                Download Report
                                <span className="material-icons-round">download</span>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-6 view-data-tab">
                            <div className="tab-text-infra mb-2">View Data By</div>
                            <Tabs defaultActiveKey="School Management" id="uncontrolled-tab-example" className="">
                                <Tab eventKey="School Category" title="School Category"></Tab>
                                <Tab eventKey="School Management" title="School Management" ></Tab>
                                <Tab eventKey="Urban/Rural" title="Urban / Rural"></Tab>
                            </Tabs>
                        </div>


                       
                    </div>
                </div>
            </div>
            <div className="bg-grey ptb-30">
                <div className="container tab-for-graph">
                    <div className="row align-items-center report-inner-tab">
                        <div className="col-md-12 col-lg-12 table-text-i">
                            <Tabs defaultActiveKey="about" id="uncontrolled-tab-example" className="">
                                <Tab eventKey="about" title="About">
                                    <div className="about-card mt-4">
                                        <h2 className="heading-sm2 mb-2">About Us</h2>
                                        <p>
                                            This comprehensive report delves into the educational
                                            landscape, examining the distribution of schools based on
                                            the availability of infrastructure and facilities, school
                                            management structures, and categorization by facility
                                            offerings. The study meticulously analyzes the diverse
                                            spectrum of educational institutions, shedding light on
                                            the correlation between the presence of infrastructure,
                                            effective management practices, and the categorization of
                                            schools based on the facilities they provide.
                                        </p>
                                        <p>
                                            Through a meticulous data-driven approach, the report
                                            classifies schools into distinct categories, discerning
                                            the variance in facilities and resources offered across
                                            different segments of the education sector. By exploring
                                            the nexus between school management structures and the
                                            quality of infrastructure, the report aims to provide
                                            valuable insights into the critical factors that
                                            contribute to a conducive learning environment.
                                        </p>
                                        <p>
                                            Stakeholders in education, policymakers, and researchers
                                            will find this report instrumental in understanding the
                                            nuanced interplay between infrastructure availability,
                                            school management strategies, and the diverse array of
                                            facilities that contribute to a well-rounded educational
                                            experience. The findings within offer a roadmap for
                                            informed decision-making, allowing for targeted
                                            interventions and improvements in the educational
                                            landscape to ensure equitable access to quality education
                                            for all.
                                        </p>
                                    </div>
                                </Tab>
                                <Tab eventKey="table" title="Table">
                                    <TableContainer className="mt-4">
                                        <Table>
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell>School Category</TableCell>
                                                    <TableCell>PS (I-V)</TableCell>
                                                    <TableCell>UPS (I-VIII)</TableCell>
                                                    <TableCell>HSS (I-XII)</TableCell>
                                                    <TableCell>UPS (VI-VIII)</TableCell>
                                                    <TableCell>HSS (VI-XII)</TableCell>
                                                    <TableCell>SS (I-X)</TableCell>
                                                    <TableCell>SS (VI-X)</TableCell>
                                                    <TableCell>SS (IX-X)</TableCell>
                                                    <TableCell>HSS (IX-XII)</TableCell>
                                                    <TableCell>HSS (XI-XII)</TableCell>
                                                    <TableCell>
                                                        {" "}
                                                        <div className="btn-add-more">
                                                            <span className="material-icons-round">add</span>{" "}
                                                        </div>{" "}
                                                    </TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {school_data?.data?.map((item, idx) => {
                                                    return (
                                                        <>
                                                            <TableRow key={idx}>
                                                                <TableCell>{item.schCategoryCode}</TableCell>
                                                                <TableCell>{item.totalSchool}</TableCell>
                                                                <TableCell>
                                                                    {item.schHavingFuncElectricity}
                                                                </TableCell>
                                                                <TableCell>0</TableCell>
                                                                <TableCell>0</TableCell>
                                                                <TableCell>0</TableCell>
                                                                <TableCell>
                                                                    {item.schHavingFuncToiletBoys}
                                                                </TableCell>
                                                                <TableCell>
                                                                    {item.schHavingFuncToiletGirls}
                                                                </TableCell>
                                                                <TableCell>
                                                                    {item.schHavingFuncDrinkingWater}
                                                                </TableCell>
                                                                <TableCell>0</TableCell>
                                                                <TableCell>
                                                                    {item.schHavingRampFacility}
                                                                </TableCell>
                                                                <TableCell>0</TableCell>
                                                            </TableRow>
                                                        </>
                                                    );
                                                })}
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </Tab>
                                <Tab eventKey="graph" title="Chart">

                                <div className="card-box-impact tab-for-graph mt-4">
                                    <div className="row">
                                        <div className="col-md-6 col-lg-6">
                                            <div className="impact-box-content-education">
                                                <div className="text-btn-d">
                                                    <h2 className="heading-sm">Pupil Teacher Ratio</h2>
                                                    {/* <div className='d-flex w-20'>
                                                        <button className='view-table-btn'> <span className="material-icons-round">table_view</span> View Table </button>
                                                        <button className='view-table-btn view-more-btn ms-1'> <span className="material-icons-round me-0">more_horiz</span></button>
                                                    </div> */}
                                                </div>

                                                <div className="piechart-box row mt-4">
                                                    <div className="col-md-12">
                                                        <HighchartsReact
                                                            highcharts={Highcharts}
                                                            options={{
                                                                chart: {
                                                                  type: 'column',
                                                                  ignoreHiddenSeries: true,
                                                                  events: {
                                                                    load: function() {
                                                                      Highcharts.each(this.series, function() {
                                                                        breaks.push({});
                                                                      });
                                                                    },
                                                                  }
                                                                },
                                                                plotOptions: {
                                                                  column: {
                                                                    grouping: false,
                                                                    pointPlacement: null,
                                                                    events: {
                                                                      legendItemClick: function() {
                                                                        if (!this.visible) {
                                                                            breaks[this.index] = {}
                                                                          this.chart.xAxis[0].update({
                                                                            breaks: breaks
                                                                          });
                                                                        } else {
                                                                          breaks[this.index] = {
                                                                            from: this.xData[0] - 0.5,
                                                                            to: this.xData[0] + 0.5,
                                                                            breakSize: 0
                                                                          }
                                                                          this.chart.xAxis[0].update({
                                                                            breaks: breaks
                                                                          });
                                                                        }
                                                                      }
                                                                    }
                                                                  },
                                                                },
                                                                xAxis: {
                                                                  categories: ['Primary', 'Upper Primary', 'Secondary', 'Higher Secondary'],
                                                                  startOnTick: true
                                                                },
                                                                yAxis: {
                                                                    min: 0,
                                                                    title: {
                                                                        // text: 'Population (millions)',
                                                                        // align: 'high'
                                                                        enabled: false
                                                                    },
                                                                    labels: {
                                                                        overflow: 'justify'
                                                                    },
                                                                    gridLineWidth: 0
                                                                },
                                                                legend: {
                                                                    layout: 'vertical',
                                                                    align: 'right',
                                                                    verticalAlign: 'top',
                                                                    x: -150,
                                                                    y: 0,
                                                                    floating: true,
                                                                    borderWidth: 1,
                                                                    backgroundColor:
                                                                        Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
                                                                    shadow: true
                                                                },
                                                                credits: {
                                                                    enabled: false
                                                                },
                                                                series: [{
                                                                  name: 'Primary',
                                                                  color:'#BCE263',
                                                                  data: [{
                                                                    name: 'Primary',
                                                                    y:26.16,
                                                                    x: 0,
                                                                    color:'#BCE263'
                                                                  }]
                                                                }, {
                                                                  name: 'Upper Primary',
                                                                  color:'#751539',
                                                                  data: [{
                                                                    name: 'Upper Primary',
                                                                    y: 19.44,
                                                                    x: 1,
                                                                    color:'#751539'
                                                                  }]
                                                                }, {
                                                                  name: 'Secondary',
                                                                  color:'#E6694A',
                                                                  data: [{
                                                                    name: 'Secondary',
                                                                    y: 17.6,
                                                                    x: 2,
                                                                    color:'#E6694A'
                                                                  }]
                                                                }, {
                                                                  name: 'Higher Secondary',
                                                                  color:'#57C1BB',  
                                                                  data: [{
                                                                    name: 'Higher Secondary',
                                                                    y: 27.08,
                                                                    x: 3,
                                                                    color:'#57C1BB'
                                                                  }]
                                                                }]
                                                              }}
                                                            // allowChartUpdate={true}
                                                            immutable={true}
                                                        />
                                                    </div>
                                                </div>

                                            </div>


                                        </div>

                                    </div>
                                </div>

                                </Tab>
                            </Tabs>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}