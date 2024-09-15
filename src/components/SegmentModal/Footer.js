import React from 'react'
import { Button, Modal } from 'react-bootstrap'

const Footer = ({ handleClose, handleSaveSegment, isDisabled }) => {
	console.log({isDisabled});
	
	return (
		<Modal.Footer style={{ justifyContent: 'flex-start' }}>
			<Button disabled={isDisabled} style={{background: 'rgb(65 180 148)', borderColor:'rgb(65 180 148)'}} onClick={handleSaveSegment} >
				Save the Segment
			</Button>
			<Button variant="outline-danger" onClick={handleClose}>
				Cancel
			</Button>
		</Modal.Footer>
	)
}

export default Footer