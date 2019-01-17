import React, { Component } from 'react';
import { Grid , Button} from 'semantic-ui-react';
import './style.css';
import SkiPostList from './SkiPostList/SkiPostList';
import CreateSkiPost from './CreateSkiPost/CreateSkiPost';
import EditSkiPost from './EditSkiPost/EditSkiPost';





class SkiPostContainer extends Component {
	constructor(){
		super();
		this.state = {
			skiPosts: [],
			skiPostToEdit: {
				resort: '',
				body: '',
				id: ''
			},
			showEditPost: false

		}
	}
	async getSkiPosts() {
		const response = await fetch(`${process.env.REACT_APP_BACKEND_ADDRESS}/resort-posts`, {
			credentials: 'include'
		})
		console.log(response, "<----- fetch response")

		const parsedSkiPosts = await response.json();
		console.log(parsedSkiPosts, "<----- parsedSkiPosts")
		this.setState({
			skiPosts: parsedSkiPosts.posts
		})
	}

	componentDidMount() {
		this.getSkiPosts();
	}

	addSkiPost = async (skiPost, e) => {

		try {
		e.preventDefault();

		console.log(skiPost, "<----- ski post")

		const createdSkiPost = await fetch(`${process.env.REACT_APP_BACKEND_ADDRESS}/resort-posts/`, {
			method: "POST",
			credentials: "include",
			body: JSON.stringify(skiPost),
			headers: {
				'Content-Type': 'application/json'
			}
		});

		console.log(createdSkiPost, "<----- created ski post")

		const parsedSkiPostResponse = createdSkiPost.json();
		console.log(parsedSkiPostResponse, "<---- this is our create response")

		this.setState({
			skiPosts: 
			[...this.state.skiPosts, parsedSkiPostResponse.skiPost]
		});

		} catch(err) {
		console.log(err, '<---- create post err');

		}

	}

	deleteSkiPost = async (id) => {

		await fetch(`${process.env.REACT_APP_BACKEND_ADDRESS}/resort-posts/${id}`, {
			method: "DELETE",
			credentials: 'include'
		})

		// const parsedDeletePostResponse = await deletePostResponse.json();
		// console.log(parsedDeletePostResponse)

		this.getSkiPosts();
	}

	openAndEdit = (skiPost) => {
		console.log(skiPost, "ski post to edit");


		this.setState({
			showEditModal: true,
			skiPostToEdit: {
				...skiPost
			}
		});

	}

	handleEditChange = (e) => {

		this.setState({
			skiPostToEdit: {
				...this.state.skiPostToEdit,
				[e.currentTarget.name]: e.currentTarget.value
			}
		});

	}

	closeAndEdit = async (e) => {

		try {

			const editPostResponse = await fetch(`${process.env.REACT_APP_BACKEND_ADDRESS}/resort-posts/${this.state.skiPostToEdit.id}`, {
				method: 'PUT',
				credentials: 'include',
				body: JSON.stringify({
					resort: this.state.skiPostToEdit.resort,
					body: this.state.skiPostToEdit.body
				}),
				headers: {
					'Content-Type': 'application/json'
				}
			});

			const pasredEditResponse = editPostResponse.json();
			
			if(pasredEditResponse.status === 200) {
				this.setState({
					showEditModal: false,
					skiPostToEdit: this.state.skiPostToEdit
				});
			console.log(this.state.showEditModal, "<--- show edit modal?")	
				this.getSkiPosts();
			}
		} catch(err) {
			console.log(err, "<--- edit post error")
		}
	}

	handleLogout = async (e) => {

		e.preventDefault();

		const logoutResponse = await fetch(`${process.env.REACT_APP_BACKEND_ADDRESS}/users/logout`)

		//const parsedLogoutResponse = logoutResponse.json();

		if(logoutResponse.status === 200){
			console.log(logoutResponse, "<---- logout response")
			console.log(this.props)
		}
	}



	render(){
		return(
			<div>
				<div className='NavButtons'>
					<Button.Group>
					    <Button color="red" onClick={this.handleLogout}>
					    		Logout
					    </Button>
					    <Button color="green" href='../MyPostsContainer'>
						    	My Posts
					    </Button>
					    <Button color="blue" href='../SkiMapContainer'>
						    	Ski Map
					    </Button>
					 </Button.Group>
				</div> <br/>
				<div className="SkiPostContainer">
					<Grid columns={2} divided textAlign='center' style={{ height: '100%' }} verticalAlign='top' stackable>
				        <Grid.Row>
				            <Grid.Column>
					            <CreateSkiPost addSkiPost={this.addSkiPost} />
					        </Grid.Column>

					        <Grid.Column>
					            <SkiPostList skiPosts={this.state.skiPosts} deleteSkiPost={this.deleteSkiPost} openAndEdit={this.openAndEdit}/>
				            </Grid.Column>
				          <EditSkiPost open={this.state.showEditModal} skiPostToEdit={this.state.skiPostToEdit} handleEditChange={this.handleEditChange} closeAndEdit={this.closeAndEdit}/>
				        </Grid.Row>
			        </Grid>
				</div>

			</div>

		)
	}
}

export default SkiPostContainer; 
