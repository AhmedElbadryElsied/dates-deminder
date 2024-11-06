import { Button, Col, Row } from 'react-bootstrap';

function Action({deleteData , showData}) {



  return (
    <Row className="justify-content-center my-2 ">
          <Col sm="8" className="d-flex justify-content-between">
            <Button onClick={deleteData} className="p-2" variant="outline-primary">
              مسح الكل
            </Button>
            <Button onClick={showData} className="p-2" variant="primary">
              عرض الكل
            </Button>
          </Col>
        </Row>
  )
}

export default Action