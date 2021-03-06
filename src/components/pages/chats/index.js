import { useCallback, useMemo } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { addMessageToChatThunk } from '../../../redux/chats/actions'
import { ChatField } from './chatField'
import { ChatList } from './chatList'

export const Chats = () => {
 const chats = useSelector((state) => state.chatsPage.chats)
 const dispatch = useDispatch()
 const params = useParams()

 const selectedChat = useMemo(
  () => chats.find((chat) => chat.id === params.chatId),
  [params, chats]
 )

 const addMessage = useCallback(
  (message, author) => {
   const id = `id+${selectedChat.messageList.length}`
   if (!!message) {
    dispatch(
     addMessageToChatThunk(selectedChat?.id, {
      id,
      message,
      author,
     })
    )
   }
  },
  [dispatch, selectedChat]
 )

 return (
  <>
   <ChatList chats={chats} chatId={params.chatId} />
   {selectedChat ? (
    <ChatField
     addMessage={addMessage}
     messages={selectedChat?.messageList}
    />
   ) : (
    <h2>Выберите чат.</h2>
   )}
  </>
 )
}
