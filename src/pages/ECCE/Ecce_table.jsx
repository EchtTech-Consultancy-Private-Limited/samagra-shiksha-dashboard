import React from 'react';
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

export default function Ecce_table(props) {
    return (
        <div className="Allreport-table-card mb-4">
            <div className="col-md-12">
                <TableContainer className="mt-4">
                    <Table className='table-bordered'>
                        <TableHead>
                            <TableRow>
                                <TableCell colSpan={5}> <h2 className="heading-sm heading-sm2">{props.title}</h2> </TableCell>
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
                                <TableCell className='text-nowrap'>
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
                                <TableCell className='text-nowrap'>
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
                                <TableCell className='text-nowrap'>
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
                                <TableCell className='text-nowrap'>
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
                                <TableCell className='text-nowrap'>
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
    )
}
