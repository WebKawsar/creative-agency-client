import { Grid, Paper } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { Dropdown, DropdownButton, Table } from 'react-bootstrap';
import Dashboard from '../Components/Dashboard/Dashboard';



const AdminServiceList = () => {

  const [orders, setOrders] = useState([]);
  useEffect(() => {

      fetch(`https://creative-agency-simple.herokuapp.com/allOrders`)
      .then(response => response.json())
      .then(result => setOrders(result))

  }, [])


    
  const handleStatus = (id, e) => {

    console.log(id, e);
    
    // const type = "Visited";
    // fetch(`https://creative-agency-simple.herokuapp.com/updateSurviceById/${id}`, {
    //     method: 'PATCH',
    //     body: JSON.stringify({type: type}),
    //     headers: {
    //         'Content-type': 'application/json; charset=UTF-8',
    //     }
    // })
    // .then(response => response.json())
    // .then(data => console.log(data))


}


    return (
        <>
            <Dashboard>
                <Grid container>
                    <Grid item sm={12} md={12}>
                        <Paper>
                          

<Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Email</th>
      <th>Service</th>
      <th>Project Details</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    {
      orders.map(order =>     
      <tr key={order._id}>
        <td>#</td>
        <td>{order.name}</td>
        <td>{order.email}</td>
        <td>{order.service}</td>
        <td>{order.message}</td>
        <td>

{/* <DropdownButton onSelect={handleStatus(order._id)} id="dropdown-basic-button" title="Dropdown button">
  <Dropdown.Item>Status</Dropdown.Item>
  <Dropdown.Item eventKey="pending">Pending</Dropdown.Item>
  <Dropdown.Item eventKey="done">Done</Dropdown.Item>
</DropdownButton> */}


          <select onBlur={handleStatus(order._id)} name="status" id="status">
            <option value="">Select</option>
            <option value="Pending">Pending</option>
            <option value="On going">On going</option>
            <option value="Done">Done</option>
          </select>
        </td>
      </tr>)
    }
  </tbody>
</Table>





                        </Paper>
                    </Grid>
                </Grid>
            </Dashboard>
        </>
    );
};

export default AdminServiceList;