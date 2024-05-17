import { AppBar } from '@mui/material';
import Navbar from './Navbar';

const Header = () => {
    return (
        <AppBar position="static" style={{ backgroundColor: '#fafafa', color: "black" }} elevation={0}>
            <Navbar />
        </AppBar>
    );
};

export default Header;
