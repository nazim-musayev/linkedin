import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import SvgIcon, {SvgIconProps} from '@mui/material/SvgIcon';
import Avatar from 'components/dataDisplay/Avatar';

const CustomInput = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: "25px",
    height: "48px",
    '& ::placeholder': {
      fontWeight: 700,
      fontSize: "13px",
      fontFamily: "sans-serif"
    },
    '&:hover': {
      backgroundColor: "#eeeded"
    },
    '& fieldset': {
      borderColor: "#a8a3a3",
    },
    '&:hover fieldset': {
      borderColor: "#a8a3a3",
    },
    '&.Mui-focused fieldset': {
      borderColor: "#a8a3a3",
    }
  }
});

const StyledButton = styled(Button)(({theme}) => ({
  textTransform: "capitalize",
  color: "#585656",
  fontFamily: "sans-serif",
  fontSize: "13px",
  fontWeight: 700,
  padding: "3px",
  [theme.breakpoints.up('lg')]: {
    padding: "10px"
  }
}));

const StyledPaper = styled(Paper)(({theme}) => ({
  padding: "12px 8px",
  borderRadius: 0,
  [theme.breakpoints.up('lg')]: {
    borderRadius: "10px"
  }
}));

interface Icon {
  text: string,
  color: string,
  path: JSX.Element  
};

const StartPost: React.FC<SvgIconProps> = (props) => {
  const icons: Icon[] = [ 
    {
      text: "Photo",
      color: "#70b5f9",
      path: <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z" />
    },
    {
      text: "Video",
      color: "#7fc15e",
      path: <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z" />
    },
    {
      text: "Event",
      color: "#e7a33e",
      path: <path d="M3 3v15a3 3 0 003 3h12a3 3 0 003-3V3zm13 1.75A1.25 1.25 0 1114.75 6 1.25 1.25 0 0116 4.75zm-8 0A1.25 1.25 0 116.75 6 1.25 1.25 0 018 4.75zM19 18a1 1 0 01-1 1H6a1 1 0 01-1-1V9h14zm-5.9-3a1 1 0 00-1-1H12a3.12 3.12 0 00-1 .2l-1-.2v-3h3.9v1H11v1.15a3.7 3.7 0 011.05-.15 1.89 1.89 0 012 1.78V15a1.92 1.92 0 01-1.84 2H12a1.88 1.88 0 01-2-1.75 1 1 0 010-.25h1a.89.89 0 001 1h.1a.94.94 0 001-.88z" />
    },
    {
      text: "Write article",
      color: "#fc9295",
      path: <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z" />
    },
  ];
  
  return (
    <StyledPaper variant="outlined">
      <Stack direction="row" spacing={1} mx={1} mb={1}>
        <Avatar src="/whitewalker.jpg" width={48} height={48} /> 
        <Box component="form" flexGrow={1}>
          <CustomInput placeholder="Start a post" size="small" fullWidth/>
        </Box>
      </Stack>
      <Stack direction="row" justifyContent="space-around">
        {icons.map(({text, color, path}) => (
          <StyledButton key={text} color="inherit" size="large"
           startIcon={
            <SvgIcon {...props} sx={{color}}>
              {path}
            </SvgIcon>
           } 
          >
            {text}
          </StyledButton>
        ))}
      </Stack>
    </StyledPaper>
  )
};

export default StartPost;
