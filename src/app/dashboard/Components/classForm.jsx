"use client"
import { useState, useRef } from "react"
import { ColorInput } from '@mantine/core';
import { addClass } from '../actions/handleClassForm';


export default function ClassForm(){
    const[name, setName] = useState('');
    const[color, setColor] = useState('');
    const[isLoading, setLoading] = useState(false);
    const[error, setErrors] = useState([]);
    const[formValid, setFormValid] = useState(true);
    const[success, setSuccess] = useState(false);
    const[dbErr, setDBErr] = useState(false);
    
    const formRef = useRef();

    function errSearch(name){
        let found = false;
        error.forEach((e) => {
            if(name === e){
                found = true;
            }
        });
        return found;
    }
    
    const handleClassCreate = async(e) => {
        setSuccess(false);
        setLoading(true);
        let errors = [];

        if(!name){
            setLoading(false);
            errors.push("nameErr");
        } 

        if(!color){
            setLoading(false);
            errors.push("colorErr");
        }
            
            
        setErrors(errors);
        if(errors.length !== 0){
            setFormValid(true);
            return;
        }

        const res = await(addClass(name, color));

        if (res == 202){
            setFormValid(true);
            setSuccess(true);
            
            setName('');
            setColor('');
        }else if(res == 500){
            setFormValid(true);
            setLoading(false);
            setDBErr(true);
        }
        setLoading(false);
    }

    return(
        
        <main>
            <form ref={formRef} action={handleClassCreate} >
            <div className="mb-3" id="nameForm" style={{color: errSearch("nameErr")||!formValid ? "red" : "black"}}>
                <label htmlFor="name" className = {errSearch("nameErr")||!formValid ? "form-label is-invalid" : "form-label "}  >Class Name</label>
                <input  type="text" className={errSearch("nameErr")||!formValid ? "form-control is-invalid" : "form-control "} id="name" name="name" onChange={(e) => setName(e.target.value)} value={name}  />
                <div id="nameInputHelp" className="form-text">A long name may wrap to another line.</div>
            </div>
            <div className="mb-3" id="colorForm" style={{color: errSearch("colorErr")||!formValid ? "red" : "black"}}>
                <label htmlFor="colorInput" className={errSearch("colorErr")||!formValid ? "form-label is-invalid" : "form-label "}>Class Color</label>
                <ColorInput id="colorInput" name="colorInput" value={color} onChange={setColor} className={errSearch("colorErr")||!formValid ? "form-control is-invalid" : "form-control "} closeOnColorSwatchClick  format="hex" swatches={['#000000', '#ffffff', '#fa5252', '#e64980', '#be4bdb', '#7950f2', '#4c6ef5', '#228be6', '#15aabf', '#12b886', '#40c057', '#fab005', '#fd7e14', '#ff8c8c']} />
                <div id="colorInputHelp" className="form-text" style={{color:color}}>This text reflects your chosen color.</div>
            </div>
            <h3 className="text" style={{display: error.length!==0||!formValid||dbErr||success ? "block" : "none", color: success ? "green" : "red"}}>{error.length!==0 && <span>All fields are required.</span>} {!formValid && <span>You shouldn't be seeing this message?</span>} {dbErr && <span>Server currently down, our apologies!</span>} {success && <span>Class Created</span>}</h3>
            <button type="submit" disabled={isLoading} className="btn btn-primary"> {isLoading && <span>Loading...</span>} {!isLoading && <span>Create Class</span>}</button>


            </form>
            
        </main>
    )
}