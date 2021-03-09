import { ADD_MESSAGE_TO_CHAT } from './types'

export const addMessageToChat = (
	message,
	selectedChatIndex
) => ({
	type: ADD_MESSAGE_TO_CHAT,
	message,
	selectedChatIndex,
})
