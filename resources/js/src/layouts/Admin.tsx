import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';

import Header from '../components/Header';
import Footer from '../components/Footer';
import { BoxBorder, LayoutWrap } from '../components/Base';
import { AdminManageList, ManageHead } from '../components/Part';

const AdminLayout = () => {
    const [title, setTitle] = useState<{ name: string, idx: number }>();
    return (
        <Stack>
            <Header />
            <LayoutWrap>
                <Container maxWidth='lg' sx={{ px: '0 !important' }}>
                    <Stack>
                        <AdminManageList setTitle={setTitle} />
                    </Stack>
                    <BoxBorder >
                        <ManageHead title={title?.name} idx={title?.idx} />
                        <Outlet />
                    </BoxBorder>
                </Container>
            </LayoutWrap>
            <Footer />
        </Stack>
    );
}
export default AdminLayout;
