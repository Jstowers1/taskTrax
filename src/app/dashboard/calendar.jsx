"use client"
import { DatePicker } from '@mantine/dates';
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function homeCalendar(){
    const [selectedDate, setSelectedDate] = useState(null);
    const [showModal, setShowModal] = useState(false);
  
    const handleDateChange = (date) => {
        console.log(date);
        setSelectedDate(date);
        setShowModal(true);
        let selectedDay = "";
        selectedDay += date.toString();
        console.log(selectedDay);
    };
  
    const handleClose = () => setShowModal(false);

    return(
        <div>
            <DatePicker 
                styles={{
                    calendarHeader:{backgroundColor:"red", borderRadius:"10px"},
                    weekday:{backgroundColor:"red", borderTopLeftRadius:"10px", borderTopRightRadius:"10px"},
                    monthThead:{backgroundColor:"red", borderRadius:"10px", borderBottomRightRadius:"10px"},
                }}
                onChange={handleDateChange}
                maxLevel="year"
                size="xl"
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
    )
}