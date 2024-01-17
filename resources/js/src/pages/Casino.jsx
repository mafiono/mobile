import DesktopCasino from './desktop/DesktopCasino';
import MobileCasino from './mobile/MobileCasino';
import useMediaQuery from '@mui/material/useMediaQuery';

const Match = () => {
    const isMobile = useMediaQuery('(max-width:425px)');

    return (
        <>
            {
                isMobile ? <MobileCasino /> : <DesktopCasino />
            }
        </>
    )
};

export default Match;