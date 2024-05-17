import React from 'react';
import { AppBar, Toolbar, Switch, IconButton, Button, Menu, MenuItem, Box, Stack, Typography, Grid, styled } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const UnderlineButton = styled(Button)({
  position: 'relative',
  overflow: 'hidden',
  width: '150px', // Adjust the width as needed
  padding: '12px', // Add padding as needed
  margin: '0 10px', // Add margin to create space between buttons
  '&::before': {
    content: '""',
    position: 'absolute',
    width: 0,
    height: '2px',
    bottom: 0,
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#333',
    transition: 'width 0.15s ease',
  },
  '&:hover::before': {
    width: '100%',
    transition: 'width 0.15s ease',
  },
  '&:hover': {
    backgroundColor: 'transparent', // Remove background color change on hover
  }
});

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleButtonClick = () => {

  };

  return (
    <Toolbar>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Grid>
        <Grid item>
          <Box display="flex" alignItems="center">
            <UnderlineButton
              color="inherit"
              onClick={handleButtonClick}
              style={{ fontWeight: 'bold', textDecoration: 'none' }}
            >
              Page 1
            </UnderlineButton>
            <UnderlineButton
              color="inherit"
              onClick={handleButtonClick}
              style={{ fontWeight: 'bold', textDecoration: 'none' }}
            >
              Page 2
            </UnderlineButton>
            <UnderlineButton
              color="inherit"
              onClick={handleButtonClick}
              style={{ fontWeight: 'bold', textDecoration: 'none' }}
            >
              Page 3
            </UnderlineButton>
            <UnderlineButton
              color="inherit"
              onClick={handleButtonClick}
              style={{ fontWeight: 'bold', textDecoration: 'none' }}
            >
              Page 4
            </UnderlineButton>
            <UnderlineButton
              color="inherit"
              onClick={handleButtonClick}
              style={{ fontWeight: 'bold', textDecoration: 'none' }}
            >
              Page 5
            </UnderlineButton>
            <UnderlineButton
              color="inherit"
              onClick={handleButtonClick}
              style={{ fontWeight: 'bold', textDecoration: 'none' }}
            >
              Page 6
            </UnderlineButton>
          </Box>
        </Grid>
        <Grid item>
          <Stack direction="row" alignItems="center">
            <Typography style={{ fontWeight: 'bold' }}>EN</Typography>
            <Switch defaultChecked color="default" />
            <Typography style={{ fontWeight: 'bold' }}>FI</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Toolbar>
  );
};

export default Navbar;
