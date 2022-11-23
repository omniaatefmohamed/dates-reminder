import React from 'react'
import { Row , Button, Col } from 'react-bootstrap'

function ActionButtons({DeleteData,ShowData}) {
    return (
        <div>
            <Row className="justify-content-center">
                <Col sm="8" className='py-3 justify-content-between d-flex'>
                    <Button className='text-white blue-bg' onClick={ShowData}>عرض كل البيانات </Button>
                    <Button className='red-bg' onClick={DeleteData}> مسح كل البيانات</Button>
                </Col>
            </Row>
        </div>
    )
}

export default ActionButtons