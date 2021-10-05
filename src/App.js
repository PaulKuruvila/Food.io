import { Heading, VStack, IconButton, Text } from '@chakra-ui/react';
import RestCriteria from './components/RestCriteria';
import RestSearch from './components/RestSearch';
import {FaSun, FaMoon} from 'react-icons/fa';
import {useState} from 'react';

function App() {
  
  const [cityName, setTextInput] = useState("");

  return (
    <VStack p={5}>
      <IconButton icon={ <FaSun /> } isRound='true' size="lg" alignSelf="flex-end"/>
      <Heading mb="8" fontFamily="Copperplate, cursive" size="3xl" bgGradient='linear(to-b, green.300, green.200, blue.300)' bgClip="text">Food.io</Heading>;
      <RestCriteria />
      <RestSearch cityName={cityName} setTextInput={setTextInput} />
    </VStack>
  );
}

export default App;
