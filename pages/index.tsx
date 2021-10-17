import type { NextPage } from 'next';
import { GetStaticProps } from 'next';
import axios from 'axios';
import { Character } from 'interfaces';
import Post from 'components/cards/Post';


export const getStaticProps : GetStaticProps = async () => {
  const res =  await axios.get("https://thronesapi.com/api/v2/Characters");
  const characters: Character[] = res.data;

  const response =  await axios.get("https://game-of-thrones-quotes.herokuapp.com/v1/characters");
  const charactersWithQuotes: Character[] = response.data;

  const data: Character[] = [];

  characters.map(character => {
    charactersWithQuotes.map(withQuote => {
      if(character.firstName.toLowerCase() === withQuote.slug) {
        data.push({...character, quotes : withQuote.quotes})
      }
    })
  });


  return {
    props : { data }
  };
};

interface Props {
  data : Character[]
};

const Home: NextPage<Props> = ({data}) => {
  return <Post data={data} />
};

export default Home;
