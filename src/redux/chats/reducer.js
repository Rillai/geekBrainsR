import { ADD_MESSAGE_TO_CHAT } from './types'

const initialState = {
	chats: [
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
	],
}
const handlersActions = {
	[ADD_MESSAGE_TO_CHAT]: (state, action) => ({
		...state,
		chats: state.chats.map((chat) => {
			if (chat.id === action.chatId) {
				return {
					...chat,
					messageList: [...chat.messageList, action.message],
				}
			}
			return chat
		}),
	}),
	// [SET_CARD_INFO]: (state, action) => ({ ...state, cardInfo: action.cardInfo }),
	// [SET_USER_ADRESS]: (state, action) => ({ ...state, userAdress: action.userAdress }),
}

export const ChatsReducer = (
	state = initialState,
	action
) => {
	if (handlersActions[action.type]) {
		return handlersActions[action.type](state, action)
	}
	return state
}
