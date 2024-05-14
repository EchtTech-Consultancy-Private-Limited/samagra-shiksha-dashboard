import React from 'react';
import './ecce.scss';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Tableicon from '../../assets/images/table_cells.png'
import Download from '../../assets/images/download.png'
import graph from '../../assets/images/circular-graphic.png'
import { Link } from 'react-router-dom';

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


            <div className="tab-section tab-for-graph ptb-30">
                <div className="container">
                    <div className="row">
                        <div className="col-ms-12">
                            <Tabs defaultActiveKey="Enrolment And Access" id="uncontrolled-tab-example" className="">

                                <Tab eventKey="Enrolment And Access" title="Enrolment And Access">
                                    <div className="Allreport-table-card mb-4">
                                        <div className="col-md-12">
                                            <TableContainer className="mt-4">
                                                <Table className='table-bordered'>
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell colSpan={5}> <h2 className="heading-sm heading-sm2">Enrolment And Access</h2> </TableCell>
                                                        </TableRow>
                                                        <TableRow className="">
                                                            <TableCell className="bg-grey2">S.no</TableCell>
                                                            <TableCell className="bg-grey2">Id</TableCell>
                                                            <TableCell className="bg-grey2 report-name-width-50">Report Name</TableCell>
                                                            <TableCell className="bg-grey2">Tags</TableCell>
                                                            <TableCell className="bg-grey2">Action</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        <TableRow>
                                                            <TableCell>1</TableCell>
                                                            <TableCell>3016</TableCell>
                                                            <TableCell>Number of Schools having Electricity Connection by School Category and Management</TableCell>
                                                            <TableCell>School</TableCell>
                                                            <TableCell>
                                                                <Link className="action-icon" to="/ecce_details"><img src={Tableicon} alt="" /></Link>
                                                                <Link className="action-icon" to="/ecce_details"><img src={graph} alt="" /></Link>
                                                                <Link className="action-icon" to="/ecce_details"><img src={Download} alt="" /></Link>
                                                            </TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell>2</TableCell>
                                                            <TableCell>1005</TableCell>
                                                            <TableCell>Number of Schools by Type of School and School Category</TableCell>
                                                            <TableCell>School</TableCell>
                                                            <TableCell>
                                                                <Link className="action-icon" to="/ecce_details"><img src={Tableicon} alt="" /></Link>
                                                                <Link className="action-icon" to="/ecce_details"><img src={graph} alt="" /></Link>
                                                                <Link className="action-icon" to="/ecce_details"><img src={Download} alt="" /></Link>
                                                            </TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell>3</TableCell>
                                                            <TableCell>1003</TableCell>
                                                            <TableCell>Number of Schools by School Management and School Category</TableCell>
                                                            <TableCell>School</TableCell>
                                                            <TableCell>
                                                                <Link className="action-icon" to="/ecce_details"><img src={Tableicon} alt="" /></Link>
                                                                <Link className="action-icon" to="/ecce_details"><img src={graph} alt="" /></Link>
                                                                <Link className="action-icon" to="/ecce_details"><img src={Download} alt="" /></Link>
                                                            </TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell>4</TableCell>
                                                            <TableCell>2008</TableCell>
                                                            <TableCell>Number of Teachers by Social Category , Gender and School Management</TableCell>
                                                            <TableCell>Teacher</TableCell>
                                                            <TableCell>
                                                                <Link className="action-icon" to="/ecce_details"><img src={Tableicon} alt="" /></Link>
                                                                <Link className="action-icon" to="/ecce_details"><img src={graph} alt="" /></Link>
                                                                <Link className="action-icon" to="/ecce_details"><img src={Download} alt="" /></Link>
                                                            </TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell>5</TableCell>
                                                            <TableCell>2007</TableCell>
                                                            <TableCell>Pupil Teacher Ratio (PTR)</TableCell>
                                                            <TableCell>Teacher</TableCell>
                                                            <TableCell>
                                                                <Link className="action-icon" to="/ecce_details"><img src={Tableicon} alt="" /></Link>
                                                                <Link className="action-icon" to="/ecce_details"><img src={graph} alt="" /></Link>
                                                                <Link className="action-icon" to="/ecce_details"><img src={Download} alt="" /></Link>
                                                            </TableCell>
                                                        </TableRow>

                                                    </TableBody>
                                                </Table>
                                            </TableContainer>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab eventKey="PTR and teacher qualification" title="PTR and teacher qualification">
                                    <div className="Allreport-table-card mb-4">
                                        <div className="col-md-12">
                                            <TableContainer className="mt-4">
                                                <Table className='table-bordered'>
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell colSpan={5}> <h2 className="heading-sm heading-sm2">PTR and teacher qualification</h2> </TableCell>
                                                        </TableRow>
                                                        <TableRow className="">
                                                            <TableCell className="bg-grey2">S.no</TableCell>
                                                            <TableCell className="bg-grey2">Id</TableCell>
                                                            <TableCell className="bg-grey2 report-name-width-50">Report Name</TableCell>
                                                            <TableCell className="bg-grey2">Tags</TableCell>
                                                            <TableCell className="bg-grey2">Action</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        <TableRow>
                                                            <TableCell>1</TableCell>
                                                            <TableCell>3016</TableCell>
                                                            <TableCell>Number of Schools having Electricity Connection by School Category and Management</TableCell>
                                                            <TableCell>School</TableCell>
                                                            <TableCell>
                                                                <Link className="action-icon" to="/#"><img src={Tableicon} alt="" /></Link>
                                                                <Link className="action-icon" to="/#"><img src={graph} alt="" /></Link>
                                                                <Link className="action-icon" to="/all-reports?id=3016&report_name=Number of Schools having Electricity Connection by School Category and Management&type=about"><img src={Download} alt="" /></Link>
                                                            </TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell>2</TableCell>
                                                            <TableCell>1005</TableCell>
                                                            <TableCell>Number of Schools by Type of School and School Category</TableCell>
                                                            <TableCell>School</TableCell>
                                                            <TableCell>
                                                                <Link className="action-icon" to="/school-reports?id=1005&report_name=Number of Schools by Type of School and School Category&type=table"><img src={Tableicon} alt="" /></Link>
                                                                <Link className="action-icon" to="/school-reports?id=1005&report_name=Number of Schools by Type of School and School Category&type=graph"><img src={graph} alt="" /></Link>
                                                                <Link className="action-icon" to="/school-reports?id=1005&report_name=Number of Schools by Type of School and School Category&type=about"><img src={Download} alt="" /></Link>
                                                            </TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell>3</TableCell>
                                                            <TableCell>1003</TableCell>
                                                            <TableCell>Number of Schools by School Management and School Category</TableCell>
                                                            <TableCell>School</TableCell>
                                                            <TableCell>
                                                                <Link className="action-icon" to="/school-reports?id=1003&report_name=Number of Schools by School Management and School Category&type=table"><img src={Tableicon} alt="" /></Link>
                                                                <Link className="action-icon" to="/school-reports?id=1003&report_name=Number of Schools by School Management and School Category&type=graph"><img src={graph} alt="" /></Link>
                                                                <Link className="action-icon" to="/school-reports?id=1003&report_name=Number of Schools by School Management and School Category&type=about"><img src={Download} alt="" /></Link>
                                                            </TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell>4</TableCell>
                                                            <TableCell>2008</TableCell>
                                                            <TableCell>Number of Teachers by Social Category , Gender and School Management</TableCell>
                                                            <TableCell>Teacher</TableCell>
                                                            <TableCell>
                                                                <Link className="action-icon" to="/teacher-reports?id=2008&report_name=Number of Teachers by Social Category , Gender and School Management&type=table"><img src={Tableicon} alt="" /></Link>
                                                                <Link className="action-icon" to="/teacher-reports?id=2008&report_name=Number of Teachers by Social Category , Gender and School Management&type=graph"><img src={graph} alt="" /></Link>
                                                                <Link className="action-icon" to="/teacher-reports?id=2008&report_name=Number of Teachers by Social Category , Gender and School Management&type=about"><img src={Download} alt="" /></Link>
                                                            </TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell>5</TableCell>
                                                            <TableCell>2007</TableCell>
                                                            <TableCell>Pupil Teacher Ratio (PTR)</TableCell>
                                                            <TableCell>Teacher</TableCell>
                                                            <TableCell>
                                                                <Link className="action-icon" to="/teacher-reports?id=2007&report_name=Pupil Teacher Ratio (PTR)&type=table"><img src={Tableicon} alt="" /></Link>
                                                                <Link className="action-icon" to="/teacher-reports?id=2007&report_name=Pupil Teacher Ratio (PTR)&type=graph"><img src={graph} alt="" /></Link>
                                                                <Link className="action-icon" to="/teacher-reports?id=2007&report_name=Pupil Teacher Ratio (PTR)&type=about"><img src={Download} alt="" /></Link>
                                                            </TableCell>
                                                        </TableRow>

                                                    </TableBody>
                                                </Table>
                                            </TableContainer>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab eventKey="Teaching Learning Material" title="Teaching Learning Material">
                                     <div className="Allreport-table-card mb-4">
                                        <div className="col-md-12">
                                            <TableContainer className="mt-4">
                                                <Table className='table-bordered'>
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell colSpan={5}> <h2 className="heading-sm heading-sm2">Teaching Learning Material</h2> </TableCell>
                                                        </TableRow>
                                                        <TableRow className="">
                                                            <TableCell className="bg-grey2">S.no</TableCell>
                                                            <TableCell className="bg-grey2">Id</TableCell>
                                                            <TableCell className="bg-grey2 report-name-width-50">Report Name</TableCell>
                                                            <TableCell className="bg-grey2">Tags</TableCell>
                                                            <TableCell className="bg-grey2">Action</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        <TableRow>
                                                            <TableCell>1</TableCell>
                                                            <TableCell>3016</TableCell>
                                                            <TableCell>Number of Schools having Electricity Connection by School Category and Management</TableCell>
                                                            <TableCell>School</TableCell>
                                                            <TableCell>
                                                                <Link className="action-icon" to="/#"><img src={Tableicon} alt="" /></Link>
                                                                <Link className="action-icon" to="/#"><img src={graph} alt="" /></Link>
                                                                <Link className="action-icon" to="/all-reports?id=3016&report_name=Number of Schools having Electricity Connection by School Category and Management&type=about"><img src={Download} alt="" /></Link>
                                                            </TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell>2</TableCell>
                                                            <TableCell>1005</TableCell>
                                                            <TableCell>Number of Schools by Type of School and School Category</TableCell>
                                                            <TableCell>School</TableCell>
                                                            <TableCell>
                                                                <Link className="action-icon" to="/school-reports?id=1005&report_name=Number of Schools by Type of School and School Category&type=table"><img src={Tableicon} alt="" /></Link>
                                                                <Link className="action-icon" to="/school-reports?id=1005&report_name=Number of Schools by Type of School and School Category&type=graph"><img src={graph} alt="" /></Link>
                                                                <Link className="action-icon" to="/school-reports?id=1005&report_name=Number of Schools by Type of School and School Category&type=about"><img src={Download} alt="" /></Link>
                                                            </TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell>3</TableCell>
                                                            <TableCell>1003</TableCell>
                                                            <TableCell>Number of Schools by School Management and School Category</TableCell>
                                                            <TableCell>School</TableCell>
                                                            <TableCell>
                                                                <Link className="action-icon" to="/school-reports?id=1003&report_name=Number of Schools by School Management and School Category&type=table"><img src={Tableicon} alt="" /></Link>
                                                                <Link className="action-icon" to="/school-reports?id=1003&report_name=Number of Schools by School Management and School Category&type=graph"><img src={graph} alt="" /></Link>
                                                                <Link className="action-icon" to="/school-reports?id=1003&report_name=Number of Schools by School Management and School Category&type=about"><img src={Download} alt="" /></Link>
                                                            </TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell>4</TableCell>
                                                            <TableCell>2008</TableCell>
                                                            <TableCell>Number of Teachers by Social Category , Gender and School Management</TableCell>
                                                            <TableCell>Teacher</TableCell>
                                                            <TableCell>
                                                                <Link className="action-icon" to="/teacher-reports?id=2008&report_name=Number of Teachers by Social Category , Gender and School Management&type=table"><img src={Tableicon} alt="" /></Link>
                                                                <Link className="action-icon" to="/teacher-reports?id=2008&report_name=Number of Teachers by Social Category , Gender and School Management&type=graph"><img src={graph} alt="" /></Link>
                                                                <Link className="action-icon" to="/teacher-reports?id=2008&report_name=Number of Teachers by Social Category , Gender and School Management&type=about"><img src={Download} alt="" /></Link>
                                                            </TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell>5</TableCell>
                                                            <TableCell>2007</TableCell>
                                                            <TableCell>Pupil Teacher Ratio (PTR)</TableCell>
                                                            <TableCell>Teacher</TableCell>
                                                            <TableCell>
                                                                <Link className="action-icon" to="/teacher-reports?id=2007&report_name=Pupil Teacher Ratio (PTR)&type=table"><img src={Tableicon} alt="" /></Link>
                                                                <Link className="action-icon" to="/teacher-reports?id=2007&report_name=Pupil Teacher Ratio (PTR)&type=graph"><img src={graph} alt="" /></Link>
                                                                <Link className="action-icon" to="/teacher-reports?id=2007&report_name=Pupil Teacher Ratio (PTR)&type=about"><img src={Download} alt="" /></Link>
                                                            </TableCell>
                                                        </TableRow>

                                                    </TableBody>
                                                </Table>
                                            </TableContainer>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab eventKey="Student Performance" title="Student Performance">
                                    <div className="Allreport-table-card mb-4">
                                        <div className="col-md-12">
                                            <TableContainer className="mt-4">
                                                <Table className='table-bordered'>
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell colSpan={5}> <h2 className="heading-sm heading-sm2">Student Performance</h2> </TableCell>
                                                        </TableRow>
                                                        <TableRow className="">
                                                            <TableCell className="bg-grey2">S.no</TableCell>
                                                            <TableCell className="bg-grey2">Id</TableCell>
                                                            <TableCell className="bg-grey2 report-name-width-50">Report Name</TableCell>
                                                            <TableCell className="bg-grey2">Tags</TableCell>
                                                            <TableCell className="bg-grey2">Action</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        <TableRow>
                                                            <TableCell>1</TableCell>
                                                            <TableCell>3016</TableCell>
                                                            <TableCell>Number of Schools having Electricity Connection by School Category and Management</TableCell>
                                                            <TableCell>School</TableCell>
                                                            <TableCell>
                                                                <Link className="action-icon" to="/#"><img src={Tableicon} alt="" /></Link>
                                                                <Link className="action-icon" to="/#"><img src={graph} alt="" /></Link>
                                                                <Link className="action-icon" to="/all-reports?id=3016&report_name=Number of Schools having Electricity Connection by School Category and Management&type=about"><img src={Download} alt="" /></Link>
                                                            </TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell>2</TableCell>
                                                            <TableCell>1005</TableCell>
                                                            <TableCell>Number of Schools by Type of School and School Category</TableCell>
                                                            <TableCell>School</TableCell>
                                                            <TableCell>
                                                                <Link className="action-icon" to="/school-reports?id=1005&report_name=Number of Schools by Type of School and School Category&type=table"><img src={Tableicon} alt="" /></Link>
                                                                <Link className="action-icon" to="/school-reports?id=1005&report_name=Number of Schools by Type of School and School Category&type=graph"><img src={graph} alt="" /></Link>
                                                                <Link className="action-icon" to="/school-reports?id=1005&report_name=Number of Schools by Type of School and School Category&type=about"><img src={Download} alt="" /></Link>
                                                            </TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell>3</TableCell>
                                                            <TableCell>1003</TableCell>
                                                            <TableCell>Number of Schools by School Management and School Category</TableCell>
                                                            <TableCell>School</TableCell>
                                                            <TableCell>
                                                                <Link className="action-icon" to="/school-reports?id=1003&report_name=Number of Schools by School Management and School Category&type=table"><img src={Tableicon} alt="" /></Link>
                                                                <Link className="action-icon" to="/school-reports?id=1003&report_name=Number of Schools by School Management and School Category&type=graph"><img src={graph} alt="" /></Link>
                                                                <Link className="action-icon" to="/school-reports?id=1003&report_name=Number of Schools by School Management and School Category&type=about"><img src={Download} alt="" /></Link>
                                                            </TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell>4</TableCell>
                                                            <TableCell>2008</TableCell>
                                                            <TableCell>Number of Teachers by Social Category , Gender and School Management</TableCell>
                                                            <TableCell>Teacher</TableCell>
                                                            <TableCell>
                                                                <Link className="action-icon" to="/teacher-reports?id=2008&report_name=Number of Teachers by Social Category , Gender and School Management&type=table"><img src={Tableicon} alt="" /></Link>
                                                                <Link className="action-icon" to="/teacher-reports?id=2008&report_name=Number of Teachers by Social Category , Gender and School Management&type=graph"><img src={graph} alt="" /></Link>
                                                                <Link className="action-icon" to="/teacher-reports?id=2008&report_name=Number of Teachers by Social Category , Gender and School Management&type=about"><img src={Download} alt="" /></Link>
                                                            </TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell>5</TableCell>
                                                            <TableCell>2007</TableCell>
                                                            <TableCell>Pupil Teacher Ratio (PTR)</TableCell>
                                                            <TableCell>Teacher</TableCell>
                                                            <TableCell>
                                                                <Link className="action-icon" to="/teacher-reports?id=2007&report_name=Pupil Teacher Ratio (PTR)&type=table"><img src={Tableicon} alt="" /></Link>
                                                                <Link className="action-icon" to="/teacher-reports?id=2007&report_name=Pupil Teacher Ratio (PTR)&type=graph"><img src={graph} alt="" /></Link>
                                                                <Link className="action-icon" to="/teacher-reports?id=2007&report_name=Pupil Teacher Ratio (PTR)&type=about"><img src={Download} alt="" /></Link>
                                                            </TableCell>
                                                        </TableRow>

                                                    </TableBody>
                                                </Table>
                                            </TableContainer>
                                        </div>
                                    </div>
                                </Tab>
                                <Tab eventKey="Percentage of children" title="Percentage of children">
                                <div className="Allreport-table-card mb-4">
                                        <div className="col-md-12">
                                            <TableContainer className="mt-4">
                                                <Table className='table-bordered'>
                                                    <TableHead>
                                                        <TableRow>
                                                            <TableCell colSpan={5}> <h2 className="heading-sm heading-sm2">Percentage of children</h2> </TableCell>
                                                        </TableRow>
                                                        <TableRow className="">
                                                            <TableCell className="bg-grey2">S.no</TableCell>
                                                            <TableCell className="bg-grey2">Id</TableCell>
                                                            <TableCell className="bg-grey2 report-name-width-50">Report Name</TableCell>
                                                            <TableCell className="bg-grey2">Tags</TableCell>
                                                            <TableCell className="bg-grey2">Action</TableCell>
                                                        </TableRow>
                                                    </TableHead>
                                                    <TableBody>
                                                        <TableRow>
                                                            <TableCell>1</TableCell>
                                                            <TableCell>3016</TableCell>
                                                            <TableCell>Number of Schools having Electricity Connection by School Category and Management</TableCell>
                                                            <TableCell>School</TableCell>
                                                            <TableCell>
                                                                <Link className="action-icon" to="/#"><img src={Tableicon} alt="" /></Link>
                                                                <Link className="action-icon" to="/#"><img src={graph} alt="" /></Link>
                                                                <Link className="action-icon" to="/all-reports?id=3016&report_name=Number of Schools having Electricity Connection by School Category and Management&type=about"><img src={Download} alt="" /></Link>
                                                            </TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell>2</TableCell>
                                                            <TableCell>1005</TableCell>
                                                            <TableCell>Number of Schools by Type of School and School Category</TableCell>
                                                            <TableCell>School</TableCell>
                                                            <TableCell>
                                                                <Link className="action-icon" to="/school-reports?id=1005&report_name=Number of Schools by Type of School and School Category&type=table"><img src={Tableicon} alt="" /></Link>
                                                                <Link className="action-icon" to="/school-reports?id=1005&report_name=Number of Schools by Type of School and School Category&type=graph"><img src={graph} alt="" /></Link>
                                                                <Link className="action-icon" to="/school-reports?id=1005&report_name=Number of Schools by Type of School and School Category&type=about"><img src={Download} alt="" /></Link>
                                                            </TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell>3</TableCell>
                                                            <TableCell>1003</TableCell>
                                                            <TableCell>Number of Schools by School Management and School Category</TableCell>
                                                            <TableCell>School</TableCell>
                                                            <TableCell>
                                                                <Link className="action-icon" to="/school-reports?id=1003&report_name=Number of Schools by School Management and School Category&type=table"><img src={Tableicon} alt="" /></Link>
                                                                <Link className="action-icon" to="/school-reports?id=1003&report_name=Number of Schools by School Management and School Category&type=graph"><img src={graph} alt="" /></Link>
                                                                <Link className="action-icon" to="/school-reports?id=1003&report_name=Number of Schools by School Management and School Category&type=about"><img src={Download} alt="" /></Link>
                                                            </TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell>4</TableCell>
                                                            <TableCell>2008</TableCell>
                                                            <TableCell>Number of Teachers by Social Category , Gender and School Management</TableCell>
                                                            <TableCell>Teacher</TableCell>
                                                            <TableCell>
                                                                <Link className="action-icon" to="/teacher-reports?id=2008&report_name=Number of Teachers by Social Category , Gender and School Management&type=table"><img src={Tableicon} alt="" /></Link>
                                                                <Link className="action-icon" to="/teacher-reports?id=2008&report_name=Number of Teachers by Social Category , Gender and School Management&type=graph"><img src={graph} alt="" /></Link>
                                                                <Link className="action-icon" to="/teacher-reports?id=2008&report_name=Number of Teachers by Social Category , Gender and School Management&type=about"><img src={Download} alt="" /></Link>
                                                            </TableCell>
                                                        </TableRow>
                                                        <TableRow>
                                                            <TableCell>5</TableCell>
                                                            <TableCell>2007</TableCell>
                                                            <TableCell>Pupil Teacher Ratio (PTR)</TableCell>
                                                            <TableCell>Teacher</TableCell>
                                                            <TableCell>
                                                                <Link className="action-icon" to="/teacher-reports?id=2007&report_name=Pupil Teacher Ratio (PTR)&type=table"><img src={Tableicon} alt="" /></Link>
                                                                <Link className="action-icon" to="/teacher-reports?id=2007&report_name=Pupil Teacher Ratio (PTR)&type=graph"><img src={graph} alt="" /></Link>
                                                                <Link className="action-icon" to="/teacher-reports?id=2007&report_name=Pupil Teacher Ratio (PTR)&type=about"><img src={Download} alt="" /></Link>
                                                            </TableCell>
                                                        </TableRow>

                                                    </TableBody>
                                                </Table>
                                            </TableContainer>
                                        </div>
                                    </div>
                                </Tab>                              
                            </Tabs>

                        </div>
                    </div>
                </div>
            </div>



        </section>
    )
}
