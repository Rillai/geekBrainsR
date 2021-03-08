import './App.css'
import { Container } from '@material-ui/core'
import { Header } from './components/header'
import { Route, Switch } from 'react-router'
import { Chats } from './components/pages/chats'

const App = () => {
	return (
		<div className='app'>
			<Header />
			<Container>
				<div className='app-content'>
					<Switch>
						{/* <Route path='/' component={Chat} /> */}
						<Route path='/chats/:chatId?' component={Chats} />
						{/* <Route path='/profile' component={Chat} /> */}
					</Switch>
				</div>
			</Container>
		</div>
	)
}

export default App;