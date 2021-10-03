import { IconButton } from "@chakra-ui/button";
import { Flex, VStack, Heading } from "@chakra-ui/layout";

function App() {

  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading 
          ml="8" fontWeight='semibold' color='limegreen'>My name is Paul.</Heading>
      </Flex>
      <IconButton background="limegreen" isRound="true"></IconButton>
    </VStack>
  );
}

export default App;
