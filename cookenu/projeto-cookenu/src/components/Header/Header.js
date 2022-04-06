import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { StyledToolbar } from './styled';
import { goToLogin, goToRecipesList } from '../../routes/coordinator';
import { useHistory } from 'react-router';


const Header = ({buttonText, setButtonText}) => {
    const history = useHistory()
    const token = localStorage.getItem("token")
    
  
    const logout = () => {
      localStorage.removeItem("token")
    }

    const buttonAction = () => {
      if (token){
        logout()
        setButtonText("Login")
        goToLogin(history)
      }else {
        goToLogin(history)
      }
    }

    return (
      <AppBar position="static">
        <StyledToolbar>
          <Button onClick={() => goToRecipesList(history)} color="inherit">Cookenu</Button>
          <Button onClick={() => buttonAction()} color="inherit">{buttonText}</Button>
        </StyledToolbar>
      </AppBar>
  );
}

export default Header