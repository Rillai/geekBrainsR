import './App.css';
import { useEffect, useState } from 'react';
import { Message } from './components/message';
import { NessageField } from './components/messageField';

const App = () => {
  const [messages, setMessages] = useState([{ id: 0, message: 'dobri den', author: 'me' }, { id: 1, message: 'Privet', author: 'me' }, { id: 2, message: 'React curse', author: 'me' }])
  useEffect(() => {
    if (messages[messages.length - 1].author == 'me') {
      addMessage('Не пиши сюда больше', 'Robot')
    }
  }, [messages])
  const addMessage = (message, author) => {
    const id = messages[messages.length - 1].id+1
    if (!!message) {
      setMessages([...messages, { id: id, message: message, author: author }])
    }
  }
  return (
    <div className="App">
      {messages.map(message => <Message key={messages.id} message={message} />)}
      <NessageField addMessage={addMessage} />
    </div>
  );
}

export default App;