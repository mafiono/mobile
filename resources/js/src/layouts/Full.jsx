import Container from '@mui/material/Container';
import { FullLayoutWrap } from '../components/Base';
import { Outlet } from 'react-router-dom';

const FullLayout = () => (
    <FullLayoutWrap>
        <Container maxWidth='lg' sx={{
            backgroundImage: 'radial-gradient(#ffffffbf, transparent, transparent)'
        }}>
            <Outlet />
        </Container>
    </FullLayoutWrap>
);

export default FullLayout;
