import React from 'react'
import { Card, Button } from 'semantic-ui-react'




const SkiPostList = (props) => {

	 const skiPosts = props.skiPosts.map((post, i) => {
    return (
      <Card key={i}>
        <Card.Content>
	          <Card.Header>
	          	{post.resort}
	      	  </Card.Header>
	          <Card.Description>
	          	{post.body}
	      	  </Card.Description>	
	    </Card.Content>
	    <Card.Content extra>
	          <Button color="green" onClick={props.openAndEdit.bind(null, post)}>
	          	Edit post
	          </Button>
	          <Button color="red" onClick={props.deleteSkiPost.bind(null, post.id)}>
	          	Delete Post
	          </Button>
        </Card.Content>
      </Card>
      )
  })

  return (
    <div>
      <h3>Resort Updates:</h3>
      <Card.Group className="centered">
        {skiPosts}
      </Card.Group>
    </div>
    )


}


export default SkiPostList;