import {
 ADD_MESSAGE_TO_CHAT,
 SET_CHATS_WITH_INCOMING_MESSAGE,
 CLEAR_HIGHLIGHTING,
} from './types'

const initialState = {
 chatsWithIncomingMessage: [],
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
 [SET_CHATS_WITH_INCOMING_MESSAGE]: (state, action) => ({
  ...state,
  chatsWithIncomingMessage: [
   ...state.chatsWithIncomingMessage,
   action.id,
  ],
 }),
 [CLEAR_HIGHLIGHTING]: (state) => ({
  ...state,
  chatsWithIncomingMessage: [],
 }),
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
