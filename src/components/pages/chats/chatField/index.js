import { useCallback } from 'react'
import { ChatTextField } from './chatTextField'
import { Message } from './message'

export const ChatField = (props) => {
 const renderMessage = useCallback((message, i) => {
  return <Message key={i} message={message} />
 }, [])

 return (
  <div>
   {props.messages?.map(renderMessage)}
   <ChatTextField addMessage={props.addMessage} />
  </div>
 )
}
