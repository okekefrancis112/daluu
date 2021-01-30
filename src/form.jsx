import React, { Component } from 'react';
import axios from "axios"
class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            github:"",
            email:"",
            mobile:"",
            twitter:"",
            response:""
          }
    }
    componentDidMount=()=>{

    }
    submit=(e)=>{
  e.preventDefault()
 
  const dato ={
      name:this.state.name,
      github:this.state.github,
      mobile:this.state.mobile,
      email:this.state.email,
      twitter:this.state.twitter
  }

  let datum =JSON.stringify(dato)
   axios.post("http://localhost:8080/validation", {data:datum})
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
<small>Name : </small> <input type="text" value={this.state.name} onChange={this.change} name="name" placeholder="Name" /> <br/>
<small>Github: </small>  <input type="text" value={this.state.github} onChange={this.change} name="github" placeholder="Github" /> <br/>
<small>Email: </small>  <input type="text" value={this.state.email} onChange={this.change} name="email" placeholder="Email" /> <br/>
<small>Mobile: </small> <input type="number" value={this.state.mobile} onChange={this.change} name="mobile" placeholder="Mobile" /> <br/>
<small>Twitter:</small> <input type="text" value={this.state.twitter} onChange={this.change} name="twitter" placeholder="Twitter" /> <br/>
<button type="submit">Submit</button>
</form>
            </div>
        );
    }
}
 
export default Form;