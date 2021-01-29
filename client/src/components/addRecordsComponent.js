import {useState} from 'react';

export default function AddRecordComponent() {
    const [input, setInput] = useState({});
    
    const handleChange =(e)=>{
setInput({
    ...input,
    [e.currentTarget.name]: e.currentTarget.value
})
    }
    return (
        <div className="addRcrd">
        <div className="pageTitle">
        Add record            
        </div>
        <form onSubmit ={null}>
        <label>Date</label>
        {/*<Reactdatepicker />*/}
        <label>Type : </label>
        <input onChange = {handleChange} type="text" />
        <label>Expense/Income/Record : </label>
        <input onChange = {handleChange} type="text" />
        <label>Varapu/Partition : </label>
        <input  onChange = {handleChange} type="text" />
        <label>Tree No :</label>
        <input onChange = {handleChange} type="number" />
        <label>Amount : </label>
        <input  onChange = {handleChange} type="number" />
        <label>Type Of Attack : </label>
        <input onChange = {handleChange} type="text"/>
        <label >Description</label>
        <input onChange = {handleChange} type="text"/>
        </form>

        </div>
    )
}
