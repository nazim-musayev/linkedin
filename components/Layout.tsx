import { useState, FC } from 'react';
import { Node } from 'interfaces';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';
import useMediaQuery from '@mui/material/useMediaQuery';
import Header from 'components/Header';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import Messaging from 'components/cards/Messaging';
import Profile from 'components/cards/Profile';
import ProfileContent from 'components/cards/ProfileContent';
import NewPostsButton from 'components/dataDisplay/NewPostsButton';
import SubtitleButton from 'components/dataDisplay/SubtitleButton';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import SortBy from 'components/dataDisplay/SortBy';
import Discover from 'components/cards/Discover';
import Follow from 'components/cards/Follow';
import Courses from 'components/cards/Courses';
import StartPost from 'components/cards/StartPost';


const Layout: FC<Node> = ({children}) => {
  const lg = useMediaQuery('(min-width:1025px)');
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <>
      <Stack position="sticky" top={0} zIndex={1} mb={lg ? 4.5 : 1} borderBottom={1} borderColor="grey.300">
        {lg ? <Header /> : <Navbar />}
      </Stack> 
      <Grid container justifyContent="center">
        <Grid item container xs={12} lg={2} mt={lg ? 1.5 : 0}>
          <Grid item xs={12}>
            <Stack spacing={1}>
              <Profile />
              {lg && <Discover />}
            </Stack>
          </Grid>
          <Grid item xs={12} sx={{display : {xs : 'block', lg : 'none'}}}>
            {toggle && (
              <Stack spacing={1}>
                <ProfileContent />
                <Discover />
              </Stack>
            )}
          </Grid>
          <Grid item xs={12} sx={{display : {xs : 'block', lg : 'none'}}}>
            <Stack alignItems="center" my={1} onClick={ () => setToggle(!toggle)}>
              <SubtitleButton 
               text={toggle ? `Show less` : `Show more`}
               icon={toggle ? <IoIosArrowUp /> : <IoIosArrowDown />}  
              />
            </Stack>
          </Grid>
        </Grid>
        <Grid item container xs={12} lg={5}>
          <Grid item xs={12} p={lg ? 0.5 : 0} mt={lg ? 1 : 0} ml={lg ? 1.5 : 0}>
            <StartPost />
            <SortBy />
            {children}
          </Grid>
        </Grid>
        <Grid item container xs={12} lg={3} p={lg ? 1.5 : 0}>
          <Stack spacing={1}>
            <Follow />
            <Courses />
            <Footer />
            {lg && <Messaging /> }
          </Stack>
        </Grid>
      </Grid>
      <NewPostsButton showBelow={5000} />
    </>
  )
};

export default Layout;
