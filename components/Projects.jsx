import { Typography, Box, Paper, Divider } from '@mui/material';
import Sephora_Icon from '../styles/images/Sephora_Icon.jpg'
import NUHS_Icon from '../styles/images/NUHS_Icon.jpg'
import NFT_Medium from '../styles/images/NFT_Medium.png'
import Telegram_Medium from '../styles/images/Telegram_Medium.png'
import SpeedLimit_App from '../styles/images/SpeedLimit_App.png'
import BusTiming_App from '../styles/images/BusTiming_App.png'

import AccordionPanel from '../components/AccordionPanel';
import Image from 'next/image';

export default function Projects() {

    return (
        <Box sx={{ my: 2 }}>
            <Box sx={{ mt: 2 }}>
                <AccordionPanel
                    header='With Organization'
                    icon={NUHS_Icon}
                    title='NUHS - National University Health System'
                    subtitle='Smart Healthcare Project'
                    startDate='Jan 2020'
                    endDate='Mar 2020'

                    details={
                        <>
                            <Typography variant='body2'>Protyped an Android application to conceptualize home-based foot screening for diabetes</Typography>
                            <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
                                <li><Typography variant='body2'>{`After photographing the patients foot, the application isolates the foot image from the background to be fed into the model.`}</Typography></li>
                                <li><Typography variant='body2'>{`Classification was done with a VGG-16 Model and SGD optimizer with transfer learning approach.`}</Typography></li>
                                <li><Typography variant='body2'>{`Images were classified into different diabetic risks categories with a validation accuracy of 95%.`}</Typography></li>
                                <li><Typography variant='body2'>{`Integrated Twilio Messaging API to notify patients when risk level is confirmed.`}</Typography></li>
                            </ul>
                        </>

                    }
                />
                <AccordionPanel
                    icon={Sephora_Icon}
                    title='Sephora'
                    subtitle='Social Analytics Project'
                    startDate='Aug 2018'
                    endDate='Nov 2018'
                    details={
                        <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
                            <li><Typography variant='body2'>{`Utilized network centrality measures to help Sephora gain insights with regards to social media.`}</Typography></li>
                            <li><Typography variant='body2'>{`Used Python for data mining, sentiment, and image analysis.`}</Typography></li>

                        </ul>
                    }
                />
            </Box>

            <Paper elevation={2} sx={{ mt: 2 }}>

                <Typography variant="h6" component={'div'} sx={{ fontWeight: 400, pt: 1, pl: 1 }} >Medium Articles</Typography>
                <Box sx={{ display: 'flex', p: 1, cursor: 'pointer' }} onClick={() => window.open('https://medium.com/@jian_ming/tracking-telegram-users-location-18333ee21b32')}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography variant='subtitle2' sx={{ pt: 1 }} >{`Tracking Telegram User's Location`}</Typography>
                        <Typography variant='body2' className='lineClamp' sx={{ pt: 1 }} >{`This article will show how Telegram's "People Nearby" function can be used to monitor user movement. 
               Unassuming distance data can be used to derive point specific location data with a technique called Triangulation. 
               The article also explains how this point specific location data can be collected over time to create time-series visualizations of a Telegram user's movements.`}</Typography>
                        <Typography variant='body2' color='textSecondary' sx={{ pt: 1 }}>{`12 Feb 2022 · 2 min read`}</Typography>
                    </Box>
                    <Box width={120} height={120} minWidth={120} >
                        <Image width={120} height={120} src={Telegram_Medium} alt="" />
                    </Box>

                </Box>

                <Divider />

                <Box sx={{ display: 'flex', p: 1, cursor: 'pointer' }} onClick={() => window.open('https://medium.com/@jian_ming/crypto-com-nft-bot-tutorial-7978b68e04b1')}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography variant='subtitle2' sx={{ pt: 1 }} >{`Crypto.com NFT Marketplace Bot Tutorial`}</Typography>

                        <Typography variant='body2' className='lineClamp' sx={{ pt: 1 }} >{`This article starts by showing how we can monitor a website's API requests and response in your chrome browser. 
                        After copying the request we need to emulate, we use a bot to repeat the API request at frequent intervals. In the event that an API response contains data which meets pre-defined conditions of a "good deal",
                         a notification is pushed via Telegram Bot to subscribers.`}</Typography>
                        <Typography variant='body2' color='textSecondary' sx={{ pt: 1 }}>{`5 Feb 2022 · 5 min read`}</Typography>
                    </Box>
                    <Box width={120} height={120} minWidth={120} >
                        <Image width={120} height={120} src={NFT_Medium} alt="" />
                    </Box>
                </Box>
            </Paper >

            <Paper elevation={2} sx={{ mt: 2 }}>

                <Typography variant="h6" component={'div'} sx={{ fontWeight: 400, pt: 1, pl: 1 }} >Android Apps</Typography>
                <Box sx={{ display: 'flex', p: 1 }}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography variant='subtitle2' sx={{ pt: 1 }} >{`Singapore Bus Timings`}</Typography>

                        <Typography variant='body2' className='lineClamp' sx={{ pt: 1 }} >{`Provides information from bus arrival timings to seat availability. 
                        The application allows you to bookmark bus services and filter nearby bus stops for convenient access. Uses LTA Datamall API for bus timing data. 
                        Location accuracy is improved by averaging mobile location data to reduce the effect of outliers.`}</Typography>
                        <Typography variant='body2' color='textSecondary' sx={{ pt: 1 }}>{`Apr 2020 · Removed due to Google's Location Permissions Policy`}</Typography>
                    </Box>
                    <Box width={120} height={120} minWidth={120} >
                        <Image width={120} height={120} src={BusTiming_App} alt="" />
                    </Box>

                </Box>

                <Divider />

                <Box sx={{ display: 'flex', p: 1, cursor: 'pointer' }} onClick={() => window.open('https://play.google.com/store/apps/details?id=com.jayam.singaporespeedlimit')}>
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography variant='subtitle2' sx={{ pt: 1 }} >{`Singapore Speed Limit`}</Typography>
                        <Typography variant='body2' sx={{ pt: 1 }} >{`Monitors your vehicle's speed and receive alerts if the road's speed limit is exceeded. 
                        The application runs as a foreground service to allow it to continue its function even when minimized. This allows usage in conjunction with navigation applications.`}</Typography>
                        <Typography variant='body2' color='textSecondary' sx={{ pt: 1 }}>{`Apr 2020`}</Typography>
                    </Box>
                    <Box width={120} height={120} minWidth={120} >
                        <Image width={120} height={120} src={SpeedLimit_App} alt="" />
                    </Box>
                </Box>


            </Paper >


        </Box >
    );
}


