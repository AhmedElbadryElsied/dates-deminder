import React from 'react';
import { Col, Row } from 'react-bootstrap';

function Title({data}) {
  return (
    <Row className="justify-content-center">
    <Col sm="8" className="">
      {data.length ? (
        <>لديك {data.length} مواعيد اليوم</>
      ) : (
        <>لا توجد مواعيد لديك</>
      )}
    </Col>
  </Row>
  )
}

export default Title