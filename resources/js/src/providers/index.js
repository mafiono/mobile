import reportWebVitals from './reportWebVitals';
import { createRoot } from 'react-dom/client';
import MuiThemeProvider from './theme';
import { Provider } from 'react-redux';
import store from '../state';

const Root = createRoot(document.getElementById('app'));

export {
    Root,
    store,
    Provider,
    reportWebVitals,
    MuiThemeProvider,
};