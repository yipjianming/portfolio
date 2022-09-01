import { Typography, Box, Paper } from '@mui/material';
import SMU_Icon from '../styles/images/SMU_Icon.jpg'
import Govtech_Icon from '../styles/images/Govtech_Icon.jpg'
import Astar_Icon from '../styles/images/Astar_Icon.jpg'
import SIA_Icon from '../styles/images/SIA_Icon.jpg'
import TCS_Icon from '../styles/images/TCS_Icon.jpg'
import CatAscii from '../components/CatAscii';
import AccordionPanel from '../components/AccordionPanel';

export default function AboutMe() {
    return (
        <Box sx={{ my: 2 }}>
            <Paper elevation={2} sx={{ p: 1 }}>
                <Box>
                    <Typography variant="h6" component={'div'} sx={{ fontWeight: 400, pb: 0 }} >About</Typography>
                    <Typography variant="body2" component={'span'}>{`Singaporean tech enthusiast who appreciates good design. I have a keen interest in data analytics, application development and user-centered design. 
                I am also a huge fan of the One Piece manga and am always down for a cup of yuan yang peng siew dai.`}</Typography>
                </Box>

            </Paper>


            <AccordionPanel sx={{ mt: 2 }}
                header='Education'
                icon={SMU_Icon}
                title='Singapore Management University'
                subtitle='BSc Information Systems, Double Major in Information Systems and Analytics'
                startDate='2016'
                endDate='2020'
                details={<CatAscii />}
            />



            <Box sx={{ mt: 2 }}>
                <AccordionPanel
                    header='Experience'
                    icon={Govtech_Icon}
                    title='Government Technology Agency'
                    subtitle='Cybersecurity Group - Software Engineer'
                    startDate='Oct 2021'
                    details={
                        <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
                            <li>
                                <Typography variant='body2'>
                                    {`Lead Frontend Developer for a Cybersecurity tool which informs the security operators on the status of monitored websites. The tool ensures the
                         websites are up and secure, while searching the world wide web for fraudalent websites, masquerading as Government authorities, to scam,
                          phish for personal and financial information, or circulate fake news.`}
                                </Typography>
                            </li>
                        </ul>
                    }
                />

                <AccordionPanel
                    icon={Astar_Icon}
                    title='A*STAR - Agency for Science, Technology and Research'
                    subtitle='Institute of High Performance Computing - Research Engineer'
                    startDate='Jul 2020'
                    endDate='Sep 2021'
                    details={
                        <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
                            <li><Typography variant='body2'>{`Utilized Geospatial Analytics to obtain insights on Landuse Data.`}</Typography></li>
                            <li><Typography variant='body2'>{`Utilized Graph Theory and Network Science to perform predictive analysis on transport data.`}</Typography></li>
                            <li><Typography variant='body2'>{`Worked with team on a project to create an agent-based multi-modal simulation of Singapore's transport network.`}</Typography></li>
                            <li><Typography variant='body2'>{`Created interactive and responsive drag-and-drop interfaces with React, Leaflet, Tableau and Tableau Server.`}</Typography></li>
                        </ul>
                    }
                />

                <AccordionPanel
                    icon={SIA_Icon}
                    title='Singapore Airlines'
                    subtitle='Digital Innovation Lab - Intern'
                    startDate='May 2019'
                    endDate='Aug 2019'
                    details={
                        <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
                            <li><Typography variant='body2'>{`Developed a data scraping tool to estimate flight arrivals accurately.`}</Typography></li>
                            <li><Typography variant='body2'>{`Developed a logistical tool that tracks the movement of KrisShop packages.`}</Typography></li>
                        </ul>
                    }
                />

                <AccordionPanel
                    icon={TCS_Icon}
                    title='Tata Consultancy Services'
                    subtitle='Digital Innovation Lab - Intern'
                    startDate='May 2018'
                    endDate='Sep 2018'
                    details={
                        <ul style={{ margin: 0, paddingLeft: '1.2rem' }}>
                            <li><Typography variant='body2'>{`Utilized Android to program chatbot functionality into an intelligent cloud service robot.`}</Typography></li>
                            <li><Typography variant='body2'>{`Created a 3D avatar with Autodesk Maya and mapped the wavelengths of the robot's voice to the
                             mouth movements of the avatar.`}</Typography></li>
                        </ul>
                    }
                />

            </Box>

            <Paper elevation={2} sx={{ mt: 2, p: 1 }}>
                <Typography variant="h6" component={'div'} sx={{ fontWeight: 400 }} >Skills</Typography>

                <Typography variant="body1" sx={{ textDecoration: 'underline', pt: 1, fontWeight: 500 }}>Fields of Interest</Typography>
                <Typography variant="body2" >
                    <Box component='span' sx={{ fontWeight: 500 }}>Development:</Box>
                    {` Web/Mobile app, UI/UX`}
                </Typography>
                <Typography variant="body2" >
                    <Box component='span' sx={{ fontWeight: 500 }}>Analytics:</Box>
                    {` Geospatial, Network Science, Image, Text`}
                </Typography>
                <Typography variant="body1" sx={{ textDecoration: 'underline', pt: 1, fontWeight: 500 }}>Technical</Typography>
                <Typography variant="body2" >{`React, Redux, HTML, CSS, Leaflet, Bootstrap, Material, D3.js,`}</Typography>
                <Typography variant="body2" >{`Node.js, MongoDB, Firebase, MySQL `}</Typography>
                <Typography variant="body2" >{`JavaScript, Python, Java, Android Kotlin, R, Ruby`}</Typography>
                <Typography variant="body2" >{`Agile, Git, Docker, Mew, Mewtwo (:`}</Typography>

                <Typography variant="body1" sx={{ textDecoration: 'underline', pt: 1, fontWeight: 500 }}>Software</Typography>
                <Typography variant="body2" component={'span'}>{`MS Office, SAS Enterprise, Tableau, Tableau Server, Autodesk Maya`}</Typography>

            </Paper>

        </Box >
    );
}


