import React from 'react';
import Container from '../../styles/Container';
import backgroundImage from '../../imgs/pexels-charles-parker-5847346.jpg'; // Import the image file
import { Grid } from '@mui/material'; // Import Grid from MUI

const sectionStyle: React.CSSProperties = {
  position: 'relative',
  background: `url(${backgroundImage})`, // Set the background image
  backgroundSize: 'cover', // Cover the entire section with the image
  backgroundPosition: 'center', // Center the image
  height: '50vh', // Set the height to 50% of the viewport height
  minHeight: '300px', // Set a minimum height of 300px
  backgroundColor: '#fafafa'
};

const textStyle: React.CSSProperties = {
  color: '#fff', // Set text color to white
  fontWeight: 'bold', // Set text font weight to bold
  textAlign: 'left', // Align text to the left
  fontSize: '2.5rem', // Increase font size
  marginLeft: '-100px', // Move text to the left
};

const Section1 = () => {
  return (
    <section style={sectionStyle}>
      <Container>
        <Grid
          container
          justifyContent="flex-start"
          alignItems="flex-start"
          style={{ height: '100%', paddingTop: '80px' }} // Add padding top
        >
          <Grid item>
            <div>
              <h1 style={textStyle}>Töölön Isäntä Oy: Esimerkki</h1>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Section1;
