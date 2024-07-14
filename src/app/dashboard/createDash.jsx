"use client"
import { useMantineTheme } from '@mantine/core';
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import OffCanvas from 'react-bootstrap/Offcanvas'
import Navbar from 'react-bootstrap/Navbar';
import HomeCalendar from './calendar'


export default function userDash({ userInfo }){
    const theme = useMantineTheme();
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
                    <div>
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
                            <Nav variant="pills" className="flex-column subjectBG p-2 ">
                            <div>
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
                            <div className="dashContent">

                                {/*Desktop Environment*/}
                                <div className="row p-4 d-none d-sm-flex">
                                    <div className="col-3">
                                        <HomeCalendar />
                                    </div>
                                    <div className="col-1 d-none d-xl-flex"></div>
                                    <div className="col-4 d-none d-xl-flex">
                                        <h2>Hello, {userID}</h2>
                                    </div>
                                    <div className="col-5 d-sm-flex d-xl-none">
                                        <h2>Hello user!</h2>
                                    </div>
                                </div>

                                {/*Mobile Environment*/}
                                <div className="row p-4 d-flex d-sm-none">
                                    <div className="col-12">
                                        <h2>Hello user!</h2>
                                    </div>
                                    <div className="col-12">
                                        <h2>Hello user!</h2>
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