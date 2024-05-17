import React from 'react';
import Container from '../../styles/Container';
import { Grid, Typography, Card, CardContent, Box } from '@mui/material';
import HelpIcon from '@mui/icons-material/Help';
import NotificationsIcon from '@mui/icons-material/Notifications';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import BuildIcon from '@mui/icons-material/Build';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';

const sectionStyle = {
  paddingTop: '100px',
  paddingBottom: '100px',
  backgroundColor: '#fafafa',
};

const cardStyle = {
  height: '200px', // Adjust card height
  borderRadius: '16px', // Add border radius for rounded corners
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Add box shadow for depth
};

const cardContentStyle = {
  height: '87%',
  display: 'flex',
  alignItems: 'center',
};

const iconStyle = {
  marginLeft: '40px', // Add more space to the left
  marginRight: '40px', // Add more space to the right
};

const Section2 = () => {
  const cardData = [
    {
      icon: <HelpIcon fontSize="large" />,
      title: 'Frequently asked questions',
      description: 'Find answers to the topics you are wondering about. Read more >',
    },
    {
      icon: <NotificationsIcon fontSize="large" />,
      title: 'Order & notify',
      description: 'Handle your orders and notifications online in a practical way. Yes please! >',
    },
    {
      icon: <PeopleAltIcon fontSize="large" />,
      title: 'Pages for residents',
      description: 'All the data on your housing company in one location. Go to the pages for residents >',
    },
    {
      icon: <BuildIcon fontSize="large" />,
      title: 'Division of maintenance responsibilities',
      description: 'How are the maintenance responsibilities divided between the housing company and the owner? Read more >',
    },
    {
      icon: <ContactPhoneIcon fontSize="large" />,
      title: 'Contact us',
      description: 'We will be happy to help. Select the method of contact best suited for you and contact us >',
    },
  ];

  return (
    <section style={sectionStyle}>
      <Container>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h3" align="center">How can we help you?</Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1" align="center" style={{ width: '75%', margin: '0 auto' }}>
              Our goal as a new kind of real estate management agency is that you will not even be aware of us and our work, meaning you can focus on living your life to the fullest in the home you enjoy. In a healthy environment.
            </Typography>
          </Grid>
          <Grid item container spacing={3}>
            {cardData.map((data, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Card style={cardStyle}>
                  <CardContent style={cardContentStyle}>
                    <Box sx={iconStyle}>{data.icon}</Box>
                    <Box>
                      <Typography variant="h6">{data.title}</Typography>
                      <Typography variant="body2">{data.description}</Typography>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Section2;
