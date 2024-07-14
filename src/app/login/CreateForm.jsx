"use client"
import { useRouter } from "next/navigation"
import { useState } from "react"


export default function CreateForm(){
    const router = useRouter();

    const[name, setName] = useState('');
    const[pwd, setPwd] = useState('');
    const[isLoading, setLoading] = useState(false);
    const[error, setErrors] = useState([]);
    const[formValid, setFormValid] = useState(true);
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
    
    const handleLogin = async(e) => {
        let errors =[];
        setLoading(true);

        if(!e.get('username')){
            errors.push("unErr");
            setLoading(false);
        }
        
        if(!e.get('pwd')){
            errors.push("pwdErr");
            setLoading(false);
        }
        setErrors(errors);
        if(errors.length !== 0){
            setFormValid(true);
            return;
        }
        
        const res = await fetch('/api/handleLogIn', {
            method: "POST",
            body: e
        })
        
        if (res.status === 200){
            setFormValid(true);
            router.push('/dashboard');
        }else if(res.status === 500){
            setFormValid(true);
            setLoading(false);
            setDBErr(true);
        } else if(res.status === 400){
            setLoading(false);
            setFormValid(false);
        }

    }

    return(
        
        <main>
            <form action={handleLogin}>
            <div className="mb-3" id="usernameForm" style={{color: errSearch("unErr")||!formValid ? "red" : "black"}}>
                <label htmlFor="username" className = {errSearch("unErr")||!formValid ? "form-label is-invalid" : "form-label "}  >Username</label>
                <input  type="text" className={errSearch("unErr")||!formValid ? "form-control is-invalid" : "form-control "} id="username" name="username" onChange={(e) => setName(e.target.value)} value={name}  />
            </div>
            <div className="mb-3" id="pwdForm" style={{color: errSearch("pwdErr")||!formValid ? "red" : "black"}}>
                <label htmlFor="password" className={errSearch("pwdErr")||!formValid ? "form-label is-invalid" : "form-label "}>Password</label>
                <input type="password" className={errSearch("pwdErr")||!formValid ? "form-control is-invalid" : "form-control "} id="password" name="pwd" onChange={(e) => setPwd(e.target.value)} value={pwd}/>
            </div>
            <h3 className="text-danger" style={{display: error.length!==0||!formValid||dbErr ? "block" : "none"}}>{error.length!==0 && <span>All fields to log in are required.</span>} {!formValid && <span>Invalid username or password.</span>} {dbErr && <span>Server currently down, our apologies!</span>}</h3>
            <button type="submit" disabled={isLoading} className="btn btn-primary"> {isLoading && <span>Loading...</span>} {!isLoading && <span>Log In</span>}</button>


            </form>
            
        </main>
    )
}