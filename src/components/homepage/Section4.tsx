import React from 'react';
import Container from '../../styles/Container';
import { Grid, Typography, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

const Section4 = () => {
  return (
    <section style={{ backgroundColor: '#fafafa', paddingTop: '50px', paddingBottom: '50px' }}>
      <Container>
        <Grid container spacing={3}>
          {/* Our company */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="subtitle1" gutterBottom style={{ fontWeight: 'bold' }}>
              Our company
            </Typography>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li style={{ marginBottom: '8px' }}>About us</li>
              <li style={{ marginBottom: '8px' }}>Request a quote</li>
              <li style={{ marginBottom: '8px' }}>Contact us</li>
              <li style={{ marginBottom: '8px' }}>Newsfeed</li>
              <li>Careers</li>
            </ul>
          </Grid>
          {/* Order & notify */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="subtitle1" gutterBottom style={{ fontWeight: 'bold' }}>
              Order & notify
            </Typography>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li style={{ marginBottom: '8px' }}>Fault report</li>
              <li style={{ marginBottom: '8px' }}>Building manager’s certificate</li>
              <li style={{ marginBottom: '8px' }}>Notification of a move</li>
              <li>Provide feedback</li>
            </ul>
          </Grid>
          {/* Good to know */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="subtitle1" gutterBottom style={{ fontWeight: 'bold' }}>
              Good to know
            </Typography>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              <li style={{ marginBottom: '8px' }}>Frequently asked questions</li>
              <li style={{ marginBottom: '8px' }}>Division of maintenance responsibilities</li>
              <li>Notification of a renovation</li>
            </ul>
          </Grid>
          {/* Empty column */}
          <Grid item xs={12} sm={6} md={2}></Grid>
          {/* Social Media */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="subtitle1" gutterBottom style={{ fontWeight: 'bold' }}>
              Social Media
            </Typography>
            <div style={{ display: 'flex', marginTop: '8px' }}>
              <IconButton>
                <LinkedInIcon fontSize="large" />
              </IconButton>
              <IconButton>
                <FacebookIcon fontSize="large" />
              </IconButton>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Section4;
