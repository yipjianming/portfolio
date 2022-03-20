import { useState, useEffect } from 'react';
import { Typography, Box, Divider } from '@mui/material';

export default function CatAscii() {
    const [pos, setPos] = useState(0);

    useEffect(() => {
        const tick = () => {
            setPos((pos) => { return pos + 1 });
        }
        const interval = setInterval(() => {
            tick()
        }, 1000);
        return () => {
            clearInterval(interval)
        };
    }, []);
    return (
        < Box>
            {pos % 5 === 0 ?
                <>
                    <Typography sx={{ pl: 1.4, lineHeight: 1 }}>{`|\\__/, | ('\\ `}</Typography>
                    <Typography sx={{ pl: 1.4, lineHeight: 1 }}>{`|> . <`} <Box component={'span'} sx={{ px: 0.12 }} />{`|_ ) )`}</Typography>
                    <Typography sx={{ lineHeight: 1 }}>{"``(,/``(,/````````"}</Typography>
                </>
                : pos % 2 === 0 ?
                    <><Typography sx={{ pl: 1.4, lineHeight: 1 }}>{`|\\__/, |`}<Box component={'span'} sx={{ px: 0.35 }} /> {`)\`) `}</Typography>
                        <Typography sx={{ pl: 1.4, lineHeight: 1 }}>{`|o . o |_( (`}</Typography>
                        <Typography sx={{ lineHeight: 1 }}>{"``(,/``(,/````````"}</Typography>
                    </>
                    : <>
                        <Typography sx={{ pl: 1.4, lineHeight: 1 }}>{`|\\__/, | ('\\ `}</Typography>
                        <Typography sx={{ pl: 1.4, lineHeight: 1 }}>{`|o . o |_ ) )`}</Typography>
                        <Typography sx={{ lineHeight: 1 }}>{"``(,/``(,/````````"}</Typography>
                    </>
            }
        </Box>
    );
}