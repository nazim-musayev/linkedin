import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography'; 
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { HiOutlinePlusSm } from 'react-icons/hi';
import { BsArrowRight } from 'react-icons/bs';
import SubtitleButton from 'components/dataDisplay/SubtitleButton';
import InfoIcon from 'components/dataDisplay/InfoIcon';
import Avatar from 'components/dataDisplay/Avatar';

const FollowButton = styled(Button)({
  color: "#5e5c5c",
  borderColor: "#6b6b6b",
  borderRadius: "20px",
  textTransform: "capitalize",
  fontSize: "14px",
  fontWeight: 600,
  width: "98px",
  height: "32px",
  marginLeft: "56px",
  '&:hover': {
    backgroundColor: '#dce4ee',
    border: '2px solid black',
    boxShadow: 'none',
    height: "32px"
  },
});

const StyledPaper = styled(Paper)(({theme}) => ({
  padding: "12px",
  borderRadius: 0,
  [theme.breakpoints.up('lg')]: {
    borderRadius: "10px",
  }
}));

interface ListItem {
  avatar: string,
  primary: string,
  secondary: string
};

const Follow: React.FC = () => {
  const listItems: ListItem[] = [
    {
      avatar: "/stackoverflow.png",
      primary: "Stack Overflow",
      secondary: "Internet"
    },
    {
      avatar: "/mongodb.jpg",
      primary: "MongoDB",
      secondary: "Computer Software"
    },
    {
      avatar: "/linkedin.jpg",
      primary: "LinkedIn",
      secondary: "Internet"
    },
  ];

  return (
    <StyledPaper variant="outlined">
      <Stack direction="row">
        <Typography variant="subtitle1" flexGrow={1} fontWeight={600} fontSize="15px">
          Add to your feed
        </Typography>
        <InfoIcon />
      </Stack>
      <List>
        {listItems.map(({avatar, primary, secondary}) => (
          <Stack key={primary} p={0.5}>
            <ListItem alignItems="flex-start" disablePadding sx={{'&:hover': {cursor: "pointer"}}}>
              <ListItemAvatar>
                <Avatar src={avatar} width={48} height={48} />
              </ListItemAvatar>
              <ListItemText 
                primary={
                  <Typography fontSize="13px" fontWeight={600} variant="caption">
                    {primary}
                  </Typography>
                } 
                secondary={
                  <Typography fontSize="12px" color="textSecondary">
                    Company • {secondary}
                  </Typography>
                }
              />
            </ListItem>
            <FollowButton variant="outlined" size="small" 
             startIcon={<HiOutlinePlusSm />}
            >
              Follow
            </FollowButton>
          </Stack> 
        ))} 
      </List>
      <SubtitleButton text="View all recommendations" icon={<BsArrowRight />} />
    </StyledPaper>
  )
};

export default Follow;
