import { Box, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';

export const ComponentContainer = styled(Box)(({ theme }) =>
({
  padding: `${theme.spacing(1)} ${theme.spacing(4)}`,
}));

export const CenterVertical = (props) => {
  return <Grid container direction="column" alignItems="center" justifyContent="center"
    sx={{ height: props.height, textAlign: 'center' }}>
    {props.children}
  </Grid>
}

export const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={2} square {...props} />
))(({ theme }) => ({
  border: 0,
  position: 'static'
  // border: `1px solid ${theme.palette.divider}`,
  // '&:not(:last-child)': {
  //   borderBottom: 0,
  // },
  // '&:before': {
  //   display: 'none',
  // },
}));