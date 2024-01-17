import DesktopMatch from './desktop/DesktopMatch';
import MobileMatch from './mobile/MobileMatch';
import useMediaQuery from '@mui/material/useMediaQuery';

const Match = () => {
    const isMobile = useMediaQuery('(max-width:425px)');

    return (
        <>
            {
                isMobile ? <MobileMatch /> : <DesktopMatch />
            }
        </>
    )
};

export default Match;