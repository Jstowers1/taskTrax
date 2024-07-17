"use client"
import { DatePicker } from '@mantine/dates';
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

export default function HomeCalendar( {calSize}){
    const [selectedDate, setSelectedDate] = useState(null);
    const [showModal, setShowModal] = useState(false);
  
    const handleDateChange = (date) => {
        console.log(date);
        setSelectedDate(date);
        setShowModal(true);
    };
  
    const handleClose = () => setShowModal(false);

    return(
        <>
        <div>
            <DatePicker 
                styles={{
                    calendarHeader:{backgroundColor:"#999999", borderRadius:"10px"},
                    weekday:{color:"black"},
                    month:{backgroundColor:"#999999", borderRadius:"10px"},
                    monthsList:{backgroundColor:"#999999", borderRadius:"10px"},
                }}
                classNames={{ 
                    weekday: "text-center"
                }}
                
                onChange={handleDateChange}
                maxLevel="year"
                size= {calSize}
            />
            <Modal show={showModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Selected Date</Modal.Title>
                </Modal.Header>
            <Modal.Body>
                {selectedDate && (
                    <div>
                    <p>Day: {selectedDate.getDate()}</p>
                    <p>Month: {selectedDate.getMonth() + 1}</p>
                    <p>Year: {selectedDate.getFullYear()}</p>
                    </div>
                )}
            </Modal.Body>
      </Modal>
        </div>
    </>
    )
}