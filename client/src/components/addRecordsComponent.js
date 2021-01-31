import { useState,useEffect } from 'react';
import {useDispatch} from 'react-redux';
import axios from 'axios';
import {addRecord} from '../actions';
import config from '../config/AddRecordConfig.json';



export default function AddRecordComponent() {
    const [state, setState] = useState(config[1].state);
    
    const dispatch = useDispatch();
    
    const Submit = (e) => {
        e.preventDefault();
        useEffect(()=>{dispatch(addRecord(state))},[]);
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
            <form onSubmit={Submit}>
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
                                {
                                field.options.map((option) => {

                                    return (
                                        <label key ={field.uid+option}><input type={field.type} value={option} checked={state[field.className] === option} onChange={(e) => handleChange(e, field.className)} />{option}</label>
                                    )
                                })
                                } 
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
                                            <label key ={field.uid+option}><input type={field.type} value={option} onChange={(e) => toggleChange(e, field.className, option)} />{option}</label>
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
                                                <option key ={field.uid+option} value={option} onChange={(e)=>handleChange(e,field.className)}>{option}</option>
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
