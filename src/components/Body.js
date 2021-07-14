import React from 'react'
import { Container, Col, Row } from 'reactstrap'
import Task from './Task'
import Header from './Header'

function Body() {

    return (
        <Container>
            <Row>
                <Col>
                    <Header />
                    <Task />
                </Col>
            </Row>
        </Container>
    )
}

export default Body
