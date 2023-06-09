import React, { useState } from "react";
import {
  Image,
  SimpleGrid,
  Stack,
  VStack,
  Center,
  useColorModeValue,
  Button,
  useToast,
  Flex,
  Box,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useBreakpointValue
} from "@chakra-ui/react";
import Navbar from '../components/Navbar'
import emailjs from 'emailjs-com';
import {  PhoneIcon } from "@chakra-ui/icons";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import Plans from "../components/Plans";
import Statistics from "../components/Statistics";
import Testimonial from "../components/Testimonial";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Typewriter from "typewriter-effect";
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import Pricemodal from "../components/Pricemodal"

function index() {
 const [details, setdetails] = useState({})
 const toast = useToast();

  
 const handlechange=(e)=>{
 const {name,value}=e.target;
 setdetails({
  ...details,
  [name]:value,
 })
}

const handlesubmit=()=>{
  if (!details.name ||!details.email ||!details.telephone ||!details.message) {
    toast({
      title: "All fields are mandatory",
      description: "Please fill all the details",
      status: "error",
      duration: 4000,
      isClosable: true,
    });
  } else {
    toast({
      title: `Thankyou For contacting us ${details.name} `,
      description: "We will get back to you soon.",
      status: "success",
      duration: 4000,
      isClosable: true,
    });
    setdetails("")
    emailjs.send('service_4xaun0y', 'template_327lv4h',  details,'j654_TwoZCwNnje04')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  }
}

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
  const imageUrl = 'https://chakra-templates.dev/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1515378791036-0648a3ef77b2%3Fixid%3DMXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%253D%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D1350%26q%3D80&w=1200&q=75';

  const showImage = useBreakpointValue({ base: false, md: true, lg: true });

  


  return (
    <>
     
<Navbar/>
{/*  */}
      <Flex
      id="about"
        w={"full"}
        h={"100vh"}
        backgroundImage={
          "url(https://user-images.githubusercontent.com/101573792/235410693-3855e274-9cf7-4f55-83db-280b6f52eb43.jpg)"
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
          <Stack maxW={"2xl"} align={"center"} spacing={6} color={"white"}
              fontWeight={700}
              lineHeight={1}
              fontSize={useBreakpointValue({ base: "50px", md: "4xl",lg:"70px"})}>
           <Typewriter
            options={{
        
         
          loop: true,
        }}
            onInit={(typewriter)=>{
              typewriter
              .typeString("Best Digital Marketing & Web Development Agency")
              .pauseFor(2000)
              .deleteAll()
              .typeString("Creative and Innovative Digital Solution")
              .pauseFor(2000)
              .deleteAll()
              .typeString("Let us handle marketing and development, while you grow your business.")
              .pauseFor(2000)
              .deleteAll()
              .start()
              
             
            }}  


           />
           
           
           
           
            <Stack direction={"row"}>
              <Button
                bg={"blue.400"}
                rounded={"full"}
                color={"white"}
                _hover={{ bg: "blue.500" }}
              >
                Get Quote
              </Button>
             
            <Button
                bg={"whiteAlpha.300"}
                rounded={"full"}
                color={"white"}
                _hover={{ bg: "whiteAlpha.500" }}
              >
               <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            offset={-70}
          >

              Contact Us
          </ScrollLink>
        
              </Button>
        
              
            </Stack>
          </Stack>
        </VStack>
      </Flex>

      <Heading
      id="services"
        noOfLines={1}
        textAlign="center"
        mt={"30px"}
        mb={"-30px"}
        color={"#0e2b5c"}
        fontFamily={"Montserrat"}
        fontSize={{ base: "4xl", md: "5xl" }}
      >
        Services Offered by us
      </Heading>

      <SimpleGrid
        height={"auto"}
        width={"95%"}
        margin={"auto"}
      
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
              <Heading
                fontSize={"2xl"}
                fontFamily={"Montserrat"}
                fontWeight={500}
                color={"#0e2b5c"}
              >
                Web Development
              </Heading>
              <Stack direction={"row"} align={"center"}>
                <Text fontWeight={400} fontSize={"17px"} fontFamily={"Anuphan"}>
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
              <Heading
                fontSize={"2xl"}
                fontFamily={"Montserrat"}
                fontWeight={500}
                color={"#0e2b5c"}
                noOfLines={"1"}
              >
                App Development
              </Heading>
              <Stack direction={"row"} align={"center"}>
                <Text fontWeight={500} fontSize={"17px"} fontFamily={"Anuphan"}>
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
              <Heading
                fontSize={"2xl"}
                fontFamily={"Montserrat"}
                fontWeight={500}
                color={"#0e2b5c"}
              >
                Digital Marketing
              </Heading>
              <Stack direction={"row"} align={"center"}>
                <Text fontWeight={400} fontSize={"17px"} fontFamily={"Anuphan"}>
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
                  "https://chakra-templates.dev/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1515378791036-0648a3ef77b2%3Fixid%3DMXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%253D%26ixlib%3Drb-1.2.1%26auto%3Dformat%26fit%3Dcrop%26w%3D1350%26q%3D80&w=1200&q=75"
                }
              />
            </Box>
            <Stack pt={10} align={"center"}>
              <Heading
                fontSize={"2xl"}
                fontWeight={500}
                color={"#0e2b5c"}
                fontFamily={"Montserrat"}
              >
                On Demand Services
              </Heading>
              <Stack direction={"row"} align={"center"}>
                <Text fontWeight={400} fontSize={"17px"} fontFamily={"Anuphan"}>
                  Develop On Demand Services
                </Text>
              </Stack>
            </Stack>
          </Box>
        </Center>
      </SimpleGrid>

      <Plans />

      <Pricemodal/>

      <Heading
        noOfLines={1}
        textAlign="center"
        color={"#0e2b5c"}
        fontFamily={"Montserrat"}
        fontSize={{ base: "4xl", md: "5xl" }}
        mt={"20px"}
        id="projects"
      >
        Brilliance is what our projects deliver
      </Heading>
      <Stack width="95%" margin={"auto"} mt={"30px"}>
        <Carousel responsive={responsive}>
          <div className={styles.coorosel}>
            <img
              src="https://nandlalshah955.github.io/stuff/images/Chargbee.png"
              alt=""
            />
            <h1>Chargbee Website</h1>
            <p>
              Chargebee is the subscription billing and revenue management
              platform that lets you solve for your today, and scale for your
              tomorrow.
            </p>
          </div>
          <div className={styles.coorosel}>
            <img
              src="https://nandlalshah955.github.io/stuff/images/Skinstore.png"
              alt=""
            />
            <h1>Blossom Website</h1>
            <p>
              SkinStore is the online hub where beauty and science click,
              delivering the latest in innovative clinical skincare and luxury
              products for over 20 years.
            </p>
          </div>
          <div className={styles.coorosel}>
            <img
              src="https://nandlalshah955.github.io/stuff/images/Best-BUy-screenshot.png"
              alt=""
            />
            <h1>BestBuy Website</h1>
            <p>
              Best Buy is an E-commerce website in this website we can purchase
              various products like Beauty Products , Dresses , Women Clothes
              and Accessories.
            </p>
          </div>
          <div className={styles.coorosel}>
            <img
              src="https://nandlalshah955.github.io/stuff/images/BlueMercury%20screenshot.png"
              alt=""
            />
            <h1>BlueMercury Website</h1>
            <p>
              A leader in luxury beauty and skincare, Purpose of BlueMercury is
              to create an inviting online beauty shopping experience.
            </p>
          </div>
        </Carousel>
        ;
      </Stack>

      <Testimonial />

<Statistics/>


      <Heading
        noOfLines={1}
        textAlign="center"
        mt={"30px"}
        id="contact"
        color={"#0e2b5c"}
        fontFamily={"Montserrat"}
        fontSize={{ base: "4xl", md: "5xl" }}
      
      >
        Let us collaborate and accelarate
      </Heading>

      <Stack
        minH={"100vh"}
        direction={{ base: "column", md: "row" }}
        mt={"20px"}
      >
        <Flex p={8} flex={1} align={"center"} justify={"center"} mt={"-20px"}>
          <Stack spacing={4} w={"full"} maxW={"md"}>
            <Heading fontSize={"2xl"} >Get in Touch</Heading>
            <FormControl id="email">
              <FormLabel>Name</FormLabel>
              <Input type="text" placeholder="your name" 
onChange={handlechange}
                name="name"
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Email Address</FormLabel>
              <Input type="email" placeholder="youremail@gmail.com"
              name="email"
              onChange={handlechange}
               />
            </FormControl>
            <FormControl id="phone">
              <FormLabel>Phone</FormLabel>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<PhoneIcon color="gray.300" />}
                />
                <Input type="tel" placeholder="Phone number"
                name="telephone"
                onChange={handlechange}
                 />
              </InputGroup>
            </FormControl>
            <FormControl id="message">
              <FormLabel>
                Message <span>(optional)</span>{" "}
              </FormLabel>
              <Textarea
                borderColor="gray.300"
                _hover={{
                  borderRadius: "gray.300",
                }}
                placeholder="Message"
                name="message"
                onChange={handlechange}
              />
            </FormControl>
            <Stack spacing={6}>
              <Stack
                direction={{ base: "column", sm: "row" }}
                align={"start"}
                justify={"space-between"}
              ></Stack>
              <Button colorScheme={"blue"} variant={"solid"}
              onClick={handlesubmit}
              >
                Submit
              </Button>
            </Stack>
          </Stack>
        </Flex>
        <Flex flex={1}  >
          {showImage && <Image src={imageUrl} alt="Your image"  boxSize={"90%"} />}
        </Flex>
      </Stack>

      <Footer />
    </>
  );
}

export default index;
