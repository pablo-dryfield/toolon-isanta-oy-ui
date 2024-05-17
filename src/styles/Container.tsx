import { styled } from '@mui/system';

const Container = styled('div')(({ theme }) => ({
    maxWidth: theme.breakpoints.values.lg,
    margin: '0 auto',
    padding: theme.spacing(0, 2),
}));

export default Container;
