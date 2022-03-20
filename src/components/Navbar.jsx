import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch, useSelector } from 'react-redux';
import { FaCloudMoon, FaCloudSun } from 'react-icons/fa';
import { toggle } from '../store/themeSlice';
import { Surfing } from '@mui/icons-material';

const pages = ['Products', 'Pricing', 'Blog'];

const Navbar = () => {
    const dispatch = useDispatch();
    const isDarkTheme = useSelector((state) => state.theme.darkMode);

    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar elevation={0} position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1 }}>
                        <div style={{ width: '40px', visibility: 'hidden' }} />

                        {/* <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu> */}
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
                            {isDarkTheme ? <FaCloudMoon /> : <FaCloudSun />}
                        </IconButton>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Navbar;