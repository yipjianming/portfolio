import "../styles/globals.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { getDesignTokens } from "../styles/theme";
import createEmotionCache from "../utils/createEmotionCache";
import { CacheProvider } from "@emotion/react";
import PropTypes from 'prop-types';
import { Provider, useSelector } from 'react-redux';
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from '../store/store';
import { useMemo } from "react";

const clientSideEmotionCache = createEmotionCache();

const MyApp = (props) => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {() => (
          <MyAppWithRedux {...props} />
        )}
      </PersistGate>
    </Provider>
  );
};

function MyAppWithRedux(props) {
  const isDarkTheme = useSelector((state) => state.theme.darkMode);
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const theme = useMemo(() => getDesignTokens(isDarkTheme), [isDarkTheme]);
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider >
  );
}

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
