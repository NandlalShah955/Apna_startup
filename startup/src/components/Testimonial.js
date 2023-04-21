import React  from 'react'
import {
    Box,
    Flex,
    Heading,
    Text,
    Stack,
    Container,
    Avatar,
    useColorModeValue,
  } from '@chakra-ui/react';

  const Main = ({ children }) => {
    return <Box>{children}</Box>;
  };


  const TestimonialContent = ({ children }) => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'lg'}
        p={8}
        rounded={'xl'}
        align={'center'}
        pos={'relative'}
        _after={{
          content: `""`,
          w: 0,
          h: 0,
          borderLeft: 'solid transparent',
          borderLeftWidth: 16,
          borderRight: 'solid transparent',
          borderRightWidth: 16,
          borderTop: 'solid',
          borderTopWidth: 16,
          borderTopColor: useColorModeValue('white', 'gray.800'),
          pos: 'absolute',
          bottom: '-16px',
          left: '50%',
          transform: 'translateX(-50%)',
        }}>
        {children}
      </Stack>
    );
  };
  const TestimonialHeading = ({ children }) => {
    return (
      <Heading as={'h3'} fontSize={'xl'}>
        {children}
      </Heading>
    );
  };
  
  const TestimonialText = ({ children }) => {
    return (
      <Text
        textAlign={'center'}
        color={useColorModeValue('gray.600', 'gray.400')}
        fontSize={'sm'}>
        {children}
      </Text>
    );
  };
  
  const TestimonialAvatar = ({
    src,
    name,
    title,
  }) => {
    return (
      <Flex align={'center'} mt={8} direction={'column'}>
        <Avatar src={src} alt={name} mb={2} />
        <Stack spacing={-1} align={'center'}>
          <Text fontWeight={600}>{name}</Text>
          <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
            {title}
          </Text>
        </Stack>
      </Flex>
    );
  };




  function Testimonial() {
  return (
    <Box  margin={'auto'} width={'90%'} bg={useColorModeValue("red.100", "red.900")}   fontFamily={"Montserrat"} >
    <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
      <Stack spacing={0} align={'center'}>
        <Heading color={"#0e2b5c"} fontFamily={"Montserrat"}>Happy Clients equals to happy us</Heading>
        <Text color={'#0e2b5c'} fontFamily={'Montserrat'} fontSize={'md'} mt={'20px'}>We always thrive for the best and our clients feedback is what motivates us to achieve that extra mile.</Text>
      </Stack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        spacing={{ base: 10, md: 4, lg: 10 }}>
        <Main>
          <TestimonialContent>
            <TestimonialHeading>Efficient Collaborating</TestimonialHeading>
            <TestimonialText>
            It has been a pleasure working with Fleapo for both my websites. It was very well executed and they are very particular about their design quotient and also delivered my project on time.
          
           
            </TestimonialText>
          </TestimonialContent>
          <TestimonialAvatar
            src={
              'https://user-images.githubusercontent.com/101573792/232725339-e58f1117-6ae1-40fd-a774-eee467d16118.jpg'
            }
            name={'Aman Poddar'}
            title={'Founder of Must Help Foundation'}
          />
        </Main>
        <Main>
          <TestimonialContent>
            <TestimonialHeading>Intuitive Design</TestimonialHeading>
            <TestimonialText>
            Thanks to Fleapo's vibrant team, we got a platform to showcase our services completely through online marketing.
            </TestimonialText>
          </TestimonialContent>
          <TestimonialAvatar
            src={
              'https://media.licdn.com/dms/image/D4D03AQESqdWealcRnA/profile-displayphoto-shrink_400_400/0/1674200586091?e=1686787200&v=beta&t=hTEh_PzGC2G2n1zPMSxcAIoqro1His6IE1nLIjtF86c'
            }
            name={'Dibyanshu Srivastava'}
            title={'Software Developer at Bottom Funnel'}
          />
        </Main>
        <Main>
          <TestimonialContent>
            <TestimonialHeading>Mindblowing Service</TestimonialHeading>
            <TestimonialText>
            I had a wonderful experience working with Mr. Nandlal, his interaction was more on a personal level than a strict professional one. Even after the app was delivered to us, they were happy to incorporate a few last minute changes.
            </TestimonialText>
          </TestimonialContent>
          <TestimonialAvatar
            src={
              'https://user-images.githubusercontent.com/101573792/232724639-491b2199-588f-460b-b85b-095d0e267d2a.png'
            }
            name={'Surendar'}
            title={'Founder of MAK Documents'}
          />
        </Main>
      </Stack>
    </Container>
  </Box>
  )
}

export default Testimonial