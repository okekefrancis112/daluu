import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            github:"",
            email:"",
            mobile:"",
            twitter:""
          }
    }
    componentDidMount=()=>{

    }
    submit=()=>{

    }
    change=()=>{
        this.setState({[e.target.name]:})
    }
    render() { 
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