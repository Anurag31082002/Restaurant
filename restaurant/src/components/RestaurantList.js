import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import {
  Link,
} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

export default class RestaurantList extends Component {
  constructor() {
    super();
    this.state = {
      list: null,
    }
  }
  componentDidMount() {
    fetch("http://localhost:3000/restaurant").then((response) => {
      response.json().then((result) => {
        this.setState({ list: result })
      })
    })
  }
  delete(id) {
    fetch(`http://localhost:3000/restaurant/${id}`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((result) => {
      result.json().then((resp) => {
        alert('Are you sure you want to delete restaurant?');
        this.setState({
          list: this.state.list.filter(item => item.id !== id)
        });
      });
    });
  }

  render() {
    return (
      <div>
        <h1>Restaurant List</h1>{
          this.state.list ?
            <div>
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Rating</th>
                    <th>Email</th>
                    <th>Address</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                {
                  this.state.list.map((item, i) =>
                    <tr >
                      {/* <td>{item.id}</td> */}
                      <td>{i + 1}</td>
                      <td>{item.name}</td>
                      <td>{item.rating}</td>
                      <td>{item.email}</td>
                      <td>{item.address}</td>
                      <td><Link to={`/update/${item.id}`}> <FontAwesomeIcon icon={faEdit} /></Link>
                      <span onClick={()=>this.delete(item.id)}> <FontAwesomeIcon icon={faTrash} color="red" /></span></td>
                      
                    </tr>
                    )
                }
                </tbody>
              </Table>
            </div>
            : <p>Please wait</p>
        }
      </div>
    )
  }
}
