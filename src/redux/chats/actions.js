import {
 ADD_MESSAGE_TO_CHAT,
 SET_CHATS_WITH_INCOMING_MESSAGE,
 CLEAR_HIGHLIGHTING,
} from './types'

export const addMessageToChat = (chatId, message) => ({
 type: ADD_MESSAGE_TO_CHAT,
 chatId,
 message,
})

export const setChatsWithIncomingMessage = (id) => ({
 type: SET_CHATS_WITH_INCOMING_MESSAGE,
 id,
})

export const clearHighlighting = () => ({
 type: CLEAR_HIGHLIGHTING,
})

export const addMessageToChatThunk = (chatId, message) => (
 dispatch
) => {
 dispatch(addMessageToChat(chatId, message))
 if (message.author === 'me') {
  setTimeout(() => {
   dispatch(
    addMessageToChat(chatId, {
     message: 'hello',
     author: 'bot',
    })
   )
   dispatch(setChatsWithIncomingMessage(chatId))
   setTimeout(() => {
    dispatch(clearHighlighting())
   }, 5000)
  }, 1000)
 }
}
