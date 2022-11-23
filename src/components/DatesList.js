import {  Row, Col, Alert } from 'react-bootstrap'

function DatesList({persons}) {
    return (
        <Row className="justify-content-center">
        <Col sm="8">
          <div className='rectangular box-shadow rounded-4 p-4'>
            {persons.length ? (persons.map((person) => {
              return (
                <div className='d-flex p-3 border-bottom date-section' key={person.id}>
                  <div>
                    <img src={person.img} className='rounded-circle ms-2' />
                  </div>
                  <div>
                    <p className='mb-0 fw-bold fs-5'> {person.name} </p>
                    <p className='fs-6 mb-0'> {person.date}</p>
                  </div>
                </div>
              )
            })) : (<Alert key="info" variant="info">
              لا يوجد مواعيد 
            </Alert>)
            }
          </div>
        </Col>
      </Row>
    )
}

export default DatesList