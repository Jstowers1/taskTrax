"use client"

import { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import OffCanvas from 'react-bootstrap/Offcanvas'
import Navbar from 'react-bootstrap/Navbar';
import Modal from 'react-bootstrap/Modal';


import { HomeCalendar, DisplayTasks, SoonTasks, DisplaySchedule, ClassForm, TaskForm } from './Components'


export default function userDash({ userInfo, classes }){
    const username = userInfo[0];
    const userID = userInfo[1];

    const [key, setKey] = useState('home');
    const [classData, setClassData] = useState([]);

    const [classShow, setClassShow] = useState(false);
    const handleClassClose = () => setClassShow(false);
    const handleClassShow = () => setClassShow(true);

    const [taskShow, setTaskShow] = useState(false);
    const handleTaskClose = () => setTaskShow(false);
    const handleTaskShow = () => setTaskShow(true);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useEffect(() => {
        setClassData(classes);
    }, [classes]);

    const RenderClassNav = () => {
        const elements = [];
        classData.forEach((e) => {
            elements.push(
                <Nav.Item>
                    {key===e.subjectName ? <Nav.Link eventKey={e.subjectName} style={{background: e.color}}>{e.subjectName}</Nav.Link> : <Nav.Link eventKey={e.subjectName}><span style={{color: e.color}}>{e.subjectName}</span></Nav.Link>}
                </Nav.Item>
            );
        });
        return elements;
    }

    const RenderClassContent = () => {
        const elements = [];

        classData.forEach((e) => {
            elements.push(
                <Tab.Pane eventKey={e.subjectName}>
                    <div>
                        <div className="row">
                            {/*First Row*/}
                            <div className="col-3 d-md-none d-xl-flex pt-4 justify-content-center dashContent ms-5 me-5"> {/*Desktop*/}
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
                            <div className="col-12 d-none d-md-flex d-xl-none pt-4 ps-2 justify-content-center dashContentMobile"> {/*Tablet*/}
                                <div>
                                    <div className="row text-center"><h2>Calendar</h2></div>
                                    <div className="col">
                                        <h2>MEDIUM!</h2>
                                        <HomeCalendar calSize={"md"} /> 
                                    </div>
                                    <div className="col"> 
                                        <SoonTasks />
                                    </div>   
                                </div>
                            </div>

                            <div className="col-12 d-sm-flex d-md-none pt-4 ps-2 justify-content-center dashContentMobile"> {/*Iphone*/}
                                <div>
                                    <h2>SMALL!</h2>
                                    <div className="row text-center"><h2>Calendar</h2></div>
                                    <div className="row">
                                        <HomeCalendar calSize={"md"} /> 
                                    </div>
                                    <div className="row"> 
                                        <SoonTasks />
                                    </div>   
                                </div>
                            </div>
                            
                            {/*Spacer*/}
                            <div className="col-1 d-sm-none d-md-flex d-xl-none"></div>

                            {/*Second Row*/}
                            <div className="col-7 pt-4 d-none d-xl-flex dashContent ms-5 me-5">    {/*Desktop*/}
                                <div style={{width:"100%"}}>
                                    <div className="row text-center"><h2>Reminders</h2></div>
                                    <div className="row"><h2><DisplayTasks /></h2> </div>
                                </div>
                            </div>                                    
                            <div className="col-12 pt-4 d-flex d-xl-none dashContentMobile"> {/*Phone Portrait*/}
                                <div style={{width:"100%"}}>
                                    <div className="row text-center"><h2>Reminders</h2></div>
                                    <div className="row"><h2><DisplayTasks /></h2> </div>
                                </div>
                            </div>                                
                        </div>
                    </div>
                </Tab.Pane>
            );
        });
        return elements;
    }



    return(
        <>
        {/* Class Modal */}
        <Modal show={classShow} onHide={handleClassClose}>
            <Modal.Header style={{background: "#999999"}}>
                <div className="text-center" style={{width:"100%"}} >
                    <h2>New Class</h2>
                </div>
            </Modal.Header>
            <Modal.Body style={{background: "#999999", borderRadius:"0 0 7px 7px"}}>
                <div className="loginBG">
                    <ClassForm />
                </div>
            </Modal.Body>
        </Modal>


        {/* Task Modal */}
        <Modal show={taskShow} onHide={handleTaskClose}>
            <Modal.Header style={{background: "#999999"}}>
                <div className="text-center" style={{width:"100%"}} >
                    <h2>New Task</h2>
                </div>
            </Modal.Header>
            <Modal.Body style={{background: "#999999", borderRadius:"0 0 7px 7px"}}>
                <div className="loginBG">
                    <TaskForm />
                </div>
            </Modal.Body>
        </Modal>



        {/* Page Content */}
        <Tab.Container fluid id="tabBar" defaultActiveKey="Home" onSelect={(k) => setKey(k)}>
            <Row>
            <Col sm={1} style={{minWidth:"9%"}}>
                    {/*Desktop Nav */}
                    <Nav variant="pills" className="flex-column subjectBG p-2 d-none d-xl-flex">
                        <div className="text-end">
                            <Nav.Item key="newSubject">
                                <button type="button" className="btn" onClick={handleClassShow}>New Class</button>
                            </Nav.Item>
                            <Nav.Item key="newTask">
                                <button type="button" className="btn" onClick={handleTaskShow}>New Task</button>
                            </Nav.Item>
                            <Nav.Item key="home">
                                <Nav.Link eventKey="Home" key="home">Home</Nav.Link>
                            </Nav.Item>
                            <RenderClassNav />
                        </div>
                    </Nav>

                    {/*Mobile Nav */}
                    <Navbar expand={false} className="d-xl-none">
                        <Navbar.Toggle aria-controls="offcanvasNavbar" onClick={handleShow} />
                    </Navbar>

                    <OffCanvas show={show} onHide={handleClose} placement="start" className="customOffCanvas">
                        <OffCanvas.Header closeButton>
                            <OffCanvas.Title>Classes</OffCanvas.Title>
                        </OffCanvas.Header>

                        <OffCanvas.Body>
                            <Nav variant="pills" className="flex-column subjectBGMobile p-2 ">
                            <div>
                                <Nav.Item key="newSubject">
                                    <button type="button" className="btn" onClick={handleClassShow}>New Class</button>
                                </Nav.Item>
                                <Nav.Item key="newTask">
                                    <button type="button" className="btn" onClick={handleTaskShow}>New Task</button>
                                </Nav.Item>
                                <Nav.Item key="home">
                                    <Nav.Link eventKey="Home" key="home">Home</Nav.Link>
                                </Nav.Item>
                                <RenderClassNav />
                            </div>
                            </Nav>
                        </OffCanvas.Body>
                    </OffCanvas>
                    
                </Col>
                <Col sm={10} style={{minWidth:"91%"}}>
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
                        <RenderClassContent />
                    </Tab.Content>
                </Col>
            </Row>
        </Tab.Container>
        </>
    )
}