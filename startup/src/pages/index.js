import React,{useState} from 'react'
import { Box, Flex,useDisclosure,Image,Heading,SimpleGrid,Stack,Button,Text,VStack,useBreakpointValue} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Plans from "../components/Plans"
import Testimonial from "../components/Testimonial"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function index() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <>
  <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      w="100%"
      p={6}
      bg="teal.500"
      color="white"
    >
      <Flex align="center">
        {/* <Link to="/"> */}
          <Box fontWeight="bold" fontSize="xl" letterSpacing="wide">
            My Website
          </Box>
        {/* </Link> */}
      </Flex>

      <Box display={{ base: "block", md: "none" }} onClick={isOpen ? onClose : onOpen}>
        {isOpen ? (
          <CloseIcon w={6} h={6} />
        ) : (
          <HamburgerIcon w={6} h={6} />
        )}
      </Box>

      <Flex
        align="center"
        justify={{ base: "center", md: "flex-end" }}
        direction={{ base: "column", md: "row" }}
        pt={{ base: 4, md: 0 }}
        display={{ base: isOpen ? "flex" : "none", md: "flex" }}
        width={{ base: "full", md: "auto" }}
      >
        {/* <Link to="/about"> */}
          <Box mt={{ base: 4, md: 0 }} mr={{ base: 0, md: 6 }}>
            About Us
          </Box>
        {/* </Link> */}
        {/* <Link to="/services"> */}
          <Box mt={{ base: 4, md: 0 }} mr={{ base: 0, md: 6 }}>
            Services
          </Box>
        {/* </Link> */}
        {/* <Link to="/contact"> */}
          <Box mt={{ base: 4, md: 0 }} mr={{ base: 0, md: 6 }}>
            Contact Us
          </Box>
        {/* </Link> */}
      </Flex>
    </Flex>

    <Flex
      w={'full'}
      h={'100vh'}
      backgroundImage={
        'url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)'
      }
      backgroundSize={'cover'}
      backgroundPosition={'center center'}>
      <VStack
        w={'full'}
        justify={'center'}
        px={useBreakpointValue({ base: 4, md: 8 })}
        bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
        <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
          <Text
            color={'white'}
            fontWeight={700}
            lineHeight={1.2}
            fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
            eiusmod tempor
          </Text>
          <Stack direction={'row'}>
            <Button
              bg={'blue.400'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'blue.500' }}>
              Show me more
            </Button>
            <Button
              bg={'whiteAlpha.300'}
              rounded={'full'}
              color={'white'}
              _hover={{ bg: 'whiteAlpha.500' }}>
              Show me more
            </Button>
          </Stack>
        </Stack>
      </VStack>
    </Flex>


<Heading noOfLines={1} textAlign='center' mt={'20px'} color={'green'}>Services Offered by us</Heading>
    

    <SimpleGrid  height={"auto"} width={'90%'} margin={'auto'} border='1px solid red' columns={[1,1,2,4]} spacing='40px' mt={'50px'}> 
  
    <Box bg='tomato' height='400px'></Box>
  <Box bg='tomato' height='400px'></Box>
  <Box bg='tomato' height='400px'></Box>
  <Box bg='tomato' height='400px'></Box>
  


    </SimpleGrid>
    
  
    <Plans/>
    



    <Carousel responsive={responsive}>
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <div>Item 4</div>
</Carousel>;




    
<Testimonial/>







    </>
   )
}

export default index;