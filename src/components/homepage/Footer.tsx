import React from 'react';
import { Typography, Grid, Icon } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#fafafa', paddingTop: '50px', paddingBottom: '50px', paddingLeft: '120px', paddingRight: '120px' }}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item>
          <Typography variant="body2">&copy; {new Date().getFullYear()} Töölön Isäntä Oy. All rights reserved.</Typography>
        </Grid>
        <Grid item>
          <Typography variant="body2" style={{ textDecoration: 'underline' }}>Privacy statement</Typography>
        </Grid>
        <Grid item>
          <Icon component={HomeIcon} style={{ fontSize: 50 }} /> {/* Adjust the size as needed */}
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
