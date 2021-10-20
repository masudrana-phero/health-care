import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Doctor from '../Doctor/Doctor';
import './Doctors.css';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('./doctorsFakeData.json')
            .then(res => res.json())
            .then(data => setDoctors(data));
    }, [])
    return (
        <div className="px-5 bg-color pb-5">
            <h2 className="py-3 text-center">This is Doctors Section</h2>
            <Row xs={1} md={4} className="g-4">
                {
                    doctors.map(doctor => <Doctor doctor={doctor}></Doctor>)
                }
            </Row>
        </div>
    );
};

export default Doctors;