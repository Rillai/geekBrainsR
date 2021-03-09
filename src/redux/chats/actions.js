import { ADD_MESSAGE_TO_CHAT } from './types'

export const addMessageToChat = (chatId, message) => ({
	type: ADD_MESSAGE_TO_CHAT,
	chatId,
	message,
})
