import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    Box,
    TableContainer,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td
} from '@chakra-ui/react'
import PriceHeader from './PriceHeader';

function Pricemodal() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Box textAlign="center" >
       <PriceHeader/>
        <Button onClick={onOpen} fontFamily={"Montserrat"}>See how our plans compare</Button>

        <Modal isOpen={isOpen} onClose={onClose} >
            <ModalOverlay />
            <ModalContent maxW="80%">
                <ModalHeader fontSize={{ base: "md", md: "2xl" }}  fontFamily={"Montserrat"}>Invoicing and Subscription Management</ModalHeader>
                <ModalCloseButton />
                <ModalBody  fontFamily={"Montserrat"}>
                    <TableContainer >
                        <Table variant='simple'>
                            <Thead>
                                <Tr >
                                    <Th fontSize="md">Features</Th>
                                    <Th fontSize="md">Individual</Th>
                                    <Th fontSize="md">Startup</Th>
                                    <Th fontSize="md">Scale</Th>
                                    <Th fontSize="md">Enterprise</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>Homepage</Td>
                                    <Td>✔️</Td>
                                    <Td>✔️</Td>
                                    <Td>✔️</Td>
                                    <Td>✔️</Td>
                                </Tr>

                                <Tr>
                                    <Td>Customer Support</Td>
                                    <Td>✔️</Td>
                                    <Td>✔️</Td>
                                    <Td>✔️</Td>
                                    <Td>✔️</Td>
                                </Tr>
                                <Tr>
                                    <Td>Responsiveness</Td>
                                    <Td>✔️</Td>
                                    <Td>✔️</Td>
                                    <Td>✔️</Td>
                                    <Td>✔️</Td>
                                </Tr>
                                <Tr>
                                    <Td>Payment Integration</Td>
                                    <Td fontWeight="bold" color="red">X</Td>
                                    <Td fontWeight="bold" color="red">X</Td>
                                    <Td>✔️</Td>
                                    <Td>✔️</Td>
                                </Tr>
                                <Tr>
                                    <Td>User Login/Signup</Td>
                                    <Td fontWeight="bold" color="red">X</Td>
                                    <Td fontWeight="bold" color="red">X</Td>
                                    <Td>✔️</Td>
                                    <Td>✔️</Td>
                                </Tr>
                                <Tr>
                                    <Td>Dynamic CSS</Td>
                                    <Td fontWeight="bold" color="red">X</Td>
                                    <Td>✔️</Td>
                                    <Td>✔️</Td>
                                    <Td>✔️</Td>
                                </Tr>
                                <Tr>
                                    <Td>Contact Form & Email</Td>
                                    <Td fontWeight="bold" color="red">X</Td>
                                    <Td>✔️</Td>
                                    <Td>✔️</Td>
                                    <Td>✔️</Td>
                                </Tr>
                                <Tr>
                                    <Td>Authenticated User Login</Td>
                                    <Td fontWeight="bold" color="red">X</Td>
                                    <Td fontWeight="bold" color="red">X</Td>
                                    <Td fontWeight="bold" color="red">X</Td>
                                    <Td>✔️</Td>
                                </Tr>
                                <Tr>
                                    <Td>User Login With their Gmail</Td>
                                    <Td fontWeight="bold" color="red">X</Td>
                                    <Td fontWeight="bold" color="red">X</Td>
                                    <Td fontWeight="bold" color="red">X</Td>
                                    <Td>✔️</Td>
                                </Tr>
                                <Tr>
                                    <Td>SEO Optimization</Td>
                                    <Td fontWeight="bold" color="red">X</Td>
                                    <Td fontWeight="bold" color="red">X</Td>
                                    <Td>✔️</Td>
                                    <Td>✔️</Td>
                                </Tr>
                                <Tr>
                                    <Td>Admin Panel</Td>
                                    <Td fontWeight="bold" color="red">X</Td>
                                    <Td fontWeight="bold" color="red">X</Td>
                                    <Td fontWeight="bold" color="red">X</Td>
                                    <Td>✔️</Td>
                                   
                                </Tr>
                                <Tr>
                                    <Td>User Info Page</Td>
                                    <Td fontWeight="bold" color="red">X</Td>
                                    <Td fontWeight="bold" color="red">X</Td>
                                    <Td>✔️</Td>
                                    <Td>✔️</Td>
                                </Tr>
                                <Tr>
                                    <Td>Database Availability</Td>
                                    <Td fontWeight="bold" color="red">X</Td>
                                    <Td fontWeight="bold" color="red">X</Td>
                                    <Td>✔️</Td>
                                    <Td>✔️</Td>
                                    
                                </Tr>
                                <Tr>
                                    <Td>24*7 Customer Support</Td>
                                    <Td fontWeight="bold" color="red">X</Td>
                                    <Td fontWeight="bold" color="red">X</Td>
                                    <Td>✔️</Td>
                                    <Td>✔️</Td>
                                </Tr>
                                <Tr>
                                    <Td>API Integration</Td>
                                    <Td fontWeight="bold" color="red">X</Td>
                                    <Td fontWeight="bold" color="red">X</Td>
                                    <Td>✔️</Td>
                                    <Td>✔️</Td>
                                </Tr>
                                <Tr>
                                    <Td>Domain & Hoisting Support</Td>
                                    <Td>✔️</Td>
                                    <Td>✔️</Td>
                                    <Td>✔️</Td>
                                    <Td>✔️</Td>
                                </Tr>
                                <Tr>
                                    <Td>Dynamic Pages</Td>
                                    <Td fontWeight="bold" color="red">X</Td>
                                    <Td>✔️</Td>
                                    <Td>✔️</Td>
                                    <Td>✔️</Td>
                                </Tr>
                                <Tr>
                                    <Td>Backend Part Integration</Td>
                                    <Td fontWeight="bold" color="red">X</Td>
                                    <Td fontWeight="bold" color="red">X</Td>
                                    <Td>✔️</Td>
                                    <Td>✔️</Td>
                                </Tr>
                                
                            </Tbody>
                        </Table>
                    </TableContainer>
                </ModalBody>
            </ModalContent>
        </Modal>
    </Box>
  )
}

export default Pricemodal