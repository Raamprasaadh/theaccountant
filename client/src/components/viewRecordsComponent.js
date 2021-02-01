import { useEffect } from 'react';
import { fetchRecords } from '../actions';
import { useSelector, useDispatch } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { XGrid } from "@material-ui/x-grid";

export default function ViewRecordsComponent() {
    const dispatch = useDispatch();
    useEffect(() => { dispatch(fetchRecords()) }, []);
    var records = useSelector(state => state.appDetails.Records);
    var strRecords = JSON.stringify(records);
    strRecords = strRecords.replace(/\"_id\":/g, "\"id\":");

    records = JSON.parse(strRecords);
    const data = { columns: [{ "field": "id", "headerName": "Id", hide: true }, { "field": "date", "headerName": "Date" }, { "field": "type", "headerName": "Type Of Record" }, { "field": "eir", "headerName": "E/I/R" }, { "field": "typeOfAttack", "headerName": "Type Of Attack" }, { "field": "partition", "headerName": "Partition" }, { "field": "tree", "headerName": "Tree No" }, { "field": "amount", "headerName": "Amount" }, { "field": "desc", "headerName": "Description" }], rows: records }

    const FilterModel = {
        items: [{ columnField: "eir", operatorValue: 'contains', value: 'Expense' }],
    };
    return (
        <div className="viewRcrds">
            {/* <XGrid {...data} showToolbar />*/}
            {
                (records) ?
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Date</TableCell>
                                    <TableCell>Type of Record</TableCell>
                                    <TableCell>E/I/R</TableCell>
                                    <TableCell>Type of Attack</TableCell>
                                    <TableCell>Partition</TableCell>
                                    <TableCell>Tree No</TableCell>
                                    <TableCell>Amount</TableCell>
                                    <TableCell>Description</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                records.map((record) => {
                                    console.log(record.date);
                                    var toa =[];
                                    if (record["typeOfAttack"])
                                    {toa = Object.keys(record["typeOfAttack"]).find(key => record.typeOfAttack[key] === true);}
                                    return( 
                                    <div>
                                    <TableRow key={record._id}>
                                    <TableCell>{record.date.substr(0, 10)}</TableCell>
                                    <TableCell>{record.type}</TableCell>
                                    <TableCell>{record.eir}</TableCell>
                                    <TableCell>{toa}</TableCell>
                                    <TableCell>{record.partition}</TableCell>
                                    <TableCell>{record.tree}</TableCell>
                                    <TableCell>{record.amount}</TableCell>
                                    <TableCell>{record.desc}</TableCell>
                                </TableRow>
                                </div>)
})}
                            </TableBody>
                        </Table>
                    </TableContainer>

                    :
                    <h2>No records found</h2>}
        </div>
    )
}
