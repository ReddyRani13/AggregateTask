import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'reactstrap';
import { actionType } from "../Redux/actions"
import { Row, Col, Card, CardHeader, CardText, CardTitle, CardBody } from 'reactstrap';



function FormView() {
  const dispatch = useDispatch();
  const previewData = useSelector(state => state.previewData);
  const backClick = () => {
    dispatch(actionType("back", null))
  };

  return (

    <>
      <Card
        className="my-2"
        color="light"
        inverse
        style={{
          width: '30rem',
          backgroundColor:"red"
        }}
      >
        <CardHeader
          tag='h3'
          style={{
            color: '#262525',
            textAlign: "center"
          }}    >
          PREVIEW
        </CardHeader>
        <CardBody>
          <Row>
            <Col>
              <CardTitle tag="h5"
                style={{
                  color: '#262525'
                }}
              >
                FirstName:
              </CardTitle>
            </Col>
            <Col>
              <CardText
                style={{
                  color: '#262525',
                  // fontWeight:"bold"
                }}
              >
                {previewData?.firstName}
              </CardText>
            </Col>

          </Row>
          <Row>
            <Col>
              <CardTitle tag="h5"
                style={{
                  color: '#262525'
                }}
              >
                LastName:
              </CardTitle>
            </Col>
            <Col>
              <CardText
                style={{
                  color: '#262525',
                  // fontWeight:"bold"
                }}
              >
                {previewData?.lastName}
              </CardText>
            </Col>

          </Row>
          <Row>
            <Col>
              <CardTitle tag="h5"
                style={{
                  color: '#262525'
                }}
              >
                Company:
              </CardTitle>
            </Col>
            <Col>
              <CardText
                style={{
                  color: '#262525',
                  // fontWeight:"bold"
                }}
              >
                {previewData?.company}
              </CardText>
            </Col>

          </Row>
          <Row>
            <Col>
              <CardTitle tag="h5"
                style={{
                  color: '#262525'
                }}
              >
                EmailAddress:
              </CardTitle>
            </Col>
            <Col>
              <CardText
                style={{
                  color: '#262525',
                  // fontWeight:"bold"
                }}
              >
                {previewData?.emailAddress}
              </CardText>
            </Col>

          </Row>
          <Row>
            <Col>
              <CardTitle tag="h5"
                style={{
                  color: '#262525'
                }}
              >
                Address:
              </CardTitle>
            </Col>
            <Col>
              <CardText
                style={{
                  color: '#262525',
                  // fontWeight:"bold"
                }}
              >
                {previewData?.address}
              </CardText>
            </Col>

          </Row>
          <Row>
            <Col>
              <CardTitle tag="h5"
                style={{
                  color: '#262525'
                }}
              >
                City:
              </CardTitle>
            </Col>
            <Col>
              <CardText
                style={{
                  color: '#262525',
                  // fontWeight:"bold"
                }}
              >
                {previewData?.city}
              </CardText>
            </Col>

          </Row>
          <Row>
            <Col>
              <CardTitle tag="h5"
                style={{
                  color: '#262525'
                }}
              >
                State:
              </CardTitle>
            </Col>
            <Col>
              <CardText
                style={{
                  color: '#262525',
                  // fontWeight:"bold"
                }}
              >
                {previewData?.state}
              </CardText>
            </Col>
          </Row>
        </CardBody>
      </Card>
      <Button onClick={backClick}>back</Button>
    </>

  )

}
export default FormView