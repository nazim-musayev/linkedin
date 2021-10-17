import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Icon from '@mui/material/Icon';
import Divider from '@mui/material/Divider';
import { styled } from '@mui/material/styles';
import Link from '@mui/material/Link';
import Avatar from 'components/dataDisplay/Avatar';
import { AiFillCaretDown } from 'react-icons/ai';
import { GrDrag } from 'react-icons/gr';


const StyledButton = styled(Button)({
  textTransform: "capitalize",
  fontFamily: "sans-serif",
  fontSize: "11px",
  color: "rgba(102,102,102,1)",
  lineHeight: 0,
  paddingBottom: "2px",
  '&:hover': {
    backgroundColor: "transparent",
    color: "#010407"
  }
});


const ButtonGroup: React.FC = () => {
  return (
    <Stack direction="row" alignItems="center">
      <StyledButton>
        <Stack alignItems="center" spacing="1px">
          <Avatar src="/whitewalker.jpg" width={24} height={24} />
          <Stack direction="row" alignItems="center">
            Me <AiFillCaretDown />
          </Stack>
        </Stack>
      </StyledButton>
      <Divider orientation="vertical" flexItem />
      <StyledButton>
        <Stack alignItems='center' spacing="1px">
          <Icon>
            <GrDrag />
          </Icon>
          <Stack direction="row" alignItems="center" >
            Work <AiFillCaretDown />
          </Stack>
        </Stack>
      </StyledButton>
      <Link fontSize="11px" underline="hover" color="textPrimary" textAlign="center" width="100px">
        Try Premium for free
      </Link>
    </Stack>
  )
};

export default ButtonGroup;
