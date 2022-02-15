//component imports
import {AppBar, Toolbar} from '@mui/material';
import {makeStyles} from '@mui/styles';
import { NavLink } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';


const useStyles = makeStyles({
    navbar: {
        background: '#fff',
        justifyContent: 'center',
        gap: '1em',
        display: 'flex',
        fontSize: 'clamp(1em, 5vw,1.5em)',
        '& > *': {
            color: '#000',
            textDecoration: 'none',
        }
    },
    container: {
        
    }
})


const Header = () => {
    const classes = new useStyles();
    // const history = useNavigate();
    // const { oktaAuth, authState } = useOktaAuth();

    // if(authState && authState.isPending) return null;

    // const login = async () => history('/login');
    // const logout = async () => history.oktaAuth.signOut();

    // const button = authState.isAuthenticated ?
    // <button onClick={logout}>Logout</button> :
    // <button onClick={login}>Login</button>;

  return (
      <>
        <AppBar className={classes.container} position="static">
            <Toolbar className={classes.navbar}>
                <NavLink to='/ghumakkad-blog/' component = 'Link'>Home</NavLink>
                <NavLink to='/ghumakkad-blog/about' component = 'Link'>About</NavLink>
                <NavLink to='/ghumakkad-blog/contact' component = 'Link'>Contact</NavLink>
                <NavLink to='/ghumakkad-blog/login' component = 'Link'>Login</NavLink>
            </Toolbar>
        </AppBar>
      </>
  );
}

export default Header;