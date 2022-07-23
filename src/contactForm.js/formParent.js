import React from 'react'
import {  useSelector } from 'react-redux';
import FormManager from './formAction';
import FormView from './formView';
import FormItem from "./formItem"
import {  Row, Col } from 'reactstrap';



function FormDisplay() {
  const type = useSelector(state => state.type)

  return (
    <>
      <>
        <Row className="h-40">
          <Col md={8}>
            <FormManager />
          </Col>
          {type === 'preView' && <Col md={4}>
            <FormView />
          </Col>}

        </Row>
        <Row>
          <Col>
            <FormItem />
          </Col>
        </Row>
      </>
    </>
  )


}

export default FormDisplay