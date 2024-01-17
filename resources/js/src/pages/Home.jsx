import DesktopHome from './desktop/DesktopHome';
import MobileHome from './mobile/MobileHome';
import useMediaQuery from '@mui/material/useMediaQuery';

const Home = () => {
    const isMobile = useMediaQuery('(max-width:425px)');

    return (
        <>
            {
                isMobile ? <MobileHome /> : <DesktopHome />
            }
        </>
    )
};

export default Home;