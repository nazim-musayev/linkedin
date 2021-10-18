import { styled } from '@mui/material/styles';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Icon from '@mui/material/Icon';
import { BsLinkedin } from 'react-icons/bs';
import LinearProgress from '@mui/material/LinearProgress';


const StyledStack = styled(Stack)({
  position: "fixed",
  top: "35%",
  left: "50%",
  transform: "translate(-50%,-50%)"
});

const Loading: React.FC = () => {
  return (
    <Stack width="100vw" height="100vh" bgcolor="whitesmoke">
      <StyledStack>
          <Stack direction="row" alignItems="center" mb={3} spacing="4px">
            <Typography color="primary" variant="h3" fontWeight={600}>
              Linked
            </Typography>
            <Icon color="primary" sx={{fontSize: "50px"}}>
              <BsLinkedin />
            </Icon>
          </Stack>
          <Stack>
            <LinearProgress />
          </Stack>
      </StyledStack>
    </Stack>
  )
}

export default Loading;
