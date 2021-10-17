import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SvgIcon, {SvgIconProps} from '@mui/material/SvgIcon';

const Input = styled(InputBase)({
  backgroundColor: "#eef3f8",
  color: "black",
  border: "none",
  height: "34px",
  width: "100%",
  borderRadius: "4px",
  padding: "8px 4px 0 16px",
  '& ::placeholder': {
    fontWeight: 600,
    fontSize: "13px",
    fontFamily: "sans-serif",
  },
  '& .MuiInputBase-inputAdornedStart' : {
    paddingBottom: "12px"
  }
});

interface Props {
  placeholder: string,
  endIcon?: JSX.Element,
  iconProps?: SvgIconProps
}

const SearchInput: React.FC<Props> = ({endIcon, placeholder}, iconProps) => {
  const searchIcon = <path d="M14.56 12.44L11.3 9.18a5.51 5.51 0 10-2.12 2.12l3.26 3.26a1.5 1.5 0 102.12-2.12zM3 6.5A3.5 3.5 0 116.5 10 3.5 3.5 0 013 6.5z" />;

  return (
    <Input placeholder={placeholder}
     startAdornment={
      <SvgIcon {...iconProps}>
        {searchIcon}
      </SvgIcon>
     }
     endAdornment={
      <SvgIcon {...iconProps}>
        {endIcon}
      </SvgIcon>
     }
    />
  )
};

export default SearchInput;
