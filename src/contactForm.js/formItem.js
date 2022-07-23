import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'reactstrap';
import { Button } from 'reactstrap';
import { actionType } from "../Redux/actions"
import { CSVLink, CSVDownload } from "react-csv";



function FormItem() {
  const dispatch = useDispatch();
  const formValue = useSelector(state => state.formData)


  const backClick = () => {
    dispatch(actionType("back"))
  }
  const clickPreview = (x) => {
    dispatch(actionType("preView", x))
  }
  return (
    <div>
      <Table bordered>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>address</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {formValue?.map((x, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{x.firstName}</td>
                <td>{x.lastName}</td>
                <td>{x.address}</td>
                <td> <Button onClick={() => clickPreview(x)}>preview</Button></td>
              </tr>)
          })}
        </tbody>
      </Table>

      <Button><CSVLink data={formValue}>EXPORT TO CSV</CSVLink></Button>;

      {/* <Button onClick={backClick}>back</Button> */}
    </div>
  )
}
export default FormItem
