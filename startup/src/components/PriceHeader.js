import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Grid,
  GridItem,
  Heading,
  List,
  ListIcon,
  ListItem,
  Text,
} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import { AiFillCloseCircle } from "react-icons/ai";

const pricingData = [
  {
    symbol: "USD",
    m1a: 25,

    m2a: 48,

    m3a: 122,
    m4a: 244,
  },
  {
    symbol: "EUR",
    m1a: 23,

    m2a: 45,

    m3a: 112,
    m4a: 223,
  },
  {
    symbol: "GBP",
    m1a: 20,

    m2a: 40,

    m3a: 98,
    m4a: 195,
  },
  {
    symbol: "AUD",
    m1a: 37,

    m2a: 73,

    m3a: 182,
    m4a: 364,
  },
  {
    symbol: "CAD",
    m1a: 34,

    m2a: 67,

    m3a: 166,
    m4a: 331,
  },
  {
    symbol: "INR",
    m1a: 2000,

    m2a: 4000,

    m3a: 10000,
    m4a: 20000,
  },
];

function PriceHeader() {
  const data = pricingData[0];
  const [price, setPrice] = useState(data);

  return (
    <>
      <Box w="80%" m="50px auto"  fontFamily={"Montserrat"}>
        <Heading
          color={"#0e2b5c"}
          fontSize={{ base: "4xl", md: "5xl" }}
          fontFamily={"Montserrat"}
        >
          Find a plan that's right for you
        </Heading>
        <Text fontSize="2xl" m="20px 0px">
          Or simply leverage the expertise of our consultation team.
        </Text>
        <Flex m="10px 0px" gridGap={"10"}>
          <Box>
            <Button
              m="5px"
              bg="#6D00C1"
              colorScheme="#b766ff"
              color="white"
              onClick={() => {
                setPrice(pricingData[0]);
              }}
            >
              USD
            </Button>
            <Button
              m="5px"
              bg="#6D00C1"
              colorScheme="#b766ff"
              color="white"
              onClick={() => {
                setPrice(pricingData[1]);
              }}
            >
              EUR
            </Button>
            <Button
              m="5px"
              bg="#6D00C1"
              colorScheme="#b766ff"
              color="white"
              onClick={() => {
                setPrice(pricingData[2]);
              }}
            >
              GBP
            </Button>
            <Button
              m="5px"
              bg="#6D00C1"
              colorScheme="#b766ff"
              color="white"
              onClick={() => {
                setPrice(pricingData[3]);
              }}
            >
              AUD
            </Button>
            <Button
              m="5px"
              bg="#6D00C1"
              colorScheme="#b766ff"
              color="white"
              onClick={() => {
                setPrice(pricingData[4]);
              }}
            >
              CAD
            </Button>
            <Button
              m="5px"
              bg="#6D00C1"
              colorScheme="#b766ff"
              color="white"
              onClick={() => {
                setPrice(pricingData[5]);
              }}
            >
              INR
            </Button>
          </Box>
        </Flex>
        <Grid
          templateColumns={{ base: "repeat(1, 1fr)", md: "repeat(4, 1fr)" }}
          gap={6}
        >
          <GridItem w="100%" boxShadow="lg" p="20px">
            <Text fontSize="2xl" fontWeight="bold">
              Individual
            </Text>
            <Text>
              For early-stage startups that want to spend more time developing
              and less on manual operations.
            </Text>
          </GridItem>
          <GridItem w="100%" boxShadow="lg" p="20px">
            <Text fontSize="2xl" fontWeight="bold">
            Startup
            </Text>
            <Text>
              For agile startups that want to grow their revenue with quick
              experiments and data-driven decision making.
            </Text>
          </GridItem>
          <GridItem w="100%" boxShadow="lg" p="20px">
            <Text fontSize="2xl" fontWeight="bold">
              Scale
            </Text>
            <Text>
              For fast-growth scaleups that want to grow by maximizing
              efficiencies in their revenue operations.
            </Text>
          </GridItem>
          <GridItem w="100%" boxShadow="lg" p="20px">
            <Text fontSize="2xl" fontWeight="bold">
              Enterprise
            </Text>
            <Text>
              For large businesses looking for enterprise-class compliance while
              diversifying revenue streams.
            </Text>
          </GridItem>
        </Grid>

        <Grid
          m="20px 0px"
          gridGap={"5"}
          templateColumns={{ base: "repeat(1,1fr)", lg: "repeat(4,1fr)" }}
        >
          {/* first */}
          <GridItem w="100%" boxShadow="lg" p="20px">
            <Text fontSize="sm" fontWeight="bold" color="#6D00C1">
              {price.symbol}
            </Text>
            <Text m="10px 0px" fontSize="2xl" fontWeight="bold">
              {price.m1a}
            </Text>

            <Button p="20px" bg="#6D00C1" colorScheme="#b766ff" color="white">
              Get Started For Free
            </Button>
            <Text m="20px 0px" fontWeight="bold">
              All you need to get started
            </Text>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="#6D00C1" />
                Single Page Website
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="#6D00C1" />
                Responsive
              </ListItem>
              <ListItem>
                <ListIcon as={AiFillCloseCircle} color="red" />
                Dynamic CSS Effects
              </ListItem>
              <ListItem>
                <ListIcon as={AiFillCloseCircle} color="red" />
                Contact Form & Email
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="#6D00C1" />
                Images and Videos
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="#6D00C1" />3 Month Support
              </ListItem>
            </List>
          </GridItem>

          {/* second */}
          <GridItem w="100%" boxShadow="lg" p="20px">
            <Text fontSize="sm" fontWeight="bold" color="#6D00C1">
              {price.symbol}
            </Text>
            <Text m="10px 0px" fontSize="2xl" fontWeight="bold">
              {price.m2a}
            </Text>

            <Button p="20px" bg="#6D00C1" colorScheme="#b766ff" color="white">
              Schedule a demo{" "}
            </Button>
            <Text m="20px 0px" fontWeight="bold">
              Everything in Launch{" "}
            </Text>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="#6D00C1" />5 Pages Wesbite
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="#6D00C1" />
                Responsive
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="#6D00C1" />
                User Login/Signup
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="#6D00C1" />
                Proper Database
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="#6D00C1" />
                Dynamic CSS Effects
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="#6D00C1" />6 Month Support
              </ListItem>
            </List>
          </GridItem>

          {/* third */}
          <GridItem w="100%" boxShadow="lg" p="20px">
            <Text fontSize="sm" fontWeight="bold" color="#6D00C1">
              {price.symbol}
            </Text>
            <Text m="10px 0px" fontSize="2xl" fontWeight="bold">
              {price.m3a}
            </Text>

            <Button p="20px" bg="#6D00C1" colorScheme="#b766ff" color="white">
              Schedule a demo{" "}
            </Button>
            <Text m="20px 0px" fontWeight="bold">
              Everything in Rise{" "}
            </Text>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="#6D00C1" />9 Pages Website
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="#6D00C1" />
                Responsive
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="#6D00C1" />
                Payment Integration
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="#6D00C1" />
                Contact Form & Email
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="#6D00C1" />
                User Login/Signup With Authentication
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="#6D00C1" />
                SEO Optimization
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="#6D00C1" />9 Month Support
              </ListItem>
            </List>
          </GridItem>

          {/* fourth */}
          <GridItem w="100%" boxShadow="lg" p="20px">
            <Text fontSize="sm" fontWeight="bold" color="#6D00C1">
              {price.symbol}
            </Text>
            <Text m="10px 0px" fontSize="2xl" fontWeight="bold">
              {price.m4a}
            </Text>
            <Button p="20px" bg="#6D00C1" colorScheme="#b766ff" color="white">
              Schedule a demo{" "}
            </Button>
            <Text m="20px 0px" fontWeight="bold">
              Everything in Scale
            </Text>
            <List spacing={3}>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="#6D00C1" />
                15 pages Website
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="#6D00C1" />
                Admin Panel
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="#6D00C1" />
                Payment Integration With Razorpay
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="#6D00C1" />
                User Login/Signup With Authentication
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="#6D00C1" />
                Responsive
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="#6D00C1" />
                SEO Optimization
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color="#6D00C1" />1 Year Support
              </ListItem>
            </List>
          </GridItem>
        </Grid>
      </Box>
    </>
  );
}

export default PriceHeader;
