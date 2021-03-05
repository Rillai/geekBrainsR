import { Button, TextField } from '@material-ui/core'
import SendIcon from '@material-ui/icons/Send'
import { useState } from 'react'
import './style.css'

export const ChatTextField = (props) => {
	const [text, setstate] = useState()
	const addMessage = (e) => {
		e.preventDefault()
		props.addMessage(text, 'me')
		setstate('')
	}
	return (
		<form className='chatField'>
			<TextField
				id='standard-basic'
				label='Message'
				value={text}
				onChange={(e) => setstate(e.target.value)}
			/>
			<br />
			<div className='chatField_bottom'>
				<Button
					type='submit'
					variant='outlined'
					color='primary'
					onClick={addMessage}
					endIcon={<SendIcon />}>
					Send
				</Button>
			</div>
		</form>
	)
}
