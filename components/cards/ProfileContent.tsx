import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled } from '@mui/material/styles';


const StyledPaper = styled(Paper)(({theme}) => ({
  borderRadius: "10px",
  [theme.breakpoints.down('lg')]: {
    borderRadius: 0,
    borderTop: 0
  }
}));

const ProfileContent: React.FC<SvgIconProps> = (props) => {
  const lg = useMediaQuery('(min-width:1025px)');
  
  return (
    <StyledPaper variant={lg ? undefined : "outlined"} elevation={0}>
      <List disablePadding>
        <ListItem button divider disableGutters sx={{ padding : "10px"}}>
          <Stack width="100vw">
            <Stack direction="row" alignItems="center" spacing={5}>
              <Typography color="text.secondary" variant="subtitle2" fontSize="11px" flexGrow={lg ? 1 : 0}>
                Connections
              </Typography>
              <Typography color="primary" fontSize="12px">
                500+
              </Typography>
            </Stack>
            <Typography fontSize="12px" variant="subtitle2">
              Grow your network
            </Typography>
          </Stack>    
        </ListItem>
        <ListItem button divider disableGutters sx={{padding: "10px"}}>
          <Stack>
            <Typography color="text.secondary" variant="subtitle2" fontSize="11px">
              Access exclusive tools & insights
            </Typography>
            <Stack direction="row" spacing={1}>
              <SvgIcon {...props} sx={{fontSize: "15px" }}>
                <path d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z" fill="#f8c77e" />
                <path d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z" fill="#e7a33e" />  
              </SvgIcon>
              <Typography fontSize="12px" variant="subtitle2" 
               sx={{'&:hover' : {color: "blue"}}}
              >
                Try Premium for free
              </Typography>
             </Stack>
          </Stack>
        </ListItem>
        <ListItem button disableGutters sx={{padding: "10px"}}>
          <Stack direction="row">
            <SvgIcon {...props} sx={{color: "rgba(102,102,102,1)"}}>
             <path d="M12 1H4a1 1 0 00-1 1v13.64l5-3.36 5 3.36V2a1 1 0 00-1-1z" />
            </SvgIcon>
            <Typography fontSize="12px" variant="subtitle2">
              My Items
            </Typography>
          </Stack>
        </ListItem>
      </List> 
    </StyledPaper>
  )
};

export default ProfileContent;
