import { useCallback, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { addMessageToChat } from '../../../redux/chats/actions'
import { ChatField } from './chatField'
import { ChatList } from './chatList'

export const Chats = () => {
	const chats = useSelector((state) => state.chatsPage.chats)
	const dispatch = useDispatch()
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
				dispatch(
					addMessageToChat(
						{ id, message, author },
						selectedChatIndex
					)
				)
			}
		},
		[dispatch, selectedChat, selectedChatIndex]
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
