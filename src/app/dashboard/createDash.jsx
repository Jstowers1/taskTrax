"use client"

import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import OffCanvas from 'react-bootstrap/Offcanvas'
import Navbar from 'react-bootstrap/Navbar';
import HomeCalendar from './calendar'
import { DisplayTasks, SoonTasks} from './tasks'
import DisplaySchedule from './schedule'


export default function userDash({ userInfo }){
    const username = userInfo[0];
    const userID = userInfo[1];

    const [key, setKey] = useState('home');

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return(
        <>
        <Tab.Container fluid id="tabBar" defaultActiveKey="Home" onSelect={(k) => setKey(k)}>
            <Row>
            <Col sm={1}>
                    {/*Desktop Nav */}
                    <Nav variant="pills" className="flex-column subjectBG p-2 d-none d-xl-flex">
                    <div className="text-end">
                        <Nav.Item>
                            <button type="button" className="btn" onClick={() => alert("clicked!")}>New Event</button>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link eventKey="Home">Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            {key==="Calculus" ? <Nav.Link eventKey="Calculus" style={{background: "red"}}>Calculus</Nav.Link> : <Nav.Link eventKey="Calculus"><span style={{color: "red"}}>Calculus</span></Nav.Link>}
                        </Nav.Item>
                        <Nav.Item>
                            {key==="Chemistry" ? <Nav.Link eventKey="Chemistry" style={{background: "purple"}}>Chemistry</Nav.Link> : <Nav.Link eventKey="Chemistry"><span style={{color: "purple"}}>Chemistry</span></Nav.Link>}
                        </Nav.Item>
                    </div>
                    </Nav>

                    {/*Mobile Nav */}
                    <Navbar expand={false} className="d-xl-none">
                        <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />
                    </Navbar>

                    <OffCanvas show={show} onHide={handleClose} placement="start" className="customOffCanvas">
                        <OffCanvas.Header closeButton>
                            <OffCanvas.Title>Subjects</OffCanvas.Title>
                        </OffCanvas.Header>

                        <OffCanvas.Body>
                            <Nav variant="pills" className="flex-column subjectBGMobile p-2 ">
                            <div>
                                <Nav.Item>
                                    <button type="button" className="btn" >New Event</button>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="Home">Home</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    {key==="Calculus" ? <Nav.Link eventKey="Calculus" style={{background: "red"}}>Calculus</Nav.Link> : <Nav.Link eventKey="Calculus"><span style={{color: "red"}}>Calculus</span></Nav.Link>}
                                </Nav.Item>
                                <Nav.Item>
                                    {key==="Chemistry" ? <Nav.Link eventKey="Chemistry" style={{background: "purple"}}>Chemistry</Nav.Link> : <Nav.Link eventKey="Chemistry"><span style={{color: "purple"}}>Chemistry</span></Nav.Link>}
                                </Nav.Item>
                            </div>
                            </Nav>
                        </OffCanvas.Body>
                    </OffCanvas>
                    
                </Col>
                <Col sm={11}>
                    <Tab.Content>
                        <Tab.Pane eventKey="Home">
                            <div>
                                <div className="row">
                                    {/*First Row*/}
                                    <div className="col-3 d-none d-sm-none d-md-none d-lg-none d-xl-flex pt-4 justify-content-center dashContent ms-5 me-5"> {/*Desktop*/}
                                        <div>
                                            <div className="row text-center"><h2>Calendar</h2></div>
                                            <div className="row">
                                                <HomeCalendar calSize={"xl"} /> 
                                            </div>
                                            <div className="row"> 
                                                <SoonTasks />
                                            </div>   
                                        </div>   
                                    </div>
                                    <div className="col-5 d-none d-sm-none d-md-none d-lg-flex d-xl-none pt-4 justify-content-center dashContentMobile"> {/*Tablet Sideways*/}
                                        <div>
                                            <div className="row text-center"><h2>Calendar</h2></div>
                                            <div className="row">
                                                <HomeCalendar calSize={"lg"} /> 
                                            </div>
                                            <div className="row"> 
                                                <SoonTasks />
                                            </div>   
                                        </div>
                                        
                                    </div>
                                    <div className="col-6 d-none d-sm-none d-md-flex d-lg-none d-xl-none pt-4 justify-content-center dashContentMobile"> {/*Tablet Portrait*/}
                                        <div>
                                            <div className="row text-center"><h2>Calendar</h2></div>
                                            <div className="row">
                                                <HomeCalendar calSize={"md"} /> 
                                            </div>
                                            <div className="row"> 
                                                <SoonTasks />
                                            </div>   
                                        </div>
                                    </div>
                                    <div className="col-6 d-none d-sm-flex d-md-none d-lg-none d-xl-none pt-4 justify-content-center dashContentMobile"> {/*IphoneSE2 Portrait*/}
                                        <div>
                                            <div className="row text-center"><h2>Calendar</h2></div>
                                            <div className="row">
                                                <HomeCalendar calSize={"sm"} /> 
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 d-flex d-sm-none d-md-none d-lg-none d-xl-none pt-4 ps-2 justify-content-center dashContentMobile"> {/*Iphone*/}
                                        <div>
                                            <div className="row text-center"><h2>Calendar</h2></div>
                                            <div className="row">
                                                <HomeCalendar calSize={"sm"} /> 
                                            </div>
                                            <div className="row"> 
                                                <SoonTasks />
                                            </div>   
                                        </div>
                                    </div>
                                    
                                    {/*Spacer*/}
                                    <div className="col-1 d-sm-none d-md-flex d-xl-none"></div>

                                    {/*Second Row*/}
                                    <div className="col-4 pt-4 d-none d-xl-flex dashContent ms-5 me-5">    {/*Desktop*/}
                                        <div style={{width:"100%"}}>
                                            <div className="row text-center"><h2>Reminders</h2></div>
                                            <div className="row"><h2><DisplayTasks /></h2> </div>
                                        </div>
                                    </div>                                    
                                    <div className="col-5 pt-4 d-none d-md-none d-lg-flex d-xl-none dashContentMobile"> {/*Tablet*/}
                                        <div style={{width:"100%"}}>
                                            <div className="row text-center"><h2>Reminders</h2></div>
                                            <div className="row"><h2><DisplayTasks /></h2> </div>
                                        </div>
                                    </div>                                    
                                    <div className="col-4 pt-4 d-none d-md-flex d-lg-none d-xl-none dashContentMobile"> {/*Phone landscape*/}
                                        <div style={{width:"100%"}}>
                                            <div className="row text-center"><h2>Reminders</h2></div>
                                            <div className="row"><h2><DisplayTasks /></h2> </div>
                                        </div>
                                    </div>                                    
                                    <div className="col-12 pt-4 d-flex d-sm-none d-lg-none d-xl-none dashContentMobile"> {/*Phone Portrait*/}
                                        <div style={{width:"100%"}}>
                                            <div className="row text-center"><h2>Reminders</h2></div>
                                            <div className="row"><h2><DisplayTasks /></h2> </div>
                                        </div>
                                    </div>
                                    
                                    {/*Spacer*/}
                                    <div className="col-1 d-sm-none d-md-flex d-xl-none"></div>

                                    {/*Third Row*/}
                                    <div className="col-3 pt-4 d-none d-xl-flex dashContent ms-5"> {/*Desktop*/}
                                        <div style={{width:"100%"}}>
                                            <div className="row text-center"><h2>Schedule</h2></div>
                                            <div className="row"><h2><DisplaySchedule /></h2> </div>
                                        </div>
                                    </div>                                    
                                    <div className="col-11 pt-4 d-none d-md-flex d-xl-none dashContentMobile"> {/*Phone landscape/Tablet*/}
                                        <div style={{width:"100%"}}>
                                            <div className="row text-center"><h2>Schedule</h2></div>
                                            <div className="row"><h2><DisplaySchedule /></h2> </div>
                                        </div>
                                    </div>                                    
                                    <div className="col-12 pt-4 d-flex d-sm-none d-xl-none dashContentMobile"> {/*Phone Portrait*/}
                                        <div style={{width:"100%"}}>
                                            <div className="row text-center"><h2>Schedule</h2></div>
                                            <div className="row"><h2><DisplaySchedule /></h2></div>
                                        </div>
                                    </div>


                                </div>
                                

                                
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="Calculus">Calculus</Tab.Pane>
                        <Tab.Pane eventKey="Chemistry"> Chemistry</Tab.Pane>
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
        </>
    )
}