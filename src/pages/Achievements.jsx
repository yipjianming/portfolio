import { Typography, Box, Paper, Divider } from '@mui/material';


export default function Achievements() {
    return (
        <Box sx={{ my: 2 }}>
            <Paper elevation={2}>
                <Box sx={{ p: 1 }}>
                    <Typography variant="h6" component={'div'} sx={{ fontWeight: 400 }} >Certificates</Typography>
                    <Typography variant='subtitle2' sx={{ pt: 1 }} >{`MITRE ATT&CK Defender`}</Typography>
                    <Typography variant='body2'>{`Cyber Threat Intelligence Certification · 2022`}</Typography>
                </Box>
                <Divider />
                <Box sx={{ p: 1 }}>
                    <Typography variant='subtitle2'>{`Nielsen Norman Group`}</Typography>
                    <Typography variant='body2'>{`UX Certified · 2022`}</Typography>
                </Box>
            </Paper>

            <Paper elevation={2} sx={{ mt: 2 }}>
                <Box sx={{ p: 1 }}>
                    <Typography variant="h6" component={'div'} sx={{ fontWeight: 400 }} >Awards</Typography>
                    <Typography variant='subtitle2' sx={{ pt: 1 }}>{`IBM Call for Code Ideation Challenge`}</Typography>
                    <Typography variant='body2'>{`Winner · 2019`}</Typography>
                </Box>
                <Divider />
                <Box sx={{ p: 1 }}>
                    <Typography variant='subtitle2' >{`National Data Science Challenge`}</Typography>
                    <Typography variant='body2'>{`Top 20 of 360 teams · 2019`}</Typography>
                </Box>
                <Divider />
                <Box sx={{ p: 1 }}>
                    <Typography variant='subtitle2' >{`Singapore Mathematical Olympiad`}</Typography>
                    <Typography variant='body2'>{`2 Bronze Awards | Honourable Mention Award | 20th Team Prize`}</Typography>
                </Box>
                <Divider />
                <Box sx={{ p: 1 }}>
                    <Typography variant='subtitle2' >{`Australian Mathematics Competition`}</Typography>
                    <Typography variant='body2'>{`High Distinction, Top 1% of Olympians | Distinction`}</Typography>
                </Box>
            </Paper>

        </Box >
    );
}


