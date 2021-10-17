import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { useState, useEffect } from 'react';

const StyledButton = styled(Button)({
    zIndex: 2,
    position: "fixed",
    top: "12.5%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    fontSize: "14px",
    width: "125px",
    textTransform: "capitalize",
    borderRadius: "25px"
});

interface Props {
  showBelow: number
};

const NewPostsButton: React.FC<Props> = ({showBelow}) => {
  const [show, setShow] = useState<boolean>(showBelow ? false : true);

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
        if (!show) setShow(true)
    } else {
        if (show) setShow(false)
    }
  };

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: `smooth` })
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll)
      return () => window.removeEventListener(`scroll`, handleScroll)
    }
  });

  return (
    <>
      {show && (
        <StyledButton size="small" color="primary" variant="contained" 
         onClick={handleClick} startIcon={ <AiOutlineArrowUp />}
        >
          New posts
        </StyledButton>
      )}
    </>
  )
};

export default NewPostsButton;
