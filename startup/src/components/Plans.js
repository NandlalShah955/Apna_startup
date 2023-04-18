import React,{ ReactNode } from 'react'
import {
    Box,
    Stack,
    HStack,
    Heading,
    Text,
    VStack,
    useColorModeValue,
    List,
    ListItem,
    ListIcon,
    Button,
  } from '@chakra-ui/react';
  import { FaCheckCircle } from 'react-icons/fa';


  function PriceWrapper({ children }) {
    return (
      <Box
    
        mb={4}
        shadow="base"
        borderWidth="1px"
        alignSelf={{ base: 'center', lg: 'flex-start' }}
        borderColor={useColorModeValue('gray.200', 'gray.500')}
        borderRadius={'xl'}>
        {children}
      </Box>
    );
  }






function Plans() {
  return (
    <Box py={12}>
    <VStack spacing={2} textAlign="center">
      <Heading as="h1" fontSize="4xl"   id='pricing'>
        Our Plans that fit your need
      </Heading>
    </VStack>
    <Stack
      direction={{ base: 'column', md: 'row' }}
      textAlign="center"
      justify="center"
      spacing={{ base: 4, lg: 10 }}
      py={10}>
      <PriceWrapper>
        <Box py={4} px={12}>
          <Text fontWeight="500" fontSize="2xl">
            Mobile App Development
          </Text>
          <HStack justifyContent="center">
            <Text fontSize="3xl" fontWeight="600">
              Rs
            </Text>
            <Text fontSize="5xl" fontWeight="900">
              5000 only
            </Text>
           
          </HStack>
        </Box>
        <VStack
          bg={useColorModeValue('gray.50', 'gray.700')}
          py={4}
          borderBottomRadius={'xl'}>
          <List spacing={3} textAlign="start" px={12}>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              Amazing Landing page
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              2+ additional Pages
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
             Login/Signup       
                  </ListItem>
                  <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              Best User Interface      
                  </ListItem>
          </List>
          <Box w="80%" pt={7}>
            <Button w="full" colorScheme="red" variant="outline">
              Select
            </Button>
          </Box>
        </VStack>
      </PriceWrapper>

      <PriceWrapper>
        <Box position="relative">
          <Box
            position="absolute"
            top="-16px"
            left="50%"
            style={{ transform: 'translate(-50%)' }}>
            <Text
              textTransform="uppercase"
              bg={useColorModeValue('red.300', 'red.700')}
              px={3}
              py={1}
              color={useColorModeValue('gray.900', 'gray.300')}
              fontSize="sm"
              fontWeight="600"
              rounded="xl">
              Most Popular
            </Text>
          </Box>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
             Web Development
            </Text>
            <HStack justifyContent="center">
              <Text fontSize="3xl" fontWeight="600">
                Rs.
              </Text>
              <Text fontSize="5xl" fontWeight="900">
                4000 only
              </Text>
              
            </HStack>
          </Box>
          <VStack
            bg={useColorModeValue('gray.50', 'gray.700')}
            py={4}
            borderBottomRadius={'xl'}>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
               Simple Landing Page
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
               Static Content
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
               Login/Signup Page
                             </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
               Web Hoisting
              </ListItem>
              <ListItem>
                <ListIcon as={FaCheckCircle} color="green.500" />
               Domain According to your choice
              </ListItem>
            </List>
            <Box w="80%" pt={7}>
              <Button w="full" colorScheme="red">
                Select
              </Button>
            </Box>
          </VStack>
        </Box>
      </PriceWrapper>
      <PriceWrapper>
        <Box py={4} px={12}>
          <Text fontWeight="500" fontSize="2xl">
           Digital Marketing
          </Text>
          <HStack justifyContent="center">
            <Text fontSize="3xl" fontWeight="600">
              Rs
            </Text>
            <Text fontSize="5xl" fontWeight="900">
              3000 only
            </Text>
            
          </HStack>
        </Box>
        <VStack
          bg={useColorModeValue('gray.50', 'gray.700')}
          py={4}
          borderBottomRadius={'xl'}>
          <List spacing={3} textAlign="start" px={12}>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
            Google Adsene
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              Search Engine Optimization
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              Social Media Marketing
            </ListItem>
            <ListItem>
              <ListIcon as={FaCheckCircle} color="green.500" />
              Copywriting and Content Marketing
            </ListItem>
          </List>
          <Box w="80%" pt={7}>
            <Button w="full" colorScheme="red" variant="outline">
              Select
            </Button>
          </Box>
        </VStack>
      </PriceWrapper>
    </Stack>
  </Box> 
  )
}






export default Plans

