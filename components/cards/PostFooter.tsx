import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import LikeButton, { StyledButton } from 'components/dataDisplay/LikeButton';

interface Button {
  path: JSX.Element,
  text: string,
};

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 15,
    fontFamily: 'sans-serif'
  },
}));

const PostFooter: React.FC<SvgIconProps> = (props) => {
  const buttons: Button[] = [
    {
      path: <path d="M7 9h10v1H7zm0 4h7v-1H7zm16-2a6.78 6.78 0 01-2.84 5.61L12 22v-4H8A7 7 0 018 4h8a7 7 0 017 7zm-2 0a5 5 0 00-5-5H8a5 5 0 000 10h6v2.28L19 15a4.79 4.79 0 002-4z" />,
      text: "Comment"
    },
    {
      path: <path d="M23 12l-4.61 7H16l4-6H8a3.92 3.92 0 00-4 3.84V17a4 4 0 00.19 1.24L5.12 21H3l-.73-2.22A6.4 6.4 0 012 16.94 6 6 0 018 11h12l-4-6h2.39z" />,
      text: "Share"
    },
    {
      path: <path d="M21 3L0 10l7.66 4.26L16 8l-6.26 8.34L14 24l7-21z" />,
      text: "Send"
    }
  ];
  
  return (
    <Stack direction="row" justifyContent="space-around">  
      <LikeButton />      
      {buttons.map(({path, text}) => (
        <LightTooltip key={text} title={text} placement="top">
          <StyledButton color="info"
           startIcon={
            <SvgIcon {...props}>
              {path}
            </SvgIcon>
           } 
          >
            {text}
          </StyledButton>
        </LightTooltip>
      ))}
    </Stack>
  )
};

export default PostFooter;
