import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';
import { BsArrowRight } from 'react-icons/bs';
import InfoIcon from 'components/dataDisplay/InfoIcon';
import SubtitleButton from 'components/dataDisplay/SubtitleButton';

const StyledPaper = styled(Paper)(({theme}) => ({
  padding: "12px",
  borderRadius: 0,
  [theme.breakpoints.up('lg')]: {
    borderRadius: "10px",
  }
}));

interface Text {
  primary: string,
  secondary: string
};

const TopCourses: React.FC = () => {
  const texts: Text[] = [ 
    {
      primary: "1.Learning GDPR",
      secondary: "Kalinda Raina"
    },
    {
      primary: "2.Customer service Foundations",
      secondary: "Jeff Toister"
    },
    {
      primary: "3.Diversity, Inclusion and Belonging",
      secondary: "Andrea Bonior"
    }
  ];

  return (
    <StyledPaper variant="outlined">
      <Box display="flex" mb={1}>
        <Typography variant="subtitle1" flexGrow={1} fontWeight={600} fontSize="14px">
          Today's top courses
        </Typography>
        <InfoIcon />
      </Box>
      <List disablePadding>
        {texts.map(({primary, secondary}) => (
          <ListItem key={secondary} button disablePadding>
            <ListItemText
             primary={
               <Typography variant="subtitle2" fontWeight={600} fontSize="12px">
                 {primary}
               </Typography>
             } 
             secondary={
               <Typography variant="caption" color="text.secondary" ml={1.5}>
                 {secondary}
               </Typography>
             } 
            />
          </ListItem>
        ))}
       </List>
       <SubtitleButton text="Show more on LinkedIn Learning" icon={<BsArrowRight />} />
    </StyledPaper>
  )
};

export default TopCourses;
