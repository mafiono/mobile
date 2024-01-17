import DesktopLive from './desktop/DesktopLive';
import MobileLive from './mobile/MobileLive';
import useMediaQuery from '@mui/material/useMediaQuery';

const Live = () => {
    const isMobile = useMediaQuery('(max-width:425px)');

    return (
        <>
            {
                isMobile ? <MobileLive /> : <DesktopLive />
            }
        </>
    )
};

export default Live;