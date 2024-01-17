import { ThemeOptions } from '@mui/material';

const overrides = {
    MuiAvatar: {
        // styleOverrides: {
        //     root: {
        //         borderRadius: 6
        //     }
        // }
    },
    MuiIconButton: {
        // styleOverrides: {
        //     root: {
        //         borderRadius: 6,
        //         '&:hover': {
        //             boxShadow: 'unset',
        //             backgroundColor: 'transparent'
        //         }
        //     }
        // }
    },
    MuiMenuItem: {
        // styleOverrides: {
        //     root: {
        //         '&.Mui-selected': {
        //             backgroundColor: '#4584ff'
        //         },
        //         '&:hover': {
        //             backgroundColor: '#54aeff52'
        //         }
        //     }
        // }
    },
    MuiListItemButton: {
        // styleOverrides: {
        //     root: {
        //         borderRadius: 0,
        //         '&:hover': {
        //             backgroundColor: '#54aeff52'
        //         }
        //     }
        // }
    },
    MuiButtonBase: {
        // defaultProps: {
        //     disableRipple: true
        // },
        // styleOverrides: {
        //     root: {
        //         '&:hover': {
        //             boxShadow: 'unset'
        //         }
        //     }
        // }
    },
    MuiButton: {
        // styleOverrides: {
        //     root: {
        //         boxShadow: 'unset',
        //         '&:hover': {
        //             boxShadow: 'unset',
        //             backgroundColor: '#286EF6'
        //         }
        //     }
        // }
    }
};

export const One = {
    palette: {
        mode: 'dark',
        // primary: {
            // main: '#cf2424',
            // main: '#6a6b70'
            // light: '#212121'
        // },
        // success: {
        //     main: '#46bf00',
        //     light: '#6dd92e',
        //     dark: '#337c09'
        // },
        // error : {
        //     light: '#ff4343',
        //     main: '#ff2c16',
        //     dark: '#c91300',
        // },
        // secondary: {
            // main: '#6a6b70',
        //     light: '#ffffff', //inputColor
            // dark: '#191c22'
        // },
        // info: {
            // main: '#6a6b70',
        //     light: '#000000', //inputBorder
        //     dark: '#00000078' //effectColor
        // },
        background: {
            paper: '#21242a',
            default: '#070f1e',
        },
        // text: {
        //     primary: '#212121'
        // }
    },
    typography: {
        // fontFamily: 'Helvetica Neue Light',
        fontSize: 14,
    },
    shape: {
        borderRadius: 4
    },
    components: overrides
};

export const Two = {
    // palette: {
    //     mode: 'dark',
    //     primary: {
    //         main: '#286EF6',
    //         light: '#ffffff' //customColor
    //     },
    //     secondary: {
    //         main: '#313cad',
    //         light: '#282828', //inputColor
    //         dark: '#000000' //imgColor
    //     },
    //     info: {
    //         main: '#0288d1',
    //         light: '#282828', //inputBorder
    //         dark: '#ffffff94' //effectColor
    //     },
    //     success: {
    //         main: '#2e7d32',
    //         light: '#282828',
    //         dark: '#ffffff' //originColor
    //     },
    //     background: {
    //         paper: '#171717',
    //         default: '#121212'
    //     }
    // },
    typography: {
        fontFamily: 'Helvetica Neue Light',
        fontSize: 14
    },
    shape: {
        borderRadius: 4
    },
    components: overrides
};
