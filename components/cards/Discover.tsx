import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link';
import IconButton from '@mui/material/IconButton';
import useMediaQuery from '@mui/material/useMediaQuery';
import { GoPlus } from 'react-icons/go';
import SubtitleButton from 'components/dataDisplay/SubtitleButton';

const Discover: React.FC = () => {
  const lg = useMediaQuery('(min-width:1025px)');

  return (
    <Paper variant="outlined" sx={{borderRadius: lg ? "10px" : "0"}}>
      <List>
        <ListItem divider disablePadding>
          <Stack mt={0.5} ml={1.5} spacing={1} width="100%">
            <Link underline="hover" fontSize="12px">
              Groups
            </Link>
            <Stack direction="row" alignItems="center" spacing={1}>
              <Link underline="hover" fontSize="12px" flexGrow={lg ? 1 : 0}>
                Events
              </Link>
              <IconButton size="small" sx={{'&:hover': {color: "black"}}}>
                <GoPlus />
              </IconButton>
            </Stack>
            <Link underline="hover" fontSize="12px">
              Followed Hashtags
            </Link>
          </Stack>
        </ListItem>
      </List>
      <Stack alignItems="center" py={1.5}>
        <SubtitleButton text="Discover more" />
      </Stack>
    </Paper>
  )
};

export default Discover;
