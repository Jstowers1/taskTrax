"use client"

export default function displaySchedule(){

    return(
        <>
        <div>
            <h3 style={{color:"blue"}}>Monday</h3>
            <h5>
                <ul>
                    <li style={{color:"red"}}>Calculus <p style={{fontSize:"72.8%" ,color:"#595959"}}>6:30AM to 8PM</p></li>
                    <li style={{color:"red"}}>Calculus <p style={{fontSize:"72.8%" ,color:"#595959"}}>6:30AM to 8PM</p></li>
                    <li style={{color:"purple"}}>Chemistry <p style={{fontSize:"72.8%" ,color:"#595959"}}>7AM to 8:30AM</p></li>
                </ul>
            </h5>
            <h3>Tuesday</h3>
            <h5>
                <ul>
                    <li style={{color:"purple"}}>Chemistry <p style={{fontSize:"72.8%" ,color:"#595959"}}>7AM to 8:30AM</p></li>
                    <li style={{color:"red"}}>Calculus <p style={{fontSize:"72.8%" ,color:"#595959"}}>6:30AM to 8PM</p></li>
                    <li style={{color:"purple"}}>Chemistry <p style={{fontSize:"72.8%" ,color:"#595959"}}>7AM to 8:30AM</p></li>
                </ul>
            </h5>
        </div>      
        </>
    )
}