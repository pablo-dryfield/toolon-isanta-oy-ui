import Header from './components/homepage/Header';
import Footer from './components/homepage/Footer';
import Section1 from './components/homepage/Section1';
import Section2 from './components/homepage/Section2';
import Section3 from './components/homepage/Section3';
import Section4 from './components/homepage/Section4';
import { Divider, Grid } from '@mui/material';

const App = () => {
  return (
    <Grid direction="column" style={{ minHeight: '100vh' }}>
      {/* Header */}
      <Grid item>
        <Header />
      </Grid>

      {/* Main Content */}
      <Grid item direction="column">
        <Grid item xs={12} md={6}>
          <Section1 />
        </Grid>
        <Grid item xs={12} md={6}>
          <Section2 />
        </Grid>
        <Grid item xs={12} md={6}>
          <Section3 />
        </Grid>
        <Grid item xs={12} md={6}>
          <Section4 />
        </Grid>
      </Grid>
      <Divider />
      {/* Footer */}
      <Grid item>
        <Footer />
      </Grid>
    </Grid>
  );
};

export default App;