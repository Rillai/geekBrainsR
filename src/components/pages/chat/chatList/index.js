import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import Avatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import { Link } from 'react-router-dom'

export const ChatList = (props) => {
	const useStyles = makeStyles((theme) => ({
		root: {
			width: '100%',
			maxWidth: '36ch',
		},
	}))
	const classes = useStyles()

	return (
		<List className={classes.root}>
			{props.chats.map((chat, i) => {
				return (
					<Link to={`/chats/${chat.id}`}>
						<ListItem key={i} alignItems='flex-start'>
							<ListItemAvatar>
								<Avatar
									alt='Remy Sharp'
									src='/static/images/avatar/1.jpg'
								/>
							</ListItemAvatar>
							<ListItemText
								primary={chat.name}
								secondary={
									<>
										<Typography
											component='span'
											variant='body2'
											className={classes.inline}
											color='textPrimary'>
											Ali Connors
										</Typography>
										{
											" — I'll be in your neighborhood doing errands this…"
										}
									</>
								}
							/>
						</ListItem>
					</Link>
				)
			})}
		</List>
	)
}
