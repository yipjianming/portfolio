import { Typography, Box, Paper, Divider, Stack } from '@mui/material';
import Image from 'next/image';
import Mitre_Icon from '../styles/images/Mitre_Icon.jpg'
import NNG_Icon from '../styles/images/NNG_Icon.jpg'
import Panel from './Panel';

export default function Achievements() {
    return (
        <Box sx={{ my: 2 }}>
            <Paper elevation={2} sx={{ mb: 2 }} >
                <Typography variant="h6" component={'div'} sx={{ fontWeight: 400, p: 1, pb: 0}} >Certificates</Typography>

                <Panel
                    icon={Mitre_Icon}
                    title={`MITRE ATT&CK Defender`}
                    subtitle={`SOC Assesment`}
                    period='Issued: 2022'
                    borderBottom
                />
                <Panel
                    icon={Mitre_Icon}
                    title={`MITRE ATT&CK Defender`}
                    subtitle={`Cyber Threat Intelligence Certification`}
                    period='Issued: 2022'
                    borderBottom
                />
                <Panel
                    icon={NNG_Icon}
                    title={`Nielsen Norman Group`}
                    subtitle={`UX Certified`}
                    period='Issued: 2022'
                    borderBottom
                />
            </Paper>

            <Paper elevation={2} sx={{ mt: 2 }}>
                <Box sx={{ p: 1 }}>
                    <Typography variant="h6" component={'div'} sx={{ fontWeight: 400 }} >Awards</Typography>
                    <Typography variant='body1' sx={{ pt: 1 }}>{`IBM Call for Code Ideation Challenge`}</Typography>
                    <Typography variant='body2'>{`Winner · 2019`}</Typography>
                </Box>
                <Divider />
                <Box sx={{ p: 1 }}>
                    <Typography variant='body1' >{`National Data Science Challenge`}</Typography>
                    <Typography variant='body2'>{`Top 20 of 360 teams · 2019`}</Typography>
                </Box>
                <Divider />
                <Box sx={{ p: 1 }}>
                    <Typography variant='body1' >{`Singapore Mathematical Olympiad`}</Typography>
                    <Typography variant='body2'>{`2 Bronze Awards | Honourable Mention Award | 20th Team Prize`}</Typography>
                </Box>
                <Divider />
                <Box sx={{ p: 1 }}>
                    <Typography variant='body1' >{`Australian Mathematics Competition`}</Typography>
                    <Typography variant='body2'>{`High Distinction, Top 1% of Olympians | Distinction`}</Typography>
                </Box>
            </Paper>

        </Box >
    );
}


