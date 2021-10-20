import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

import './Services.css';

const Services = () => {
    const [services, setServices] = useState([]);


    // using use effect

    useEffect(() => {
        fetch('./servicesFakeData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="services bg-color my-4 p-5">
            <h1 className="text-center">Our Services</h1>
            <h5 className="py-1 pb-3 text-center">We are Provided Best Services</h5>
            <Row xs={1} md={3} className="g-4">
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}>

                    </Service>)
                }
            </Row>
        </div>
    );
};

export default Services;