import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import SvgIcon, { SvgIconProps } from '@mui/material/SvgIcon';
import IconButton from '@mui/material/IconButton';
import { BsThreeDots } from 'react-icons/bs';
import Avatar from 'components/dataDisplay/Avatar';
import PostContent from 'components/cards/PostContent';
import PostFooter from 'components/cards/PostFooter';
import { useState, useEffect, FC } from 'react';
import { Character } from 'interfaces';

const StyledPaper = styled(Paper)(({theme}) => ({
  borderRadius: 0,
  [theme.breakpoints.up('lg')]: {
    borderRadius: "10px",
  }
}));


interface Props {
  data: Character[],
  iconProps?: SvgIconProps
};

const Post: FC<Props> = ({data}, iconProps) => {
  const path = <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z" />
  const [hour, setHour] = useState<number | null>(null);

  useEffect(() => {
    setHour(Math.round(Math.random() * 10 + 1))
  },[]);

  return (
    <Stack spacing={1}>
      {data.map((item) => {
        const {fullName, title, quotes, imageUrl} = item;
        return (
          <StyledPaper key={imageUrl} elevation={0} variant="outlined">
            <Stack direction="row" spacing={1} p={1}>
              <Avatar src={imageUrl} width={48} height={48} />
              <Stack flexGrow={1}>
                <Stack direction="row" spacing={0.5}>
                  <Typography variant="caption" fontWeight={600}>
                    {fullName}
                  </Typography>
                  <Typography variant="caption" color="textSecondary">
                    {"• "} 1st
                  </Typography>
                </Stack>
                <Typography variant="caption" color="textSecondary" fontSize="11px" lineHeight={1} >
                  {title}
                </Typography>
                <Stack direction="row" spacing={0.5} >
                  <Typography color="textSecondary" fontSize="11px">
                    {hour}h • 
                  </Typography>
                  <SvgIcon {...iconProps} sx={{ color : "rgba(102,102,102,1)", fontSize : "23px"}}>
                    {path}
                  </SvgIcon>
                </Stack>
              </Stack>
              <Stack>
                <IconButton >
                  <BsThreeDots />
                </IconButton>
              </Stack>
            </Stack>
            <PostContent quotes={quotes} />
            <PostFooter />
          </StyledPaper>
        )
      })}
    </Stack>
  )
};

export default Post;
