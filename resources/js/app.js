import {
    Root,
    store,
    Provider,
    MuiThemeProvider
} from './src/providers';

import App from './src/App';

Root.render(
    <Provider store={store}>
        <MuiThemeProvider>
            <App />
        </MuiThemeProvider>
    </Provider>
);