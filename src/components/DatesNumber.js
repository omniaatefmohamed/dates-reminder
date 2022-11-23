import {  Row, Col } from 'react-bootstrap'

function DatesNumber({persons}) {
    return (
        <Row className="justify-content-center pb-3">
            <Col sm="8">
                <h3>لديك {persons.length} مواعيد اليوم</h3>
            </Col>
        </Row>
    )
}

export default DatesNumber