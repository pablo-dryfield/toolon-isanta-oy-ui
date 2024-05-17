import React, { useState } from 'react';
import Container from '../../styles/Container';
import { Grid, Typography, Card, CardContent, Collapse, IconButton } from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';

const sectionStyle = {
  paddingTop: '70px',
  paddingBottom: '100px',
};

const cardStyle = {
  height: 'auto', // Let the height adjust based on content
  borderRadius: '16px', // Add border radius for rounded corners
  boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Add box shadow for depth
};

const mainTextStyle = {
  display: 'flex',
  alignItems: 'center', // Center vertically
  justifyContent: 'space-between', // Align items horizontally with space between
  paddingLeft: '20px', // Add left padding
  paddingTop: '20px',
  paddingBottom: '15px',
};

const boldTypographyStyle = {
  fontWeight: 'bold', // Set text font weight to bold
};

const hiddenTextStyle = {
  paddingLeft: '20px', // Add left padding to the hidden text
};

const Section3 = () => {
  const faqData = [
    {
      mainText: 'Do I contact maintenance services or the property manager?',
      hiddenText:
        'If you notice any faults in your apartment or in the shared facilities, please contact the maintenance service. In matters related to the housing company or financial issues regarding your apartment, please contact the service master. The service master will assist you in matters related to management and service charges, contracts and plans of the housing company, among other things.',
    },
    {
      mainText: 'I have just moved in. What should I notify and to whom?',
      hiddenText:
        'You need to submit a notification of moving to the Digital and Population Data Services Agency within one week of moving in. Also notify your move to us and the maintenance service here. Submitting a notification is very important. For example, if you leave your keys at home, the maintenance service can only open the door to a person registered as an occupant in the building.',
    },
    {
      mainText: 'Do you receive information automatically on any changes in the number of residents for the purpose of billing water rates?',
      hiddenText:
        'No, we don’t. If your housing company collects a water rate fee based on the number of occupants, we ask you to inform us of any changes in the number of occupants in your apartment. Having information on the correct number of occupants enables us to maintain the fees at a correct level in accordance with water consumption.',
    },
    {
      mainText: 'How can I book a sauna session or a parking space?',
      hiddenText:
        'You can send us your sauna or parking space request here.. We will let you know when the matter has been taken care of.',
    },
    {
      mainText: 'I would like to make renovations in my apartment. When, what and who should I notify of this?',
      hiddenText:
        'Before any renovation work can be initiated, the housing company must approve an alteration work notification. A notification on alteration work is made so that the housing company administration is aware of the alterations to be made in the building and to enable them to inspect any issues falling under the responsibility of the housing company during the refurbishment.\n\nA notification of any alteration work must be submitted in good time before the planned start of the work, so that there is sufficient time to process the notification and the start date is not delayed. You can fill in a notification on alteration work here. We will send you a notification without delay when your matter has been processed and you have permission to start your renovation work.\n\nPainting, wallpapering and installing a few cabinets do not require permission. More detailed instructions on renovating can be found here.',
    },
    {
      mainText: 'I have purchased an apartment. What information and documents should I provide to you?',
      hiddenText:
        'Congratulations on your new apartment! In order for us to include you in the register of occupants and as the owner of the apartment, we kindly ask you to send us the following documents:\n\nCopy of the deed of sale\nCopy of the share certificate with endorsements\nCopy of the transfer tax return stamped by the Tax Administration or equipped with an electronic acknowledgement of receipt',
    },
    {
      mainText: 'I would like to order a building manager’s certificate. How should I proceed?',
      hiddenText: 'You can order and pay for the required building manager’s certificate here.',
    },
    {
      mainText: 'Does the housing company fund the paid maintenance charges or my paid share of the debt?',
      hiddenText:
        'This matter will be decided upon housing-company-specifically in the General Meeting of the housing company. The information on funding can be found in the relevant year’s balance book, which is one of the documents included in the financial statements. You can also check this with us – we will be happy to help.',
    },
    {
      mainText: 'I have purchased an apartment. What information and documents should I provide to you?',
      hiddenText:
        'An owner’s share of debt can be paid off at a time agreed upon separately. One-off payments of the share of debt are usually possible twice a year, depending on the bank in question. Contact us, and we will determine when it is possible to pay off shares of the debt in your housing company.',
    },
  ];
  

  const [expanded, setExpanded] = useState<boolean[]>(Array(faqData.length).fill(false));

  const handleExpandClick = (index: number) => {
    setExpanded((prevExpanded) => {
      const newExpanded = [...prevExpanded];
      newExpanded[index] = !newExpanded[index];
      return newExpanded;
    });
  };

  return (
    <section style={sectionStyle}>
      <Container>
        <Grid container spacing={3} justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            <Typography variant="h4" align="center">
              Frequently asked questions
            </Typography>
          </Grid>
          {faqData.map((data, index) => (
            <Grid item xs={12} key={index}>
              <Card style={cardStyle}>
                <CardContent>
                  <div style={mainTextStyle}>
                    <Typography variant="body1" style={boldTypographyStyle}>
                      {data.mainText}
                    </Typography>
                    <IconButton
                      aria-expanded={expanded[index]}
                      onClick={() => handleExpandClick(index)}
                      aria-label="show more"
                    >
                      <ExpandMoreIcon />
                    </IconButton>
                  </div>
                  <Collapse in={expanded[index]} timeout="auto" unmountOnExit>
                    <Typography variant="body2" style={hiddenTextStyle}>
                      {data.hiddenText}
                    </Typography>
                  </Collapse>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default Section3;
