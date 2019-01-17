import React from 'react';
import { Modal, Form, Button, Label} from 'semantic-ui-react'




const EditSkiPost = (props) => {

return (

	<Modal open={props.open}>
		<Modal.Content>
			<Form onSubmit={props.closeAndEdit}>
				<Label>
					Edit Post:
				</Label>
				<Form.Input type='text' name='resort' value={props.skiPostToEdit.resort} onChange={props.handleEditChange} />
				<Label>
					Edit Body:
				</Label>
				<Form.Input type='text' name='body' value={props.skiPostToEdit.body} onChange={props.handleEditChange} />

				<Modal.Actions>
					<Button color='green' type='submit'>
						Edit Post
					</Button>
				</Modal.Actions>
			</Form>
		</Modal.Content>
	</Modal>
	)


}



export default EditSkiPost;
