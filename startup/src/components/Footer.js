import React from 'react'
import {
    Box,
    chakra,
    Container,
    Heading,
    Stack,
    Text,
    useColorModeValue,
    VisuallyHidden,
  } from '@chakra-ui/react';
  import { FaInstagramSquare,FaWhatsappSquare } from 'react-icons/fa';
  import { BsWhatsapp } from 'react-icons/bs';
  import Link from 'next/link';

  import style from "../styles/Home.module.css"

  
  const SocialButton = ({
    children,
    label,
    href,
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };

  




  
  function Footer() {
    const Phonenum="8448674560"
    const message = encodeURIComponent('Hello, I want to use your services of MustWeb');
    return (
    <Box
    bg={useColorModeValue('gray.50', 'gray.900')}
    color={useColorModeValue('gray.700', 'gray.200')}>
    <Container
      as={Stack}
      maxW={'6xl'}
      py={4}
      spacing={4}
      justify={'center'}
      align={'center'}>

      <Heading>MUSTWEB</Heading>
      <Stack direction={'row'} spacing={6}>
        <Link href={'#'}>Home</Link>
        <Link href={'#'}>About</Link>
        <Link href={'#'}>Blog</Link>
        <Link href={'#'}>Contact:8448674560</Link>
      </Stack>
    </Container>

    <Box
      borderTopWidth={1}
      borderStyle={'solid'}
      borderColor={useColorModeValue('gray.200', 'gray.700')}>
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}>
        <Text color={"black"}>© 2022 MustWeb All rights reserved</Text>
        <Stack direction={'row'} spacing={6}>
         <Link href={'https://www.instagram.com/must_web789/'}>


          
            <FaInstagramSquare color={"#833AB4"} fontSize={"60px"}/>
       
         </Link>
         <Link href={`https://wa.me/${Phonenum}?text=${message}`}>

            <FaWhatsappSquare color={"green"} fontSize={"60px"}/>
         </Link>
         
        
          
        
        </Stack>
      </Container>
    </Box>
  
  <Stack position={'fixed'} bottom={'60px'} right={'50px'} zIndex={'999'} bg={"#25D366"}>
<Link href={`https://wa.me/${Phonenum}?text=${message}`}>

  <BsWhatsapp color={"white"}  fontSize={"70px"} className={style.hover}/>
</Link>
  </Stack>
  </Box>
  )
}

export default Footer