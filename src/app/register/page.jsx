import CreateForm from "./CreateForm";
import Link from "next/link";

export default function register(){
    return(
        <div className="row">
            <div className="col"></div>
            <div className="col-6">
                <div className="loginBG text-center">
                    <h2>Register an Account</h2>
                    <div className="row pt-1"> <CreateForm /> </div>
                    <div className="row pt-4"> 
                        <div className="col-6 d-grid">
                        <Link href="/">
                            <button type="button" className="btn btn-secondary" style={{width: '100%'}}>Go Home</button>
                        </Link>
                        </div>
                        <div className="col-6 d-grid">
                            <Link href="/login">
                                <button type="button" className="btn btn-secondary" style={{width: '100%'}}>Log in</button>
                            </Link>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="col"></div>
        </div>
    )
}