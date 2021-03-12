import {
	createStore,
	combineReducers,
	compose,
	applyMiddleware,
} from 'redux'
import persistReducer from 'redux-persist/es/persistReducer'
import persistStore from 'redux-persist/es/persistStore'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import { ChatsReducer } from './chats/reducer'
import { ProfileReducer } from './profile/reducer'

const persistConfig = {
	key: 'root',
	storage,
}

const persistedReducer = persistReducer(
	persistConfig,
	combineReducers({
		chatsPage: ChatsReducer,
		profilePage: ProfileReducer,
	})
)
const composeEnhancers =
	window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
	persistedReducer,
	composeEnhancers(applyMiddleware(thunk))
)
export const persistor = persistStore(store)
