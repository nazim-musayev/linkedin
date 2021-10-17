import MuiAvatar from '@mui/material/Avatar';

interface Props {
  src: string,
  width: number, 
  height: number
};

const Avatar: React.FC<Props> = ({src, width, height}) => {
  return (
    <MuiAvatar alt="Avatar" src={src} sx={{width, height}} />
  )
};

export default Avatar;
