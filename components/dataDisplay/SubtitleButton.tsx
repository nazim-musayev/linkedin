import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

const StyledBox = styled(Box)(({ theme }) => ({
  '&:hover': {
    backgroundColor: theme.palette.grey[300],
    cursor: "pointer"
  }
}));

interface Props {
  text: string,
  icon?: JSX.Element
};

const SubtitleButton: React.FC<Props> = ({text, icon}) => {
  return (
    <StyledBox display="flex" alignItems="center">
      <Typography variant="caption" color="text.secondary" fontWeight={700}>
        {text}
      </Typography>
      {icon}
    </StyledBox> 
  )
};

export default SubtitleButton;
