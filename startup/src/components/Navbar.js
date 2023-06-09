import React from 'react'

import {Flex,Box,useDisclosure} from "@chakra-ui/react"

import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";


function Navbar() {
  
  const { isOpen, onOpen, onClose } = useDisclosure();



  return (
    <>

<Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        w="100%"
        // h={"80px"}
        p={6}
        bg="#213059"
        color="white"
        fontFamily={"Montserrat"}
        position={"sticky"}
        overflow={"hidden"}
      zIndex={"999"}
      // top={'0'}
      cursor={"pointer"}
      >
        <Flex align="center">
          {/* <Link to="/"> */}
          <Box fontWeight="bold" fontSize="30px" letterSpacing="wide" >
            MustWeb
          </Box>
          {/* </Link> */}
        </Flex>

        <Box
          display={{ base: "block", md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        >
          {isOpen ? <CloseIcon w={6} h={6} /> : <HamburgerIcon w={6} h={6} />}
        </Box>

        <Flex
          align="center"
         mt={'-10px'}
          justify={{ base: "center", md: "flex-end" }}
          direction={{ base: "column", md: "row" }}
          pt={{ base: 4, md: 0 }}
          display={{ base: isOpen ? "flex" : "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          fontSize={"20px"}
        >
     
          <Box mt={{ base: 4, md: 0 }} mr={{ base: 0, md: 6 }} >
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            offset={-70}
          >
            About Us
          </ScrollLink>
          </Box>
        
          <Box mt={{ base: 4, md: 0 }} mr={{ base: 0, md: 6 }}>
          <ScrollLink
            to="services"
            smooth={true}
            duration={500}
            offset={-70}
          >
            Services
            
          </ScrollLink>
            
          </Box>


          <Box mt={{ base: 4, md: 0 }} mr={{ base: 0, md: 6 }}>
          <ScrollLink
            to="pricing"
            smooth={true}
            duration={500}
            offset={-70}
          >
            Pricing
            
          </ScrollLink>
            
          </Box>
         
          <Box mt={{ base: 4, md: 0 }} mr={{ base: 0, md: 6 }}>
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            offset={-70}
          >
            Projects
            
            
          </ScrollLink>
            
          </Box>

          <Box mt={{ base: 4, md: 0 }} mr={{ base: 0, md: 6 }}>
           
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
          >
           
            Contact Us
            
            
            
          </ScrollLink>
          </Box>
        
        </Flex>
      </Flex>

    </>
  )
}

export default Navbar
  