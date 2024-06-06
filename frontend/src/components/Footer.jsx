import React from "react";
import { Wrap, WrapItem, Center, Text, Box } from "@chakra-ui/react";
import { FaHome } from "react-icons/fa";
import { MdOutlineContacts } from "react-icons/md";
import { PiPoliceCarBold } from "react-icons/pi";
import { BiArch } from "react-icons/bi";
import { FaHandshake } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { SiAzureartifacts } from "react-icons/si";
import { GrUserAdmin } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handle1 = ()=>{
     navigate('/')
  }

  const handle2 = ()=>{
    navigate('/about')
 }

 const handle3 = ()=>{
  navigate('/con')
}

const handle4 = ()=>{
  navigate('/policy')
}
  return (
    <>

    <Box bg={'rgb(108, 122, 137,.3)'}>
      <Center>
        <Text as="h1">Quick Links</Text>
      </Center>

      <Wrap className="footer" p={15}>
        <WrapItem onClick={handle1}>
          <Center
            w="300px"
            h="150px"
            bg="red.500"
            borderRadius={15}
            _hover={{ paddingBottom: "30px" }}
            transition="1s"
          >
            <FaHome size={60} />
            <br />
            <Text as="h1" color={"white"}>
              Home
            </Text>
          </Center>
        </WrapItem>
        <WrapItem  onClick={handle2}>
          <Center
            w="300px"
            h="150px"
            bg="green.500"
            borderRadius={15}
            _hover={{ paddingBottom: "30px" }}
            transition="1s"
          >
            <MdOutlineContacts size={60} />
            <Text as="h1" color={"white"}>
              About Us
            </Text>
          </Center>
        </WrapItem>
        <WrapItem onClick={handle3}>
          <Center
            w="300px"
            h="150px"
            bg="tomato"
            borderRadius={15}
            _hover={{ paddingBottom: "30px" }}
            transition="1s"
          >
            <BiArch size={60} />
            <Text as="h1" color={"white"}>
              Contact Us
            </Text>
          </Center>
        </WrapItem>
        <WrapItem onClick={handle4}>
          <Center
            w="300px"
            h="150px"
            bg="blue.500"
            borderRadius={15}
            _hover={{ paddingBottom: "30px" }}
            transition="1s"
          >
            <PiPoliceCarBold size={60} />
            <Text as="h1" color={"white"}>
              Policies
            </Text>
          </Center>
        </WrapItem>

        <WrapItem>
          <Center
            w="300px"
            h="150px"
            bg="yellow.500"
            borderRadius={15}
            _hover={{ paddingBottom: "30px" }}
            transition="1s"
          >
            <FaHandshake size={60} />
            <Text as="h1" color={"white"}>
              MOU
            </Text>
          </Center>
        </WrapItem>

        <WrapItem>
          <Center
            w="300px"
            h="150px"
            bg="gray.500"
            borderRadius={15}
            _hover={{ paddingBottom: "30px" }}
            transition="1s"
          >
            <FaUser size={60} />
            <Text as="h1" color={"white"}>
              FAQs
            </Text>
          </Center>
        </WrapItem>

        <WrapItem>
          <Center
            w="300px"
            h="150px"
            bg="blue.500"
            borderRadius={15}
            _hover={{ paddingBottom: "30px" }}
            transition="1s"
          >
            <SiAzureartifacts size={60} />
            <Text as="h1" color={"white"}>
              User Manual
            </Text>
          </Center>
        </WrapItem>

        <WrapItem>
          <Center
            w="310px"
            h="150px"
            bg="orange.500"
            borderRadius={15}
            _hover={{ paddingBottom: "30px" }}
            transition="1s"
          >
            <GrUserAdmin size={60} />
            <Text as="h1" color={"white"}>
              Admin login
            </Text>
          </Center>
        </WrapItem>
      </Wrap>

      </Box>
    </>
  );
};

export default Footer;
