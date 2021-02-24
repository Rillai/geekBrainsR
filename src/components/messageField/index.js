import { useState } from "react"

export const NessageField = (props) => {
    const [text, setstate] = useState()
    const addMessage = () => {
        props.addMessage(text, 'me')
        setstate('')
    }
    return <>
        <textarea value={text} onChange={(e) => setstate(e.target.value)} />
        <br />
        <button onClick={() => addMessage()}>Add Mesage</button>
    </>
}