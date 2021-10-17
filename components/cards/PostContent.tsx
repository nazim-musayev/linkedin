import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import React, { useState, useEffect, FC } from 'react';
import Image from 'next/image';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

  
const variants = {
  initial: {
    marginLeft: "1px",
  },
  animate: {
    opacity: 1,
    marginLeft: "1px",
    y: [0,-5,5,0],
    transition: {
      type: "spring",  
      duration : 0.7,
      bounce: 0,
      delay: 1
    },
  }
};

interface Props {
  quotes: string[]
}

const PostContent: FC<Props> = ({quotes}) => {
  const imgs: string[] = ["8ekq8gho1ruaf8i7f86vd1ftt","b1dl5jk88euc7e9ri50xy5qo8","cpho5fghnpme8epox8rdcds22",];
  const [reactions, setReactions] = useState<number | null>(null);
  const [comments, setComments] = useState<number | null>(null);
  const controls = useAnimation();
  const {ref, inView} = useInView();

  useEffect(() => {
    setReactions(Math.round(Math.random()*100 + 1));
    setComments(Math.round(Math.random()*10 + 1));
  }, []);

  useEffect(() => {
    if(inView) {
      controls.start("animate");
    }
  }, [controls, inView]);

  return (
    <Stack spacing={1}>
      <Typography variant="caption" p={1}>
        {quotes[0]}
      </Typography>
      <Stack position="relative" height={300}>
        <Image src="/got.jpg" alt="GOT" layout="fill" objectFit="cover" placeholder="blur" blurDataURL="/got.jpg" />
      </Stack>
      <Stack direction="row" spacing={1} px={2}>
        {imgs.map((src, index) => (
          <motion.div key={index} ref={ref} variants={variants} initial="initial" animate={controls}>
            <Image src={`https://static-exp1.licdn.com/sc/h/${src}`} 
             alt="reactions" width={15} height={15} layout="fixed" 
            />
          </motion.div>
        ))}
        <Typography color="textSecondary" variant="subtitle2" fontSize="12px">
          {reactions} • {comments} comments
        </Typography>
      </Stack>
      <Divider variant="middle" />
    </Stack>
  )
};

export default PostContent;
