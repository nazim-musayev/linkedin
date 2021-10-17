import { BsLinkedin, BsFillPeopleFill, BsThreeDots } from 'react-icons/bs';
import { AiFillHome, AiFillMessage } from 'react-icons/ai';
import { MdNotifications } from 'react-icons/md';
import { RiShoppingBagFill } from 'react-icons/ri'
import { HiSearch } from 'react-icons/hi';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Avatar from 'components/dataDisplay/Avatar';

interface Icon {
  icon: JSX.Element,
  id: number
};

const Navbar: React.FC = () => {
  const icons: Icon[] = [
  {
    icon: <HiSearch />,
    id: 1
  },
  {
    icon: <AiFillHome />,
    id: 2
  },
  {
    icon: <BsFillPeopleFill />,
    id: 3
  },
  {
    icon: <RiShoppingBagFill />,
    id: 4
  },
  {
    icon: <AiFillMessage />,
    id: 5
  },
  {
    icon:  <MdNotifications />,
    id: 6
  }
];

  return (
    <Box display="flex" alignItems="center" bgcolor="white">
      <IconButton color="primary" size="large">
        <BsLinkedin />
      </IconButton>
      <Box width="60vw" display="flex" justifyContent="space-between" flexGrow={1}>
        {icons.map(({icon, id}) => (
          <IconButton key={id} sx={{fontSize : "20px"}}>
            {icon}
          </IconButton>
        ))}
      </Box>
      <Box ml={2} mr={3}>
        <Avatar src="/whitewalker.jpg" width={20} height={20} />
      </Box>        
      <Box>
        <IconButton>
          <BsThreeDots />
        </IconButton>
      </Box>
    </Box>
  )
};

export default Navbar;
