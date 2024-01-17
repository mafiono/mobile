import DesktopEvent from './desktop/DesktopEvent';
import MobileEvent from './mobile/MobileEvent';
import useMediaQuery from '@mui/material/useMediaQuery';

const Event = () => {
    const isMobile = useMediaQuery('(max-width:425px)');

    return (
        <>
            {
                isMobile ? <MobileEvent /> : <DesktopEvent />
            }
        </>
    )
};

export default Event;