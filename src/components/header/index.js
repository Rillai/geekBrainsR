import { AppBar, Container, IconButton, Toolbar, Typography } from "@material-ui/core"
import MenuIcon from '@material-ui/icons/Menu';

export const Header = () => {

    return (
        <AppBar position="static">
            <Container>
                <Toolbar>
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" >
                        News
                </Typography>
                </Toolbar>
            </Container>
        </AppBar>)
}