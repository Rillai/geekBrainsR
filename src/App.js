import './App.css'
import { Container } from '@material-ui/core'
import { Header } from './components/header'
import { Route, Switch } from 'react-router'
import { Chats } from './components/pages/chats'
import { Profile } from './components/pages/profile'
import { Home } from './components/pages/home'

const App = () => {
 return (
  <div className='app'>
   <Header />
   <Container>
    <div className='app-content'>
     <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/chats/:chatId?' component={Chats} />
      <Route path='/profile' component={Profile} />
     </Switch>
    </div>
   </Container>
  </div>
 )
}

export default App
