import React from 'react'
import { VStack, HStack, Input, Text, Button } from '@chakra-ui/react'

function RestSearch({cityName, setTextInput}) {
    function searchHandler(e){
        e.preventDefault();
        console.log(e);
        setTextInput(e.target.value);
    }

    function changeHandler(e){
        console.log(e.target.value);
    }

    return <form onSearch={searchHandler}>
        <VStack>
            <Text mt={5} fontSize="xx-large">Location</Text>
            <HStack>
                <Input onChange={changeHandler} variant="filled" placeholder="Enter city name..." />
                <Button variant="outline" colorScheme="teal">Search</Button>
            </HStack>
        </VStack>
    </form>;
}

export default RestSearch
