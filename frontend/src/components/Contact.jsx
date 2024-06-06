import React from "react";
import Header from "./Header";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import Footer from "./Footer";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Box,
  Flex,
  Select,
  Text,
  Center,
  Button,
} from "@chakra-ui/react";
const Contact = () => {
  return (
    <Box>
      <Header />
      <Center ><Text as={'h1'} color={'orange'}> Contact Us</Text> </Center>


      

      <Flex flexWrap={'wrap'} p={['4','10']}>
        <Box w={['100%' ,'40%']}>
           
        <Flex>
        <CiLocationOn size={'70px'} color={'orange'}/>
          <Text fontSize={'1.1rem'}>
            Address Gorakhpur 
            Gol ghar  Uttar Pradesh Pincode -273001
          </Text>
          </Flex>

          <Flex>
          <FaPhoneAlt  size={'30px'} color={'orange'}/>
          <Text fontSize={'1.1rem'}>Customer Care Help Line (Toll Free) 9936968830</Text>
          </Flex>
          
          <Flex>
          <MdOutlineMail  size={'40px'} color={'orange'}/>
          <Text fontSize={'1.1rem'}>E-mail ruralhome@gmail.com</Text>
          </Flex>
        </Box>

        <Box w={['100%' ,'40%']}>
          <FormControl
            isRequired
            width={[
              "100%", // 0-30em
               // 30em-48em
            ]}
            p={[3, 4, 6, 8]}
            ml={[2, 4, 6, 8]}
            bg={'rgb(0,255,255,.2)'}
            color={"black"}
            borderRadius={10}
          >
            <FormLabel>Full name</FormLabel>
            <Input type="text" />

            <FormLabel>Email</FormLabel>
            <Input mb={4} type="email"  />

            <FormLabel>Mobile Number</FormLabel>
            <Input type="number" mb={4}  />

            <FormLabel>Massage</FormLabel>
            <Input
              type="text"
              mb={4}
              
              
            />

            <Button w={'200px'} bg={'orange'}>Send Massage</Button>
          </FormControl>
        </Box>
      </Flex>

      <Footer></Footer>
    </Box>
  );
};

export default Contact;
