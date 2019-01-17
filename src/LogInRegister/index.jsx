import React, { Component } from 'react';
import { Form, Button, Grid, Segment } from 'semantic-ui-react';
import './style.css';



class LogInRegister extends Component {
	constructor(){
	    super();
	    this.state = {
	        username: '',
	        password: '',
	        which: "login",
	        message: ''

	    }
	}
	handleInput = (e) => {
		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		})
	}

	handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const response = await fetch(`${process.env.REACT_APP_BACKEND_ADDRESS}/users/${this.state.which}`, {
				method: 'POST',
				credentials: 'include',
				body: JSON.stringify({
					username: this.state.username,
					password: this.state.password
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			})

			const parsed = await response.json();

			if (parsed.status === 200) {
				this.props.LogIn(parsed.logged_in_as)
			} else {
				this.setState({
					message: parsed.message
				})
			}
		 } catch(err){
		 	console.log(err, "<--- fetch error")
		 }
	}

	toggle = () => {
		if(this.state.which === "login"){
			this.setState({
				which: "register"
			})
		} else {
			this.setState({
				which: "login"
			})
		}
	}
    render(){
        return(
          <div>
          	<Grid container columns={1} textAlign='center' vertical='middle' style={{height: '100%'}}>
        		<Segment className="LogInGrid">
        		<h1 className="invalid">{this.state.message}</h1>
            	<h1> {this.state.which === "login" ? "Log in here" : "Register here"} </h1>
            		<Form onSubmit={this.handleSubmit}>
		            	<input
		            		type="text"
		            		name="username"
		            		placeholder="username"
		            		value={this.state.username}
		            		onChange={this.handleInput}
		            		/>
	            		<input
	            			type="password"
	            			name="password"
	            			placeholder="password"
	            			value={this.state.password}
	            			onChange={this.handleInput}
	            			/> <br />
            			<Button color="green">
            				{this.state.which === "login" ? "Login" : "Register"}
            			</Button>
            			<br />
            			<br />
            			<small>
            				<h3>{this.state.which === "login" ? "Need an account? Sign Up" : "Already have an account? Log in here"}
            				<span className="fake-link" onClick={this.toggle}> here</span></h3>
            			</small>
            			</Form>
            		</Segment>
          	</Grid>
          </div>  
        )
    }
}
export default LogInRegister;