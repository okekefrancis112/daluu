import React, { Component } from 'react';
import axios from "axios"
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            field:"",
            condition:"",
            condition_value:"",
            name:"",
            crew:"",
            age:null,
            position:"",
            missions:"",
            response:""
          }
    }
    componentDidMount=()=>{

    }
    submit=(e)=>{
  e.preventDefault()
 
  const dato ={
      name:this.state.name,
      crew:this.state.crew,
      age:this.state.age,
      position:this.state.position,
      missions:this.state.missions
  }
  let datum =JSON.stringify(dato)
   axios.get(`http://localhost:8080/validation?data=${datum}`)
   .then(data =>this.setState({response:data}, ()=>{
       console.log(data)
   }))
   .catch(err => console.log(err))
    }
    change=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    render() {
        console.log(this.state) 
        return (
            <div>
         <h1>Welcome To Express Validator!</h1>
    <form action="saveUser" onSubmit={this.submit}>
<small>Field : </small> <input type="text" value={this.state.field} onChange={this.change} name="field" placeholder="Name" /> <br/>
<small>Condition : </small> <input type="text" value={this.state.condition} onChange={this.change} name="condition" placeholder="Name" /> <br/> 
<small>Condition_value : </small> <input type="num" value={this.state.condition_value} onChange={this.change} name="condition_value" placeholder="Name" /> <br/>           
<small>Name : </small> <input type="text" value={this.state.name} onChange={this.change} name="name" placeholder="Name" /> <br/>
<small>Crew: </small>  <input type="text" value={this.state.crew} onChange={this.change} name="crew" placeholder="Crew" /> <br/>
<small>Age: </small>  <input type="number" value={this.state.age} onChange={this.change} name="age" placeholder="Age" /> <br/>
<small>Position: </small> <input type="text" value={this.state.position} onChange={this.change} name="position" placeholder="Position" /> <br/>
<small>Missions:</small> <input type="text" value={this.state.missions} onChange={this.change} name="missions" placeholder="Missions" /> <br/>
<button type="submit">Submit</button>
</form>
            </div>
        );
    }
}
 
export default Form;