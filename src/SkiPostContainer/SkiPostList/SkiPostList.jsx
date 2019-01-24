import React from 'react'
import { Card, Button } from 'semantic-ui-react'




const SkiPostList = (props) => {

	 const skiPost = props.skiPosts.map((post, i) => {
    return (
      <Card key={i}>
        <Card.Content>
	          <Card.Header>
	          	{skiPost.resortg}
	      	  </Card.Header>
	          <Card.Description>
	          	{skiPost.body}
	      	  </Card.Description>	
	    </Card.Content>
	    <Card.Content extra>
	          <Button color="green" onClick={props.openAndEdit.bind(null, skiPost)}>
	          	Edit post
	          </Button>
	          <Button color="red" onClick={props.deleteSkiPost.bind(null, skiPost.id)}>
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
        {skiPost}
      </Card.Group>
    </div>
    )


}


export default SkiPostList;