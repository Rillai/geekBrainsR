import './App.css'
import { useCallback, useEffect, useState } from 'react'
import { Message } from './components/message'
import { NessageField } from './components/messageField'
import { usePrev } from './hooks/usePrev'

const App = () => {
	const [messages, setMessages] = useState([
		{ id: 0, message: 'dobri den', author: 'me' },
		{ id: 1, message: 'Privet', author: 'me' },
		{ id: 2, message: 'React curse', author: 'me' },
	])

	const prevMessage = usePrev(messages)
	const addMessage = useCallback(
		(message, author) => {
			const id = messages[messages.length - 1].id + 1
			if (!!message) {
				setMessages([
					...messages,
					{ id: id, message: message, author: author },
				])
			}
		},
		[messages]
	)

	useEffect(() => {
		if (
			prevMessage?.length < messages.length &&
			messages[messages.length - 1]?.author !== 'Robot'
		) {
			addMessage('Не пиши сюда больше', 'Robot')
		}
	}, [messages, addMessage, prevMessage])

	return (
		<div className='App'>
			{messages.map((message) => (
				<Message key={messages.id} message={message} />
			))}
			<NessageField addMessage={addMessage} />
		</div>
	)
}

export default App
