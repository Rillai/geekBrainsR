import './App.css';
import { useEffect, useState } from 'react';
import { ChatField } from './components/chatField';
import { Container } from '@material-ui/core';
import { Header } from './components/header';
import { ChatList } from './components/chatList';
import { Message } from './components/message';

const App = () => {
  const [messages, setMessages] = useState([{ id: 0, message: 'dobri den', author: 'me' }, { id: 1, message: 'Privet', author: 'me' }, { id: 2, message: 'React curse', author: 'me' }])
  useEffect(() => {
    if (messages[messages.length - 1].author == 'me') {
      addMessage('Не пиши сюда больше', 'Robot')
    }
  }, [messages])
  const addMessage = (message, author) => {
    const id = messages[messages.length - 1].id + 1
    if (!!message) {
      setMessages([...messages, { id: id, message: message, author: author }])
    }
  }
  return (
    <div className="app">
      <Header />
      <Container>
        <div className='app-content'>
          <ChatList />
          <div>
            {messages.map(message => <Message key={message.id} message={message} />)}
            <ChatField addMessage={addMessage} />
          </div>
        </div>
      </Container>

    </div>
  );
}

export default App;