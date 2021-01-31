import axios from 'axios';


export const fetchRecords= ()=>{
    return 0;
//     return async function(dispatch){
//         await axios.get('http://localhost:3001/accounts')
//     .then(res=>{return {type:"UPDATE_RECORDS",
//     payload:res.data}})
//     .catch (err => dispatch(updateError(err)));
// }
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