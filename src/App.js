import { ThemeProvider } from '@mui/material/styles';
import { getDesignTokens } from './styles/Theme';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import TabSelector from './components/TabSelector';
import { CssBaseline, GlobalStyles, Container, Box, Typography, Grid, Avatar, Paper, Divider, IconButton, Stack, Fade } from '@mui/material';
import ProfilePic from './styles/images/profileSquare.jpg'
import { Email, LinkedIn } from '@mui/icons-material';
function App() {
  const isDarkTheme = useSelector((state) => state.theme.darkMode);
  const theme = useMemo(() => getDesignTokens(isDarkTheme), [isDarkTheme]);


  return (
    <ThemeProvider theme={theme.mui}>
      <GlobalStyles styles={theme.global} />
      <CssBaseline />
      <Navbar />

      <Container sx={{ px: 0 }}>
        <Grid container justifyContent='center' spacing={2} sx={{ pt: 2 }} >
          <Grid item xs={5} sm={3} md={2}>
            <Box sx={{ boxShadow: 3, borderRadius: '50%', border: '2px solid rgba(255,255,255,0.2)', }}>
              <Fade in={true} timeout={2000}>
                <Avatar sx={{
                  width: '100%', height: 'auto'
                }} src={ProfilePic} />
              </Fade>
            </Box>

          </Grid>
        </Grid>
        <Stack spacing={0} direction="column" justifyContent="center" alignItems="center">
          <Typography variant="h6" >
            Jian Ming Yip
          </Typography>
          <Typography variant="body1" color='textSecondary' component="div" >
            Software Developer
          </Typography>
          <Box >
            <IconButton size='small' aria-label="LinkedIn" href='https://www.linkedin.com/in/jianmingyip' target="_blank">
              <LinkedIn />
            </IconButton>
            <IconButton size='small' aria-label="delete" href="mailto:yipjianming94@gmail.com">
              <Email />
            </IconButton>
          </Box>
        </Stack>

        <TabSelector />
      </Container >
    </ThemeProvider>
  );
}

export default App;
