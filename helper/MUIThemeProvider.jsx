import { CssBaseline, ThemeProvider } from "@mui/material";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { lightTheme, darkTheme } from "./theme";


const MUIThemeProvider = (props) => {
    const { pageProps } = props;

    const { resolvedTheme } = useTheme();
    const [currentTheme, setCurrentTheme] = useState(lightTheme);

    useEffect(() => {
        resolvedTheme === "light"
            ? setCurrentTheme(lightTheme)
            : setCurrentTheme(darkTheme);
    }, [resolvedTheme]);


    return (
        <ThemeProvider theme={currentTheme}>
            <CssBaseline />
            {/* <GlobalStyles styles={globalStyles} /> */}
            {props.children}
        </ThemeProvider>
    );
};



export default MUIThemeProvider;