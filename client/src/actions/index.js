import axios from 'axios';


export const fetchRecords= ()=>{
    return function(dispatch){
        return axios.get('http://localhost:3001/accounts')
    .then(res=>{dispatch(updateRecords(res.data))})
    .catch (err => dispatch(updateError(err)));
}
}

export const addRecord= (data)=>{
    return function(dispatch){
        return axios.post('http://localhost:3001/accounts/add',data)
    .then(res=>{dispatch(fetchRecords())})
    .catch (err => dispatch(updateError(err)));
}
}

export const updateRecords=(data)=>{
    return{
        type:"UPDATE_RECORDS",
        payload:data
    }
}
export const updateError=(data)=>{
    return{
        type:"UPDATE_ERROR",
        payload:data
    }
}