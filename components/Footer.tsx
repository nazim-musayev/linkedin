import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Icon from '@mui/material/Icon';
import { BsLinkedin } from 'react-icons/bs';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

const StyledPaper = styled(Paper)(({theme}) => ({
  display: "flex",
  justifyContent: "center",
  borderRadius: "10px",
  [theme.breakpoints.down('lg')]: {
    borderRadius: 0
  }
}));

const Footer: React.FC = () => {
  const links : string[] = ["About", "Accessibility", "Help Center", "Privacy & Terms", "Ad Choices", "Advertising", "Business Services", "Get the Linkedin app", "More"];

  return (
    <footer>
      <StyledPaper variant="outlined">
        <Image 
         src="/adpic.jpg" alt="Ad" width={300} height={250} layout="fixed" 
         placeholder="blur" blurDataURL="adpic.jpg"
        /> 
      </StyledPaper>
      <Stack direction="row" spacing={2} mt={2} mx={5} justifyContent="center" flexWrap="wrap">
        {links.map(link => (
          <Link 
           variant="subtitle2"  underline="hover" key={link} 
           color="text.secondary" fontSize="12px" lineHeight={2}
          >  
            {link}
          </Link>
        ))}
      </Stack>
      <Box display="flex" justifyContent="center" alignItems="center" height={60}>
        <Typography color="primary" variant="body2" fontWeight={600}>
          Linked
        </Typography>
        <Icon color="primary" sx={{fontSize: "14px"}}>
          <BsLinkedin />
        </Icon>
        <Typography fontSize="11px" ml={0.5}>
          LinkedIn Corporation {'©'} 2021
        </Typography>
      </Box>
    </footer>
  )
};

export default Footer;
