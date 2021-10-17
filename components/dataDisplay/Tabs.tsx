import { styled } from '@mui/material/styles';
import Icon from '@mui/material/Icon';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { AiFillHome, AiFillMessage } from 'react-icons/ai';
import { BsFillPeopleFill } from 'react-icons/bs';
import { MdNotifications } from 'react-icons/md';
import { RiShoppingBagFill } from 'react-icons/ri';
import { useState, SyntheticEvent, FC } from 'react';


interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: SyntheticEvent, newValue: number) => void;
};
  
const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  '& .MuiTabs-indicator': {
    display: "flex",
    justifyContent: "center",
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    maxWidth: 70,
    width: "100%",
    backgroundColor: "#020205",
  },
  '& .MuiTab-labelIcon' : {
    color: "rgba(102,102,102,1)",
    fontSize: "11px",
    fontFamily: "sans-serif",
    textTransform: "capitalize",
    minHeight: "20px",
    '&.Mui-selected': {
      color: "#010407"
    },
    '&:hover': {
      color: "#010407"
    },
  },
  '& .MuiButtonBase-root.MuiTab-root' : {
    lineHeight: 0.5,
    minWidth: "70px"
  }
});


interface Icon {
  icon: JSX.Element,
  text: string,
};

const CustomTabs: FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    console.log(event);
    setValue(newValue);
  };

  const iconButtons: Icon[] = [
    {
      icon: <AiFillHome />,
      text: "Home"
    },
    {
      icon: <BsFillPeopleFill />,
      text: "My Network"
    },
    {
      icon: <RiShoppingBagFill />,
      text: "Jobs"
    },
    {
      icon: <AiFillMessage />,
      text: "Messaging"
    },
    {
      icon: <MdNotifications />,
      text: "Notifications"
    }
  ];
  
  return (
    <StyledTabs value={value} onChange={handleChange}>
      {iconButtons.map(({text, icon})=> (
        <Tab key={text} label={text} 
         icon={<Icon> {icon} </Icon>}
        />
      ))}
    </StyledTabs>
  )
};

export default CustomTabs;
