import {useSelector, useDispatch} from 'react-redux';

export default function ViewRecordsComponent() {
    const records = useSelector(state=>state.appDetails.Records);
    
    return (

        <div className="viewRcrds">
            {(records)?
            <div className ="recordTable">
            Table 
            </div>:

            <h2>No records found</h2>}
            
        </div>
    )
}
