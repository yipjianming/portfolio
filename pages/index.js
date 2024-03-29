import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import TabSelector from '../components/TabSelector'

import { Container, Box, Typography, Grid, Avatar, IconButton, Stack, Fade } from '@mui/material';
import ProfilePic from '../styles/images/profileSquare.jpg'
import { Email, LinkedIn } from '@mui/icons-material';

export default function Home() {
  return (
    <>
      <Navbar />
      <Container sx={{ px: 0 }}>
        <Grid container justifyContent='center' spacing={2} sx={{ pt: 2 }} >
          <Grid item xs={5} sm={3} md={2}>
            <Box sx={{ boxShadow: 3, borderRadius: '50%', border: '2px solid rgba(255,255,255,0.2)', }}>
              <Fade in={true} timeout={2000}>

                <Avatar sx={{ width: '100%', height: 'auto' }} >
                  <Image
                    src={ProfilePic}
                  /></Avatar>
              </Fade>
            </Box>

          </Grid>
        </Grid>
        <Stack spacing={0} direction="column" justifyContent="center" alignItems="center">
          <h1 style={{ margin: 0 }} >
            Yip Jian Ming
          </h1>
          <div>
            Software Developer
          </div>

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
    </>
  )
}
