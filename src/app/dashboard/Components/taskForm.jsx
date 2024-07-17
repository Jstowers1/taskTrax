"use client"
import { RSC_CONTENT_TYPE_HEADER } from "next/dist/client/components/app-router-headers";
import { Router } from "next/router";
import { useState } from "react"


export default function TaskForm(){
    
    //console.log(userClasses);

    const[name, setName] = useState('');
    const[date, setDate] = useState('');
    const[startTime, setStart] = useState('');
    const[endTime, setEnd] = useState('');

    const[isLoading, setLoading] = useState(false);
    const[error, setErrors] = useState([]);
    const[formValid, setFormValid] = useState(true);
    const[success, setSuccess] = useState(false);
    const[dbErr, setDBErr] = useState(false);

    function errSearch(name){
        let found = false;
        error.forEach((e) => {
            if(name === e){
                found = true;
            }
        });
        return found;
    }

    
    
    const handleTaskCreate = async(e) => {
        setSuccess(false);
        setLoading(true);
        let errors = [];
        console.log(startTime);
        console.log(endTime);
        if(startTime > endTime){console.log('Start time is after end time!');}
        if(!name){
            setLoading(false);
            errors.push("nameErr");
        } 

        if(!date){
            setLoading(false);
            errors.push("dateErr");
        }

        if(!startTime){
            setLoading(false);
            errors.push("startErr");
        }
        if(!endTime){
            setLoading(false);
            errors.push("endErr");
        }
            
            
        setErrors(errors);
        if(errors.length !== 0){
            setFormValid(true);
            return;
        }

        /*
        const res = await fetch('/api/createClass', {
            method: "POST",
            body: e
        })
        if (res.status === 202){
            setFormValid(true);
            setSuccess(true);
        }else if(res.status === 500){
            setFormValid(true);
            setLoading(false);
            setDBErr(true);
        }
        */
        setLoading(false);
    }

    return(
        
        <main>
            <form action={handleTaskCreate}>
            <div className="mb-3" id="nameForm" style={{color: errSearch("nameErr")||!formValid ? "red" : "black"}}>
                <label htmlFor="name" className = {errSearch("nameErr")||!formValid ? "form-label is-invalid" : "form-label "}  >Class Name</label>
                <input  type="text" className={errSearch("nameErr")||!formValid ? "form-control is-invalid" : "form-control "} id="name" name="name" onChange={(e) => setName(e.target.value)} value={name}  />
                <div id="nameInputHelp" className="form-text">A long name may wrap to another line.</div>
            </div>
            <div className="mb-3" id="dateForm" style={{color: errSearch("dateErr")||!formValid ? "red" : "black"}}>
                <label htmlFor="dateInput" className={errSearch("dateErr")||!formValid ? "form-label is-invalid" : "form-label "}>Date of Event</label>
                <input type="date" id="date" name="date" onChange={(e) => setDate(e.target.value)} value={date} className={errSearch("dateErr")||!formValid ? "form-control is-invalid" : "form-control "}/>
            </div>
            <div className="mb-3 row">
                <div className="col" style={{color: errSearch("startErr")||!formValid|| endTime<startTime  ? "red" : "black"}}>
                    <label htmlFor="start" className={errSearch("startErr")||!formValid|| endTime<startTime  ? "form-label is-invalid" : "form-label "}>Start Time</label>
                    <input type="time" id="start" name="start" onChange={(e) => setStart(e.target.value)} value={startTime} className={errSearch("startErr")||!formValid|| endTime<startTime  ? "form-control is-invalid" : "form-control "}></input>
                </div>
                <div className="col" style={{color: errSearch("endErr")||!formValid|| endTime<startTime  ? "red" : "black"}}>
                    <label htmlFor="end" className={errSearch("endErr")||!formValid|| endTime<startTime ? "form-label is-invalid" : "form-label "}>End Time</label>
                    <input type="time" id="end" name="end" onChange={(e) => setEnd(e.target.value)} value={endTime} className={errSearch("endErr")||!formValid|| endTime<startTime ? "form-control is-invalid" : "form-control "}></input>
                </div>
                <div id="timeHelp" className="form-text text-center" style={{display: endTime<startTime ? "block" : "none", color:"red"}}>Invalid time selection</div>
            </div>
            <div className="mb-3">
                <label htmlFor="subject">Associated Class</label>
                <select id="subject" className="form-select">
                    <option value="Other">No Class</option>
                </select>
            </div>

            <h3 className="text" style={{display: error.length!==0||!formValid||dbErr||success ? "block" : "none", color: success ? "green" : "red"}}>{error.length!==0 && <span>All fields are required.</span>} {!formValid && <span>You shouldn't be seeing this message?</span>} {dbErr && <span>Server currently down, our apologies!</span>} {success && <span>Class Created</span>}</h3>
            <button type="submit" disabled={isLoading} className="btn btn-primary"> {isLoading && <span>Loading...</span>} {!isLoading && <span>Create Class</span>}</button>


            </form>
            
        </main>
    )
}