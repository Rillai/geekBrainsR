export const Message = (props) => {
    const message = props.message
    return <p key={props.key}><strong>{message.author}:</strong> {message.message}</p>
}