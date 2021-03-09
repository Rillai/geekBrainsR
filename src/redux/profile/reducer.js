const initialState = {
	profile: {
		name: 'Лёха',
		img: '/path/to/img',
		age: 13,
	},
}
const handlersInfo = {}

export const ProfileReducer = (
	state = initialState,
	action
) => {
	if (handlersInfo[action.type]) {
		return handlersInfo[action.type](state, action)
	}
	return state
}
