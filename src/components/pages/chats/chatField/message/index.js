import { Avatar } from '@material-ui/core'
import './style.css'

export const Message = (props) => {
 const message = props.message
 return (
  <div className='message'>
   <Avatar
    alt='Remy Sharp'
    src={
     message.author === 'me'
      ? 'assets/img/ava1.jpg'
      : 'assets/img/ava2.webp'
    }
   />
   <p>
    <strong>{message.author}:</strong>{' '}
    <span>{message.message}</span>
   </p>
  </div>
 )
}
