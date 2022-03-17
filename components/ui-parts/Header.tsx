import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

const Header = ({ home }) => {
  return (
    <Box sx={{flexGrow: 1,}}>
      <AppBar position="static" color="secondary">
        { home ? (
        <Toolbar>
         <img 
          src="/logo/setsuna-logo-typo.svg"
          />
          <Box sx={{ display: 'flex'}}>
            <img src='/icons/twitter-logo.svg'/> 
            <img src='/icons/contact-icon.svg'/> 
          </Box>
        </Toolbar>
        ) : (
          <Toolbar>
          <img 
           src="/logo/setsuna-logo-typo.svg"
           />
           <Box sx={{ display: 'flex'}}>
             <img src='/icons/twitter-logo.svg'/> 
             <img src='/icons/contact-icon.svg'/> 
           </Box>
         </Toolbar>
        )}

      </AppBar>
    </Box>
  );
}


export default Header