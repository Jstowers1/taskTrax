import { getSession } from "../libs/lib"
import { redirect } from "next/navigation"
import Link from "next/link";
import CreateDash from "./createDash"




export default async function dashboard(){
    const session = await getSession();
    
    if(!session){
        redirect('/');
    }
    const username = JSON.stringify(session.user.username, null, 2).replace(/"/g, '');
    const userID = JSON.stringify(session.user.userID, null, 2)

    return(
        <>
        <div className="navbar pt-0">
            <h3 className="ps-2">{username}</h3>
            
            <div className="d-flex justify-content-end">
                <Link href="/register">
                    <button type="button" className="btn btn-primary">Logout</button>
                </Link>
            </div>
        </div>
        <CreateDash userInfo={[username, userID]} />       
        </>
    )
}