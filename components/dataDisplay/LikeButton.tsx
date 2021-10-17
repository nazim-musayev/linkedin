import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export const StyledButton = styled(Button)({
  textTransform: "capitalize",
  padding: "16px",
  fontSize: "14px",
  fontWeight: 600,
  '& .MuiSvgIcon-fontSizeMedium': {
    fontSize: "24px"
  }
});

const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      borderRadius: "50px",
      padding: "6px",
      height: "50px",
      width: "275px",
      boxShadow: theme.shadows[5],
    },
}));

const container = {
  initial: { opacity: 1 },
  animate: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.05
    }
  }
};

const item = {
  initial: {
    marginLeft: "8px"
  },
  animate: {
    y: [0, 5, -5, 0],
    transition: {
      type: "spring", 
      stiffness: 100, 
      duration: 0.5,
    },
  }
};

const LikeButton: React.FC<SvgIconProps> = (props) => {
  const [liked, setLiked] = useState<boolean>(false);

  const reactions = [
    {
      src: "f4ly07ldn7194ciimghrumv3l",
      text: "Like"
    },
    {
      src: "3c4dl0u9dy2zjlon6tf5jxlqo",
      text: "Celebrate"
    },
    {
      src: "9whrgl1hq2kfxjqr9gqwoqrdi",
      text: "Support"
    },
    {
      src: "asmf650x603bcwgefb4heo6bm",
      text: "Love"
    },
    {
      src: "39axkb4qe8q95ieljrhqhkxvl",
      text: "Insightful"
    },
    {
      src: "1z80ze8ler6arc76a8rxsgqbh",
      text: "Curious"
    }
  ];
  
  return (     
    <CustomTooltip placement="top" 
      title={
        <motion.div variants={container} initial="initial" animate="animate">
          {reactions.map(({text, src}) => (
            <motion.div variants={item} key={text} 
              whileHover={{
               translateY: -10,
               scale: 1.3
              }}
            >
              <Image src={`https://static-exp1.licdn.com/sc/h/${src}`} 
               alt="Reactions" layout="fixed" width={35} height={35} 
              />
            </motion.div>
          ))}
        </motion.div>  
      }
    >
      <StyledButton 
       onClick={() => setLiked(!liked)}
       color={liked ? "primary" : "info"}
       startIcon={
        <SvgIcon {...props}>
          <path d="M19.46 11l-3.91-3.91a7 7 0 01-1.69-2.74l-.49-1.47A2.76 2.76 0 0010.76 1 2.75 2.75 0 008 3.74v1.12a9.19 9.19 0 00.46 2.85L8.89 9H4.12A2.12 2.12 0 002 11.12a2.16 2.16 0 00.92 1.76A2.11 2.11 0 002 14.62a2.14 2.14 0 001.28 2 2 2 0 00-.28 1 2.12 2.12 0 002 2.12v.14A2.12 2.12 0 007.12 22h7.49a8.08 8.08 0 003.58-.84l.31-.16H21V11zM19 19h-1l-.73.37a6.14 6.14 0 01-2.69.63H7.72a1 1 0 01-1-.72l-.25-.87-.85-.41A1 1 0 015 17l.17-1-.76-.74A1 1 0 014.27 14l.66-1.09-.73-1.1a.49.49 0 01.08-.7.48.48 0 01.34-.11h7.05l-1.31-3.92A7 7 0 0110 4.86V3.75a.77.77 0 01.75-.75.75.75 0 01.71.51L12 5a9 9 0 002.13 3.5l4.5 4.5H19z" />
        </SvgIcon>
       }
      >
        Like
      </StyledButton>  
    </CustomTooltip>
  )
};

export default LikeButton;
