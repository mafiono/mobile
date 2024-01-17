// import Container from '@mui/material/Container';
// import { LayoutWrap } from '../components/Base';
// import BodyHeader from '../components/BodyHeader';
import { Outlet } from 'react-router-dom';

const Wrapper = () => (
    // <LayoutWrap>
    //     <Container maxWidth='lg' sx={{ px: '0 !important' }}>
    //         <BodyHeader />
            <Outlet />
    //     </Container>
    // </LayoutWrap>
);

export default Wrapper;
