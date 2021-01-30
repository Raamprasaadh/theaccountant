import { bindActionCreators } from "redux"

import axios from 'axios';

export const fetchRecords=()=>{
    return (dispatch)=>axios.get('http://localhost:3001/accounts')
    .then(dipatch(updateRecords(res.data)))
    .catch (err => dispatch(updateError(err)));
}

export const updateRecords=(data)=>{
    return{
        type:"UPDATE_RECORDS",
        payload:data
    }
}