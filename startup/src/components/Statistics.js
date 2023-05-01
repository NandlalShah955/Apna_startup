import React,{useState,useEffect} from 'react'
import {
    Box,
    chakra,
    Flex,
    SimpleGrid,
    Stat,
    StatLabel,
    StatNumber,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { BsPerson } from 'react-icons/bs';
  import { FiServer } from 'react-icons/fi';
  import { GoLocation } from 'react-icons/go';
  import CountUp from "react-countup";
  import ScrollTrigger from "react-scroll-trigger";

  function StatsCard(props) {
    const { title, stat, icon } = props;
    return (
      <Stat
        px={{ base: 2, md: 4 }}
        py={'5'}
        shadow={'xl'}
        border={'1px solid'}
        borderColor={useColorModeValue('gray.800', 'gray.500')}
        rounded={'lg'}>
        <Flex justifyContent={'space-between'}>
          <Box pl={{ base: 2, md: 4 }}>
            <StatLabel fontWeight={'medium'} isTruncated>
              {title}
            </StatLabel>
            <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
              {stat}
            </StatNumber>
          </Box>
          <Box
            my={'auto'}
            color={useColorModeValue('gray.800', 'gray.200')}
            alignContent={'center'}>
            {icon}
          </Box>
        </Flex>
      </Stat>
    );
  }

function Statistics() {
 const [counter, setcounter] = useState(false);
  
   return (
    <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
      <chakra.h1
        textAlign={'center'}
        fontSize={'4xl'}
        py={10}
        fontWeight={'bold'}
        fontFamily={"Montserrat"}
        >
        What is our company doing?
      </chakra.h1>
    <ScrollTrigger onEnter={()=>setcounter(true)} onExit={()=>setcounter(false)}>

      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}    fontFamily={"Montserrat"}>
        <StatsCard
          title={'Customers'}
          stat={counter && <CountUp start={0} end={100} duration={5} delay={0}/>}
          icon={<BsPerson size={'3em'} />}
        />
        
        <StatsCard
          title={'Projects'}
          stat={counter && <CountUp start={0} end={10} duration={5} 
          delay={0}/>}
          icon={<FiServer size={'3em'} />}
        />
        <StatsCard
          title={'Lead Generated'}
          stat={counter && <CountUp start={0} end={10000} duration={5} 
          delay={0}/>}
          icon={<GoLocation size={'3em'} />}
        />
      </SimpleGrid>

    </ScrollTrigger>
    
    </Box>
  )
}

export default Statistics