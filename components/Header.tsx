import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import { BsLinkedin } from 'react-icons/bs';
import SearchInput from 'components/dataDisplay/SearchInput';
import Tabs from 'components/dataDisplay/Tabs';
import ButtonGroup from 'components/dataDisplay/ButtonGroup';


const Header: React.FC = () => {
  return (
    <Grid container bgcolor="white" justifyContent="center">
      <Grid item container lg={10} alignItems="center">
        <Grid item lg={4}>
          <Stack direction="row" alignItems="center">
            <IconButton color="primary" sx={{fontSize : "34px" }}>
              <BsLinkedin />
            </IconButton>
            <Stack width="75%">
              <SearchInput placeholder="Search for jobs, companies..." />
            </Stack>
          </Stack>
        </Grid>
        <Grid item lg={1} />
        <Grid item container lg={7} justifyContent="center">
          <Tabs />
          <ButtonGroup />
        </Grid>
      </Grid>
    </Grid>
  )
};

export default Header;
