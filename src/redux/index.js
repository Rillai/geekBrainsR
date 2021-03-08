import { createStore, combineReducers } from 'redux'
import { ChatsReducer } from './chats/reducer'
import { ProfileReducer } from './profile/reducer'

export default createStore(
	combineReducers({
		chatsPage: ChatsReducer,
		profilePage: ProfileReducer,
	}),
	window.__REDUX_DEVTOOLS_EXTENSION__ &&
		window.__REDUX_DEVTOOLS_EXTENSION__()
)
