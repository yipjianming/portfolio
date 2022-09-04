import { Typography, Box, Stack, AccordionSummary, AccordionDetails, Skeleton, Divider } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import { Accordion } from '../styles/StyledComponents';
import Image from 'next/image'
import { diff_year_month_day } from '../helper/utils';
import { useState } from 'react';

export default function AccordionPanel(props) {
    const [imageLoadingStatus, setImageLoadingStatus] = useState('loading');



    return (
        <>
            <Accordion sx={{ ...props.sx }}>
                <AccordionSummary
                    expandIcon={< ExpandMore />}
                    sx={{ px: 1 }}
                    disabled={imageLoadingStatus !== 'completed'}
                >
                    <Box sx={{ p: 0, m: 0 }}>
                        <Box sx={{ display: 'flex' }}>
                            <Box width={60} height={60} minWidth={60}  >
                                <Image width={60} height={60} src={props.icon} placeholder="blur" onLoad={() => setImageLoadingStatus('completed')} onError={() => setImageLoadingStatus('error')} />
                            </Box>
                            <Stack sx={{ flexGrow: 1, pl: 1 }}>
                                {imageLoadingStatus !== 'completed'
                                    ? <Box>
                                        <Skeleton width="400px" height='22px' />
                                        <Skeleton width="400px" height='20px' />
                                        <Skeleton width="250px" height='20px' />
                                    </Box>
                                    : <>
                                        <Typography variant="body1" sx={{ fontWeight: 500 }} >{props.title}</Typography>
                                        <Typography variant="body2" >{props.subtitle}</Typography>
                                        <Typography variant="body2" color='textSecondary' component='span' >{diff_year_month_day(props.startDate, props.endDate)}</Typography>
                                    </>
                                }
                            </Stack>
                        </Box>
                    </Box>
                </AccordionSummary>
                <AccordionDetails>
                    {props.details}
                </AccordionDetails>
            </Accordion>
            <Divider sx={props.borderBottom ? {} : { display: 'none' }} />
        </>
    );
}