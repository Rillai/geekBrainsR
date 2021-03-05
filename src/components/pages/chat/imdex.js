import { useCallback, useMemo, useState } from 'react'
import { useParams } from 'react-router'
import { ChatField } from './chatField'
import { ChatList } from './chatList'

export const Chat = () => {
	const [chats, setChats] = useState([
		{
			id: 'id1',
			name: 'Chat 1',
			messageList: [
				{ id: 0, message: 'Message 1', author: 'me' },
				{ id: 1, message: 'Privet', author: 'me' },
				{ id: 2, message: 'React curse', author: 'me' },
			],
		},
		{
			id: 'id2',
			name: 'Chat 1',
			messageList: [
				{ id: 0, message: 'Message 2', author: 'me' },
				{ id: 1, message: 'ЛАДНО', author: 'me' },
			],
		},
		{
			id: 'id3',
			name: 'Chat 1',
			messageList: [
				{ id: 0, message: 'Message 3', author: 'me' },
			],
		},
	])
	const params = useParams()

	const selectedChat = useMemo(
		() => chats.find((chat) => chat.id === params.chatId),
		[params, chats]
	)

	const selectedChatIndex = useMemo(
		() =>
			chats.findIndex((chat) => chat.id === params.chatId),
		[params, chats]
	)

	const addMessage = useCallback(
		(message, author) => {
			const id = selectedChat.messageList.length
			if (!!message) {
				const newChats = [...chats]
				newChats[selectedChatIndex] = {
					...selectedChat,
					messageList: [
						...selectedChat.messageList,
						{ id, message, author },
					],
				}
				setChats(newChats)
			}
		},
		[chats, selectedChat, selectedChatIndex]
	)
	return (
		<>
			<ChatList chats={chats} chatId={params.chatId} />
			{selectedChat ? (
				<ChatField
					addMessage={addMessage}
					messages={selectedChat?.messageList}
				/>
			) : (
				<h2>Выберите чат.</h2>
			)}
		</>
	)
}
