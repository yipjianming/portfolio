import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useDispatch, useSelector } from 'react-redux';
import LightModeIcon from '@mui/icons-material/LightMode';
import { toggle } from '../store/themeSlice';
import DarkModeIcon  from '@mui/icons-material/DarkMode';


const Navbar = () => {
    const dispatch = useDispatch();
    const isDarkTheme = useSelector((state) => state.theme.darkMode);



    return (
        <AppBar elevation={0} position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1 }}>
                        <div style={{ width: '40px', visibility: 'hidden' }} />
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, fontFamily: 'montserrat' }}
                    >
                        Y.J.M
                    </Typography>


                    <Box sx={{ flexGrow: 0 }}>
                        <IconButton value={isDarkTheme} onClick={() => dispatch(toggle())} >
                            {isDarkTheme ? <DarkModeIcon /> : <LightModeIcon />}
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Navbar;