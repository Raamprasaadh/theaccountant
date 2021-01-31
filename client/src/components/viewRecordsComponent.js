import { useState,useEffect } from 'react';
import{fetchRecords} from '../actions';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';

export default function ViewRecordsComponent() {
    const dispatch = useDispatch();
    useEffect(()=>{dispatch(fetchRecords())},[]);

     const records = useSelector(state=>state.appDetails.Records);
    return (
        <div className="viewRcrds">
            {(records) ?
                <div className="recordTable">
                    <table>
                        <thead>
                            <tr>
                                <td>Date</td>
                                <td>Type of Record</td>
                                <td>E/I/R</td>
                                <td>Type of Attack</td>
                                <td>Partition</td>
                                <td>Tree No</td>
                                <td>Amount</td>
                                <td>Description</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                
                                 records.map(record=>{
                                    
                                    var toa =[];
                                    if (record["typeOfAttack"])
                                    {toa = Object.keys(record["typeOfAttack"]).find(key => record.typeOfAttack[key] === true);}
                                    
                                     return(
                                     <tr key={record._id}>
                                         <td>{record.date.substr(0,10)}</td>
                                         <td>{record.type}</td>
                                         <td>{record.eir}</td>
                                         <td>{toa}</td>
                                         <td>{record.partition}</td>
                                         <td>{record.tree}</td>
                                         <td>{record.amount}</td>
                                         <td>{record.desc}</td>
                                     </tr>
                                     )
                                 })
                            }
                        </tbody>
                    </table>
                </div> :
                <h2>No records found</h2>}
        </div>
    )
}
