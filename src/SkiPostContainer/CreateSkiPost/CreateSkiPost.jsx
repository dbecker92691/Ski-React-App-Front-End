import React, {Component} from 'react';
import {Form, Label, Button, Segment} from 'semantic-ui-react'




class CreateSkiPost extends Component {
	constructor(){
		super();
		this.state = {
	      resort: '',
	      body: '',
	      id: ''
		}
	}
	handleChange = (e) => {

		this.setState({
			[e.currentTarget.name]: e.currentTarget.value
		})
	}
	render(){
		return(
			<div>
				<Segment>
					<h4>Add A New Post</h4>
					<Form onSubmit={this.props.addSkiPost.bind(null, this.state.id)}>
						<Label>Resort:</Label>
						<Form.Input type='text' name='resort' value={this.state.resort} onChange={this.handleChange} />
						<Label>Post:</Label>
						<Form.Input type='text' name='body' value={this.state.body} onChange={this.handleChange} />
						<Button color='green' type='Submit'>Create Post</Button>
					</Form>
				</Segment>
			</div>
		)
	}


}



export default CreateSkiPost;