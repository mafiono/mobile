import Header from '../components/Header';
import Footer from '../components/Footer';

import Wrapper from './Wrapper';

import Container from '@mui/material/Container';

const MainLayout = () => (
    <Container sx={{ maxWidth: { xl: '1920px', lg: '1920px' } }}>
        <Header />
        <Wrapper />
        <Footer />
    </Container>
);

export default MainLayout;
