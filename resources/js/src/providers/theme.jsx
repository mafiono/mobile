import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import useLocalStorage from '../hooks/useLocalStorage';
import { ThemeContext, initialState } from '../contexts/theme';
import '../assets/css/index.scss';


import { One, Two } from '../config/theme';

// ** Declare Theme Provider
const MuiThemeProvider = ({ children }) => {
    
    const [modeConfig, setModeConfig] = useLocalStorage('theme-config', {
        ...initialState
    });
    
    const setMode = (mode) => {
        setModeConfig((prevState) => ({
            ...prevState,
            mode
        }));
    };
    let theme;
    if(modeConfig.mode === 'One') {
        theme = createTheme(One);
    } else if(modeConfig.mode === 'Two') {
        theme = createTheme(Two);
    }
    
    return (
        <ThemeContext.Provider value={{ ...modeConfig, setMode }}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </ThemeContext.Provider>
    );
};

export default MuiThemeProvider;
