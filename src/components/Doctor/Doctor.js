import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Doctor = (props) => {
    const { img, name, description } = props.doctor;
    return (
        <div className="service-container">
            <Col>
                <Card className="service">
                    <Card.Img className="image" variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text className="service-text">{description}</Card.Text>
                        <button className="btn btn-dark">click me</button>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};


export default Doctor;