import React, { Component } from 'react'

export default class RestaurantCreate extends Component {
  constructor(){
    super();
    this.state={
      name:null,
      email:null,
      address:null,
      rating:null,
    };
    this.create = this.create.bind(this);
  }
  create() {
    fetch("http://localhost:3000/restaurant", {
      method:"POST",
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(this.state)
    }).then((result)=>{
      result.json().then((resp)=>{
        // console.warn(resp)
        alert('Restaurant has been added successfully');
      });
    });
  }
  render() {
    return (
      <div>
       <h1>Restaurant Create</h1>
       <div>
        <input onChange={(event)=>{this.setState({name: event.target.value})}} placeholder='Restaurant Name'/><br/><br/>
        <input onChange={(event)=>{this.setState({email: event.target.value})}} placeholder='Restaurant Email'/><br/><br/>
        <input onChange={(event)=>{this.setState({rating: event.target.value})}} placeholder='Restaurant Rating'/><br/><br/>
        <input onChange={(event)=>{this.setState({address: event.target.value})}} placeholder='Restaurant Address'/><br/><br/>
       <button onClick={()=>{this.create()}}>Add Restaurant</button>
       </div>
       </div>
    )
  }
}
