import {
	AppBar,
	Container,
	IconButton,
	Toolbar,
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'
import './style.css'

export const Header = () => {
	return (
		<AppBar position='static'>
			<Container>
				<Toolbar>
					<IconButton
						edge='start'
						color='inherit'
						aria-label='menu'>
						<MenuIcon />
					</IconButton>
					<Link to='/' className='nav_link'>
						Главная
					</Link>
					<Link to='/chats' className='nav_link'>
						Чаты
					</Link>
					<Link to='/profile' className='nav_link'>
						Профиль
					</Link>
				</Toolbar>
			</Container>
		</AppBar>
	)
}
