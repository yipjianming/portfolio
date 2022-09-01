import { Typography, Box, Stack, AccordionSummary, AccordionDetails } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { Accordion } from '../styles/StyledComponents';
import Image from 'next/image'

export default function AccordionPanel(props) {
    function diff_year_month_day(dt1, dt2) {
        let display = `${dt1} - `

        if (isNaN(Date.parse(dt1))) {
            return null
        }
        else if (isNaN(Date.parse(dt2))) {
            display += 'Present · '
            dt2 = new Date()
        } else {
            display += `${dt2} · `
        }

        dt1 = Date.parse(dt1)
        dt2 = Date.parse(dt2)

        var time = (dt2 - dt1) / 1000;
        var year = Math.abs(Math.round((time / (60 * 60 * 24 * 365.25))));
        var month = Math.abs(Math.ceil((time % (60 * 60 * 24 * 365.25)) / (60 * 60 * 24 * 7 * 4)));
        if (year === 1) {
            display += `1 yr `
        }
        if (year > 1) {
            display += `${year} yrs `
        }
        if (month === 1) {
            display += `1 mo `
        }
        if (month > 1) {
            display += `${month} mos `
        }
        return display;

    }
    return (
        <Accordion sx={{ ...props.sx }}>
            <AccordionSummary
                expandIcon={< ExpandMore />}
                sx={{ px: 1 }}
            >
                <Box sx={{ p: 0, m: 0 }}>
                    {props.header
                        ? <Typography variant="h6" component={'div'} sx={{ pb: 1, fontWeight: 400 }} >{props.header}</Typography>
                        : null
                    }
                    <Box sx={{ display: 'flex' }}>
                        <Box width={60} height={60} minWidth={60} >
                            <Image width={60} height={60} src={props.icon} alt="" />
                        </Box>
                        <Stack sx={{ flexGrow: 1, pl: 1 }}>
                            <Typography variant="subtitle2" sx={{ fontWeight: 500 }} >{props.title}</Typography>
                            <Typography variant="body2" >{props.subtitle}</Typography>
                            <Typography variant="body2" color='textSecondary' component='span' >{diff_year_month_day(props.startDate, props.endDate)}</Typography>
                        </Stack>
                    </Box>
                </Box>
            </AccordionSummary>
            <AccordionDetails>
                {props.details}
            </AccordionDetails>
        </Accordion>
    );
}