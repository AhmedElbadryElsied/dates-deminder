import React from 'react'
import { Alert, Col, Image, Row } from 'react-bootstrap';

function Reactangle({data}) {
  return (
    <Row className="justify-content-center">
          <Col sm="8" className="">
            <div className="reactangle p-2 pt-3">
              {data.length ? (
                data.map((ele) => {
                  return (
                    <div
                      key={ele.id}
                      className="d-flex border-bottom mx-2 my-3"
                    >
                      <Image
                        style={{ width: "60px", height: "60px" }}
                        src="p1.jpeg"
                        roundedCircle
                      />
                      <div className="px-2">
                        <p className="d-inline fs-3">{ele["name"]}</p>
                        <p className="fs-6">{ele["time"]}</p>
                      </div>
                    </div>
                  );
                })
              ) : (
                <Alert variant="danger" dismissible>
                  <Alert.Heading>لا توجد مواعيد لعرضها</Alert.Heading>
                  <p>تظهر هذهِ الرساله عندما لا توجد مواعيد لديك</p>
                </Alert>
              )}
            </div>
          </Col>
        </Row>
  )
}

export default Reactangle