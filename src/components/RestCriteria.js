import React from 'react'
import { VStack, HStack, Text, IconButton, Stack, StackDivider } from '@chakra-ui/react'
import { FaPizzaSlice, FaCheck, FaDollarSign, FaShoePrints, FaUtensils, FaGlobe } from 'react-icons/fa';
import {Input} from '@chakra-ui/react'

function RestCriteria() {
    const criteria = [
        {
            id:1,
            body: <Text fontStyle=''>Price Range</Text>,
            options: 
                <ul>
                    <h1><IconButton mr={2} size='sm' icon={<FaDollarSign/>}/>$0.00 - $5.00</h1>
                    <h1><IconButton mr={2} mt={2} size='sm' icon={<FaDollarSign/>}/>$5.00 - $10.00</h1>
                    <h1><IconButton mr={2} mt={2} size='sm' icon={<FaDollarSign/>}/>$10.00 - $20.00</h1>
                    <h1><IconButton mr={2} mt={2} size='sm' icon={<FaDollarSign/>}/>$20.00 - $35.00</h1>
                    <h1><IconButton mr={2} mt={2} size='sm' icon={<FaDollarSign/>}/>$35.00 +</h1>
                </ul>,
        },
        {
            id:2,
            body: 'Distance',
            options:
            <ul>
                <h1><IconButton mr={2} size='sm' icon={<FaShoePrints/>}/>5-10 min.</h1>
                <h1><IconButton mr={2} mt={2} size='sm' icon={<FaShoePrints/>}/>15-30 min.</h1>
                <h1><IconButton mr={2} mt={2} size='sm' icon={<FaShoePrints/>}/>30-45 min.</h1>
                <h1><IconButton mr={2} mt={2} size='sm' icon={<FaShoePrints/>}/>45 min. +</h1>
            </ul>,
        },
        {
            id:3,
            body: 'Setting',
            options:
            <ul>
                <h1><IconButton mr={2} size='sm' icon={<FaUtensils/>}/>Takeout</h1>
                <h1><IconButton mr={2} mt={2} size='sm' icon={<FaUtensils/>}/>Delivery</h1>
                <h1><IconButton mr={2} mt={2} size='sm' icon={<FaUtensils/>}/>Dine-In</h1>
            </ul>,
        },
        /*{
            id:4,
            body: 'Location',
            options:
            <ul>
                <h1><IconButton mr={2} size='sm' icon={<FaCheck/>}/>$0.00 - $5.00</h1>
                <h1><IconButton mr={2} mt={2} size='sm' icon={<FaCheck/>}/>$5.00 - $10.00</h1>
                <h1><IconButton mr={2} mt={2} size='sm' icon={<FaCheck/>}/>$10.00 - $20.00</h1>
                <h1><IconButton mr={2} mt={2} size='sm' icon={<FaCheck/>}/>$20.00 - $35.00</h1>
                <h1><IconButton mr={2} mt={2} size='sm' icon={<FaCheck/>}/>$35.00 +</h1>
            </ul>,
            icon: {FaGlobe},
        }*/
    ];
    return <VStack>
        <HStack spacing="100px" mt={10} divider={<StackDivider />} borderColor='blackAlpha.100' borderWidth='10px' p='4' borderRadius="xl" maxWidth={{base:'70vw', sm: '70vw', lg:'80vw', xl: '90vw'}}>
            {criteria.map(choice => (
                <VStack spacing="10px">
                    <Text fontFamily="Arial" fontStyle="bold" bgGradient='linear(to-r,)'>{choice.body}</Text>
                    <HStack>
                        <Text>{choice.options}</Text>
                    </HStack>
                </VStack>
            ))}
        </HStack>
    </VStack>;
}

export default RestCriteria
