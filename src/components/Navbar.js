import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import logo from '../assets/logo.PNG'
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import { Badge } from '@mui/material';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import {auth} from '../firebase';
import { signOut } from 'firebase/auth';
import {useNavigate} from 'react-router-dom'
import { actionTypes } from '../reducer';

export default function Navbar() {
  const [{basket, user},dispatch]=useStateValue();
  const navigate=useNavigate();
  const handleAuth =()=>{
    if(user){
      signOut(auth);
      dispatch({
        type: actionTypes.EMPTY_BASKET,
        user: null,
        basket: [],
      })
      navigate('/');
    }
  }
  return (
    <Box sx={{ flexGrow: 1, marginBottom:"3rem"}}>
      <AppBar sx={{position: "static", backgroundColor: "whitesmoke", boxShadow:"none"}}>
        <Toolbar>
          <Link to="/">
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <img style={{height: '4rem',marginRight: "10px"}} src={logo} />
              </IconButton>
          </Link>
        
           <div style={{flexGrow: 1}}/> 
          <Typography variant="h6" color="textPrimary">
            Hello {user ? user.email : "Guest"}
          </Typography>
      
          <div  style={{marginLeft: "2rem"}}>
          <Link to="signin">
            <Button variant="outlined" onClick={handleAuth}>
              <strong>{user ? "Sign out" : "Sign In"}</strong></Button>
            </Link>
                </div>
        
       
              <Link to="checkout-page">
                <IconButton>
                    <Badge badgeContent={basket?.length} color="secondary">
                      <ShoppingCart color="primary"/>
                    </Badge>
              
                  </IconButton>
                
              </Link>
              
        </Toolbar>
        
      </AppBar>
    </Box>
  );
}
