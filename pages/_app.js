import "../styles/globals.css";
import createEmotionCache from "../utils/createEmotionCache";
import { CacheProvider } from "@emotion/react";
import PropTypes from 'prop-types';
import { ThemeProvider as PreferredThemeProvider, useTheme } from "next-themes";
import Head from "next/head";
import MUIThemeProvider from "../helper/MUIThemeProvider";
import { useEffect } from "react";

const clientSideEmotionCache = createEmotionCache();

const MyApp = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  useEffect(() => {
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) jssStyles.parentElement.removeChild(jssStyles);
  }, []);

  return (
    <PreferredThemeProvider>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>Jian Ming YIP</title>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <meta name="description" content="I'm Jian Ming · Location: Singapore · Email: yipjianming94@gmail.com · Software Engineer" />
          <meta name="author" content="Yip Jian Ming" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Jian Ming Yip" />
          <meta property="og:description" content="I'm Jian Ming · Location: Singapore · Email: yipjianming94@gmail.com · Software Engineer" />
          <meta name="robots" content="index,follow" />
          <link rel="icon" href="/logo.png" />
        </Head>
        <MUIThemeProvider >
          <Component {...pageProps} />
        </MUIThemeProvider>
      </CacheProvider >
    </PreferredThemeProvider >

  );
};



export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
