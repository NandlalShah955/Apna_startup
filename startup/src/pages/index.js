import React, { useState } from "react";
import {
  Box,
  Flex,
  useDisclosure,
  Image,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  Center,
  useColorModeValue,
  useBreakpointValue,FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  useToast,Select

} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Footer from "../components/Footer"
import styles from "../styles/Home.module.css";
import Plans from "../components/Plans";
import Testimonial from "../components/Testimonial";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function index() {
  const IMAGE =
    "https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80";
  const { isOpen, onOpen, onClose } = useDisclosure();
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const toast = useToast();

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Add form submission logic here
    // Display success message using `toast`
    toast({
      title: "Message sent",
      description: "We'll get back to you as soon as possible.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    // Reset form fields
    setName("");
    setEmail("");
    setMessage("");
  };

  const inputBg = useColorModeValue("white", "gray.800");
  const inputBorderColor = useColorModeValue("gray.200", "gray.600");

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

        <Box
          display={{ base: "block", md: "none" }}
          onClick={isOpen ? onClose : onOpen}
        >
          {isOpen ? <CloseIcon w={6} h={6} /> : <HamburgerIcon w={6} h={6} />}
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
        w={"full"}
        h={"100vh"}
        backgroundImage={
          "url(https://images.unsplash.com/photo-1600267175161-cfaa711b4a81?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)"
        }
        backgroundSize={"cover"}
        backgroundPosition={"center center"}
      >
        <VStack
          w={"full"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={"linear(to-r, blackAlpha.600, transparent)"}
        >
          <Stack maxW={"2xl"} align={"flex-start"} spacing={6}>
            <Text
              color={"white"}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: "3xl", md: "4xl" })}
            >
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod tempor
            </Text>
            <Stack direction={"row"}>
              <Button
                bg={"blue.400"}
                rounded={"full"}
                color={"white"}
                _hover={{ bg: "blue.500" }}
              >
                Show me more
              </Button>
              <Button
                bg={"whiteAlpha.300"}
                rounded={"full"}
                color={"white"}
                _hover={{ bg: "whiteAlpha.500" }}
              >
                Show me more
              </Button>
            </Stack>
          </Stack>
        </VStack>
      </Flex>

      <Heading noOfLines={1} textAlign="center" mt={"30px"} mb={"-30px"} color={"#0e2b5c"} fontFamily={"Montserrat"} >
        Services Offered by us
      </Heading>

      <SimpleGrid
        height={"auto"}
        width={"95%"}
        margin={"auto"}
        border="1px solid red"
        columns={[1, 1, 2, 4]}
        spacing="40px"
        mt={"50px"}
      >
        <Center py={12}>
          <Box
            role={"group"}
            p={6}
            maxW={"330px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"lg"}
            pos={"relative"}
            zIndex={1}
          >
            <Box
              rounded={"lg"}
              mt={-12}
              pos={"relative"}
              height={"230px"}
              _after={{
                transition: "all .3s ease",
                content: '""',
                w: "full",
                h: "full",
                pos: "absolute",
                top: 5,
                left: 0,
                backgroundImage:
                  "https://th.bing.com/th/id/OIP.hj8U1UUvIz4n_w9Rc0IPvwHaDG?w=290&h=146&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                filter: "blur(15px)",
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: "blur(20px)",
                },
              }}
            >
              <Image
                rounded={"lg"}
                height={230}
                width={282}
                objectFit={"cover"}
                src={
                  "https://th.bing.com/th/id/OIP.hj8U1UUvIz4n_w9Rc0IPvwHaDG?w=290&h=146&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                }
              />
            </Box>
            <Stack pt={10} align={"center"}>
              <Heading fontSize={"2xl"} fontFamily={"Montserrat"} fontWeight={500} color={'#0e2b5c'}>
                Web Development
              </Heading>
              <Stack direction={"row"} align={"center"}>
                <Text fontWeight={400} fontSize={"17px"} fontFamily={'Anuphan'} >
                  Design unique and impactful website
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Center>
        <Center py={12}>
          <Box
            role={"group"}
            p={6}
            maxW={"330px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"lg"}
            pos={"relative"}
            zIndex={1}
          >
            <Box
              rounded={"lg"}
              mt={-12}
              pos={"relative"}
              height={"230px"}
              _after={{
                transition: "all .3s ease",
                content: '""',
                w: "full",
                h: "full",
                pos: "absolute",
                top: 5,
                left: 0,
                backgroundImage:
                  "https://th.bing.com/th/id/OIP.Jpk_uCdz-xeockMn8KC-cgHaEa?w=285&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                filter: "blur(15px)",
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: "blur(20px)",
                },
              }}
            >
              <Image
                rounded={"lg"}
                height={230}
                width={282}
                objectFit={"cover"}
                src={
                  "https://th.bing.com/th/id/OIP.Jpk_uCdz-xeockMn8KC-cgHaEa?w=285&h=185&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                }
              />
            </Box>
            <Stack pt={10} align={"center"}>
              <Heading fontSize={"2xl"} fontFamily={"Montserrat"} fontWeight={500} color={'#0e2b5c'} noOfLines={'1'}>
                 App Development
              </Heading>
              <Stack direction={"row"} align={"center"}>
                <Text fontWeight={500} fontSize={"17px"} fontFamily={'Anuphan'} >
                  Build Interactive Mobile application
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Center>

        <Center py={12}>
          <Box
            role={"group"}
            p={6}
            maxW={"330px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"lg"}
            pos={"relative"}
            zIndex={1}
          >
            <Box
              rounded={"lg"}
              mt={-12}
              pos={"relative"}
              height={"230px"}
              _after={{
                transition: "all .3s ease",
                content: '""',
                w: "full",
                h: "full",
                pos: "absolute",
                top: 5,
                left: 0,
                backgroundImage: `https://th.bing.com/th/id/OIP.8SlnagLsSE3YRHJUM8mgyAHaEN?w=331&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7`,
                filter: "blur(15px)",
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: "blur(20px)",
                },
              }}
            >
              <Image
                rounded={"lg"}
                height={230}
                width={282}
                objectFit={"cover"}
                src={
                  "https://th.bing.com/th/id/OIP.8SlnagLsSE3YRHJUM8mgyAHaEN?w=331&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                }
              />
            </Box>
            <Stack pt={10} align={"center"}>
              <Heading fontSize={"2xl"} fontFamily={"Montserrat"} fontWeight={500} color={'#0e2b5c'}>
                Digital Marketing
              </Heading>
              <Stack direction={"row"} align={"center"}>
                <Text fontWeight={400} fontSize={"17px"} fontFamily={'Anuphan'} >
                  Drive Measurable Business Results
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Center>
        <Center py={12}>
          <Box
            role={"group"}
            p={6}
            maxW={"330px"}
            w={"full"}
            bg={useColorModeValue("white", "gray.800")}
            boxShadow={"2xl"}
            rounded={"lg"}
            pos={"relative"}
            zIndex={1}
          >
            <Box
              rounded={"lg"}
              mt={-12}
              pos={"relative"}
              height={"230px"}
              _after={{
                transition: "all .3s ease",
                content: '""',
                w: "full",
                h: "full",
                pos: "absolute",
                top: 5,
                left: 0,
                backgroundImage:
                  "https://th.bing.com/th/id/OIP.hpSrhRsvGZl3SrCok4Ce5wHaD5?w=290&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
                filter: "blur(15px)",
                zIndex: -1,
              }}
              _groupHover={{
                _after: {
                  filter: "blur(20px)",
                },
              }}
            >
              <Image
                rounded={"lg"}
                height={230}
                width={282}
                objectFit={"cover"}
                src={
                  "https://th.bing.com/th/id/OIP.hpSrhRsvGZl3SrCok4Ce5wHaD5?w=290&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
                }
              />
            </Box>
            <Stack pt={10} align={"center"}>
              <Heading fontSize={"2xl"} fontWeight={500} color={'#0e2b5c'} fontFamily={'Montserrat'}>
                On Demand Services
              </Heading>
              <Stack direction={"row"} align={"center"}>
                <Text fontWeight={400} fontSize={"17px"} fontFamily={'Anuphan'} >
                  Develop On Demand Services
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Center>
      </SimpleGrid>

      <Plans />

      <Heading noOfLines={1} textAlign="center" color={"#0e2b5c"} fontFamily={"Montserrat"} >
      Brilliance is what our projects deliver
      </Heading>
      <Stack width="95%"  margin={"auto"} mt={"30px"}>
        <Carousel responsive={responsive}>
          <div className={styles.coorosel}>
            <img
              src="https://nandlalshah955.github.io/stuff/images/Chargbee.png"
              alt=""
            />
          <h1>Chargbee Website</h1>
            <p>
            Chargebee is the subscription billing and revenue management platform that lets you solve for your today, and scale for your tomorrow.
            </p>
          </div>
          <div className={styles.coorosel}>
            <img
              src="https://nandlalshah955.github.io/stuff/images/Skinstore.png"
              alt=""
            />
          <h1>Blossom Website</h1>
            <p>
            SkinStore is the online hub where beauty and science click, delivering the latest in innovative clinical skincare and luxury products for over 20 years.
            </p>
          </div>
          <div className={styles.coorosel}>
            <img
              src="https://nandlalshah955.github.io/stuff/images/Best-BUy-screenshot.png"
              alt=""
            />
          <h1>BestBuy Website</h1>
            <p>
            Best Buy is an E-commerce website in this website we can purchase various products like Beauty Products , Dresses , Women Clothes and Accessories.
            </p>
          </div>
          <div className={styles.coorosel}>
            <img
              src="https://nandlalshah955.github.io/stuff/images/BlueMercury%20screenshot.png"
              alt=""
            />
          <h1>BlueMercury Website</h1>
            <p>
            A leader in luxury beauty and skincare, Purpose of BlueMercury is to create an inviting online beauty shopping experience.
            </p>
          </div>
        </Carousel>
        ;
      </Stack>

      <Testimonial />

      







      <Footer />
    </>
  );
}

export default index;
