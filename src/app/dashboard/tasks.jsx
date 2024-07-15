export function DisplayTasks(){
    return(
        <>
        <div>
            <h3 style={{color:"red"}}>Calculus</h3>
            <h5>
                <ul>
                    <li>Calculus Final <p style={{fontSize:"72.8%" ,color:"#595959"}}>July 21st, 7 days away</p></li>
                    <li>Unit 3.2 HW Due <p style={{fontSize:"72.8%" ,color:"#ff4d4d"}}>July 16th, 2 days away</p></li>
                </ul>
            </h5>
            <h3 style={{color:"purple"}}>Chemistry</h3>
            <h5>
                <ul>
                    <li>Chemistry Final <p style={{fontSize:"72.8%" ,color:"#595959"}}>July 21st, 7 days away</p></li>
                    <li>Unit 3.2 HW Due <p style={{fontSize:"72.8%" ,color:"#ff4d4d"}}>July 16th, 2 days away</p></li>
                </ul>
            </h5>
        </div>      
        </>
    )
}

export function SoonTasks(){
    return(
        <div>
        <h2>Tomorrow:</h2>
        <h5>
            <ul>
                <li><p style={{fontSize:"72.8%" ,color:"#595959"}}>Nothing</p></li>
            </ul>
        </h5>
        <h2>Next 5 Days:</h2>
        <h3 style={{color:"red"}}>Calculus</h3>
            <h5>
                <ul>
                    <li>Unit 3.2 HW Due <p style={{fontSize:"72.8%" ,color:"#ff4d4d"}}>July 16th, 2 days away</p></li>
                </ul>
            </h5>
            <h3 style={{color:"purple"}}>Chemistry</h3>
            <h5>
                <ul>
                    <li>Unit 3.2 HW Due <p style={{fontSize:"72.8%" ,color:"#ff4d4d"}}>July 16th, 2 days away</p></li>
                </ul>
            </h5>
        </div>
    )
}