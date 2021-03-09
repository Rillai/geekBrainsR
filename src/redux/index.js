import {
	createStore,
	combineReducers,
	compose,
	applyMiddleware,
} from 'redux'
import thunk from 'redux-thunk'
import { ChatsReducer } from './chats/reducer'
import { ProfileReducer } from './profile/reducer'

const composeEnhancers =
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
export default createStore(
	combineReducers({
		chatsPage: ChatsReducer,
		profilePage: ProfileReducer,
	}),
	composeEnhancers(applyMiddleware(thunk))
)
