import {
  Root,
  store,
  Provider,
  MuiThemeProvider
} from './providers';

import App from './App';
Root.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  </Provider>
);

// reportWebVitals();
