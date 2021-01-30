import { useState } from 'react';
import config from '../config/AddRecordConfig.json';
import axios from 'axios';


export default function AddRecordComponent() {
    const [state, setState] = useState(config[1].state);
    
    const submit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/accounts/add',state)
        .then((res)=>window.alert("Record added successfully !"))
        .catch(error=> { window.alert(error)});
    }
    
    const toggleChange =(e,field,aspect)=>{
       var value = state[field][aspect];
       setState({
           ...state,
           [field]:{...state[field],[aspect]:!value}
       })
    }
    //handlesChange in input type = text, radio, slelect
    const handleChange = (e, data) => {
        setState({
            ...state,
            [data]: e.currentTarget.value
        })
    }
    return (
        <div className="addRcrd">
            <form onSubmit={submit}>
                {config[0].map((field) => {

                    if (field.type === "text") {
                        return (
                            <div key={field.uid}>
                                <label className="formLabel">{field.label}</label>
                                <input type={field.type} className="formInput" onChange={(e) => handleChange(e, field.className)} placeholder={field.value} />
                            </div>)
                    }
                    else if (field.type === "radio") {
                        return (
                            <div key={field.uid} >
                                <label className="formLabel">{field.label}</label>
                                {field.options.map((option) => {

                                    return (
                                        <label><input type={field.type} value={option} checked={state[field.className] === option} onChange={(e) => handleChange(e, field.className)} />{option}</label>
                                    )
                                })} 
                            </div>
                        )
                    }
                    else if (field.type === "checkbox") {
                        return (
                            <div key={field.uid}>
                                <label className="formLabel">{field.label}</label>
                                {
                                    field.options.map((option) => {
                                        
                                        return (
                                            <label><input type={field.type} value={option} onChange={(e) => toggleChange(e, field.className, option)} />{option}</label>
                                        )
                                    })
                                }
                            </div>
                        )
                    }
                    else if (field.type === "number") {
                        return (
                            <div key={field.uid}>
                                <label className="formLabel">{field.label}</label>
                                <input type={field.type}  onChange={(e) => handleChange(e, field.className)} />        
                            </div>
                        )

                    }
                    else if (field.type === "select") {
                        return (
                            <div key={field.uid}>
                                <label className="formLabel">{field.label}</label>
                                <select onChange={(e) => handleChange(e, field.className)}>
                                    {
                                        <option value="" >select</option>
                                    }
                                     
                                        {
                                            field.options.map((option)=>{
                                            return(
                                                <option value={option} onChange={(e)=>handleChange(e,field.className)}>{option}</option>
                                            )
                                         })
                                        }
                                    
                                </select>        
                            </div>
                        )

                    }

                })}
                <button type="submit">Add Record</button>
            </form>

        </div>
    )
}
