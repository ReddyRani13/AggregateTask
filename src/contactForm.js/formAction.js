import React from "react"
import { useSelector, useDispatch } from 'react-redux';
import { Field, Form, Formik, ErrorMessage } from 'formik';
import { Button, FormGroup, Label, Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as Yup from 'yup';
import { actionType, submitFormValuesRequest } from "../Redux/actions"




function FormManager() {
  const dispatch = useDispatch();
  const previewData = useSelector(state => state.previewData);

  const clickPreview = (values) => {
    dispatch(actionType("preView", values))
  }

  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        company: "",
        emailAddress: "",
        password: "",
        confirmPassword: "",
        address: "",
        city: "",
        state: "",
      }}
      validationSchema={Yup.object().shape({
        firstName: Yup.string().min(2, "Must be more than 1 characters").max(25, "Must be less than 25 characters").required("This field is requried")
          .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
        lastName: Yup.string().min(2, "Must be more than 1 characters").max(25, "Must be less than 25 characters").required("This field is requried")
          .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
        company: Yup.string().min(2, "Must be more than 1 characters").max(50, "Must be less than 25 characters").required("This field is requried")
          .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
        emailAddress: Yup.string().min(2, "Must be more than 1 characters").max(50, "Must be less than 50 characters")
          .email("Invalid email format").required("This field is requried"),

        password: Yup.string().max(16, "Must be less than 16 characters").required('Please Enter your password').matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/,
          "Must Contain 15 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match').required('please confirm  password'),
        address: Yup.string().min(2, "Must be more than 1 characters").max(75, "Must be less than 75 characters").required("This field is requried")
          .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
        city: Yup.string().min(2, "Must be more than 1 characters").max(50, "Must be less than 50 characters").required("This field is requried")
          .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
        state: Yup.string().min(2, "Must be more than 1 characters").max(25, "Must be less than 25 characters").required("This field is requried")
          .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field "),
      })}
      onSubmit={(values, { resetForm }) => {
        console.log("Values===>", values)
        dispatch(actionType("add"))
        dispatch(submitFormValuesRequest(values))
        resetForm()

      }}
    >
      {({ values, errors, touched }) => {
        console.log("SADfgadsfdg", errors, touched);
        return <center>
          <Form >
            <Row style={{ 'marginBlockStart': 10 }}>
              <Row md={1}>
              </Row>
              <h4>Contact Form</h4>

              <Col md={3}>
                <FormGroup >
                  <Label for="firstName">FirstName: </Label>
                  <Field id="firstName" type="text" name="firstName" className={'form-control ' + (errors.firstName && touched.firstName ? 'is-invalid' : '')} />
                  <div className='error-message'><ErrorMessage name='firstName' /></div>
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="lastName">LastName: </Label>
                  <Field id="lastName" type="text" name="lastName" className={'form-control ' + (errors.lastName && touched.lastName ? 'is-invalid' : '')}  ></Field>
                  <div className='error-message'><ErrorMessage name='lastName' /></div>
                </FormGroup>
                {' '}
              </Col>
            </Row>
            {' '}
            <Row>
              <Col md={3}>
                <FormGroup>
                  <Label for="company">company: </Label>
                  <Field type="text" name="company" className={'form-control ' + (errors.company && touched.company ? 'is-invalid' : '')} ></Field>
                  <div className='error-message'><ErrorMessage name='company' /></div>
                </FormGroup>
                {' '}
              </Col>

            </Row>
            <Row>
              <Col md={3}>
                <FormGroup >
                  <Label for="emailAddress">Email Address: </Label>
                  <Field type="text" name="emailAddress" className={'form-control ' + (errors.emailAddress && touched.emailAddress ? 'is-invalid' : '')}  ></Field>
                  <div className='error-message'><ErrorMessage name='emailAddress' /></div>
                </FormGroup>
                {' '}
              </Col>
            </Row>

            <Row >
              <Col md={3}>
                <FormGroup>
                  <Label for="password">Password </Label>
                  <Field id="password" name="password" placeholder="Enter Password" className={'form-control ' + (errors.password && touched.password ? 'is-invalid' : '')} type="text" />
                  <div className='error-message'><ErrorMessage name='password' /></div>
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Label for="confirmPassword">confirmPassword: </Label>
                  <Field type="text" name="confirmPassword" className={'form-control ' + (errors.confirmPassword && touched.confirmPassword ? 'is-invalid' : '')} ></Field>
                  <div className='error-message'><ErrorMessage name='confirmPassword' /></div>
                </FormGroup>
                {' '}
              </Col>
            </Row>
            <Row>
              <Col md={3}>
                <FormGroup >
                  <Label for="address">address: </Label>
                  <Field type="text" name="address" className={'form-control ' + (errors.address && touched.address ? 'is-invalid' : '')} ></Field>
                  <div className='error-message'><ErrorMessage name='address' /></div>
                </FormGroup>
                {' '}
              </Col>
            </Row>
            <Row>

              <Col md={3}>
                <FormGroup>
                  <Label for="city">Current city: </Label>
                  <Field type="text" id="city" name="city" className={'form-control ' + (errors.city && touched.city ? 'is-invalid' : '')}  ></Field>
                  <div className='error-message'><ErrorMessage name='city' /></div>
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup >
                  <Label for="state">Current state: </Label>
                  <Field type="text" name="state" className={'form-control ' + (errors.state && touched.state ? 'is-invalid' : '')}  ></Field>
                  <div className='error-message'><ErrorMessage name='state' /></div>
                </FormGroup>
              </Col>

            </Row>
            <Row>

            </Row>

            <Row>
              <Col md={2}>
                <FormGroup >
                  <Button type="button" onClick={() => clickPreview(values)}>preview</Button>
                  {/* <Button type="submit">Add</Button> */}
                  {/* <Button type="reset">clear</Button> */}
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup >
                  {/* <Button type="button" onClick={clickPreview}>preview</Button> */}
                  <Button type="submit">Add</Button>
                  {/* <Button type="reset">clear</Button> */}
                </FormGroup>
              </Col>
              <Col md={2}>
                <FormGroup >
                  {/* <Button type="button" onClick={clickPreview}>preview</Button> */}
                  {/* <Button type="submit">Add</Button> */}
                  <Button >clear</Button>
                </FormGroup>
              </Col>
            </Row>
          </Form>

        </center>
      }}
    </Formik>
  )
}
export default FormManager
