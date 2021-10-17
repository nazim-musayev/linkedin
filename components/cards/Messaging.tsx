import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';
import Typography from '@mui/material/Typography';
import SvgIcon, {SvgIconProps} from '@mui/material/SvgIcon';
import Avatar from 'components/dataDisplay/Avatar';
import { useState, FC } from 'react';
import SearchInput from 'components/dataDisplay/SearchInput';
import { AnimatePresence, motion } from 'framer-motion';


const StyledPaper = styled(Paper)({
  position: "fixed",
  bottom: 0,
  right: 0,
  width: "300px",
  borderRadius: "10px 10px 0 0",
  cursor: "pointer",
});

const variants = {
  hidden: {
    y: 400
  },
  visible: {
    y: 0,
    height: "calc(100vh - 150px)",
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.2
    }
  },
  exit: {
    y: 400,
    transition: {
      type: "spring",
      bounce: 0,
      duration: 0.2
    }
  }
};

interface Icon {
  path: JSX.Element,
  id: number
}


const Messaging: FC<SvgIconProps> = (props) => {
  const [open, setOpen] = useState<boolean>(false);

  const icons: Icon[] = [
    {
      path: <path d="M3 9.5A1.5 1.5 0 114.5 8 1.5 1.5 0 013 9.5zM11.5 8A1.5 1.5 0 1013 6.5 1.5 1.5 0 0011.5 8zm-5 0A1.5 1.5 0 108 6.5 1.5 1.5 0 006.5 8z" />,
      id: 1
    },
    {
      path: <path d="M15 2.53a1.51 1.51 0 01-.44 1L9.15 9 6 10l1-3.12 5.44-5.44A1.5 1.5 0 0115 2.53zM12 11a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1h3V2H5a3 3 0 00-3 3v6a3 3 0 003 3h6a3 3 0 003-3V8h-2z" />,
      id: 2
    },
    {
      path:  open ? <path d="M1 5l7 4.61L15 5v2.39L8 12 1 7.39z" /> : <path d="M15 11L8 6.39 1 11V8.61L8 4l7 4.61z" />,
      id: 3
    },
  ];

  const filterIcon = <path d="M15 2v2H6.72a2 2 0 01-3.44 0H1V2h2.28a2 2 0 013.44 0H15zm-4 4a2 2 0 00-1.72 1H1v2h8.28a2 2 0 003.45 0H15V7h-2.28A2 2 0 0011 6zm-6 5a2 2 0 00-1.72 1H1v2h2.28a2 2 0 003.45 0H15v-2H6.72A2 2 0 005 11z" /> ;

  return (
    <StyledPaper variant="outlined">
      <Stack p={1} direction="row" borderBottom={1} borderColor="grey.300" height={47}
       sx={{'&:hover': {backgroundColor: "whitesmoke", borderRadius: "10px 10px 0 0"}}}
       onClick={() => setOpen(!open)}
      >
        <Stack direction="row" spacing={1} flexGrow={1} alignItems="center">
          <Badge variant="dot" color="success" overlap="circular"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            <Avatar src="/whitewalker.jpg" width={32} height={32} />
          </Badge>
          <Typography fontSize="13px" fontWeight={600}>
            Messaging
          </Typography>
        </Stack>
        <Stack direction="row" pt={1} spacing={1}>
          {icons.map(({path, id}) => (
            <SvgIcon {...props} key={id} color="info">
              {path}
            </SvgIcon>
          ))}
        </Stack>
      </Stack>
      <AnimatePresence>
        {open && (  
          <motion.div variants={variants} initial="hidden" animate="visible" exit="exit">
            <Stack p={1}>
              <SearchInput placeholder="Search messages" endIcon={filterIcon} />
            </Stack>
            <Stack direction="row" pl={1} pt={1} spacing={1}
             sx={{ '&:hover': {backgroundColor: "#e6e6e6"}}}
            >
              <Avatar src="/diane.png" width={46} height={46} />
              <Stack borderBottom={1} borderColor="grey.300">
                <Stack direction="row" spacing={1}>
                  <Typography fontSize="13px">
                    Diane from LinkedIn Premium
                  </Typography>
                  <Typography fontSize="11px" color="textSecondary">
                    Oct 2
                  </Typography>
                </Stack>
                <Stack direction="row">
                  <Typography variant="caption">
                    LinkedIn offer •
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    Try Premium for Free
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
          </motion.div>
        )}
      </AnimatePresence>
    </StyledPaper>
  )
};

export default Messaging;
