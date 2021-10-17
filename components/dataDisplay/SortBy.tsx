import Stack from '@mui/material/Stack';
import MuiDivider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { RiArrowDownSFill } from 'react-icons/ri';

const Divider = styled(MuiDivider)({
  backgroundColor: "#a59e9e",
  flexGrow: 1,
  height: "1px"
});

const SortBy: React.FC = () => {
  return (
    <Stack my={1.5} direction="row" alignItems="center">
      <Divider />
      <Typography color="textSecondary" variant="caption" ml={1}>
        Sort by:
      </Typography>
      <Typography variant="caption">
        Top
      </Typography>
      <RiArrowDownSFill />
    </Stack>
  )
};

export default SortBy;
