import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import Avatar from 'components/dataDisplay/Avatar';
import ProfileContent from 'components/cards/ProfileContent';
import NextImage from 'next/image';


const Image = styled(NextImage)(({theme}) => ({
  borderRadius: 0,
  [theme.breakpoints.up('lg')]: {
    borderRadius: "10px 10px 0 0",
  }
}));

const StyledPaper = styled(Paper)(({theme}) => ({
  borderRadius: 0,
  [theme.breakpoints.up('lg')]: {
    borderRadius: "10px",
  },
  [theme.breakpoints.down('lg')]: {
    borderBottom: 0
  }
}));

const StyledBox = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  border: "2px solid white",
  borderRadius: "50%"
});

const ProfileHeader: React.FC = () => {
  const lg = useMediaQuery('(min-width:1025px)');

  return (
    <StyledPaper variant="outlined">
      <Box height={100} position="relative">
        <Stack position="relative" height={50}>
          <Image src="/bg.jpg" alt="Background" layout="fill" objectFit="cover" placeholder="blur" blurDataURL="/bg.jpg" />
        </Stack>
        <StyledBox>
          <Avatar src="./whitewalker.jpg" width={72} height={72} />
        </StyledBox>
      </Box>
      <Stack alignItems="center" p={1} borderBottom={lg ? 1 : 0} borderColor="grey.300" >
        <Link underline="hover" color="text.primary" fontSize="15px" fontWeight={600}>
          Night King
        </Link>
        <Typography color="text.secondary" variant="caption" fontSize="11px" align="center" p={0.5}>
          Lead White Walker at Beyond The Wall
        </Typography>
      </Stack>
      {lg && <ProfileContent />} 
    </StyledPaper>
  )
};

export default ProfileHeader;
