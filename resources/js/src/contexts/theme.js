import { createContext } from 'react';

const initialState = {
    mode : 'One'
};

const ThemeContext = createContext(initialState);

export { ThemeContext, initialState };
