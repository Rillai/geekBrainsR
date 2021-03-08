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
	// [SET_USER_INFO]: (state, action) => ({ ...state, userInfo: action.userInfo, }),
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
