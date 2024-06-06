import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import "../styles/AboutRu.css";
import Header from "./Header";
import Footer from "./Footer";

const AboutUs = () => {
  return (

    <>

    <Header/>
    <div className="AboutRu">
      <div className="Heading">

        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize={{ base: "25px", md: "40px", lg: "56px" }}
          fontWeight="extrabold"
          
        >
          About Rural Home Services
        </Text>
        <h6>
          Rural Home Services acts as bridge between Citizens and Local Service
          Professionals required for day to day work or home services based on
          Geo-location in both Urban and Rural areas.
        </h6>
        <p>
          It is all-in-one Platform that helps users to hire Service
          professionals such as
        </p>
        <p>Carpentar</p>
        <p>Plumber</p>
        <p>Electrician</p>
        <p>AC/Fridge repair</p>
        <p>Painter</p>
        <p>Cleaner</p>
        <p>

        </p>
      </div>
      <div className="Images">
        <Box p='20px' h='40vh' _hover={{ backgroundColor:'orange'}} border='1px solid grey'>
          <Image
            boxSize="200px"
            objectFit="cover"
            src="https://sewamitra.up.gov.in/images/HomePageElectrician.png"
            alt="Dan Abramov"
          />
        </Box>

        <Box p='20px'  h='40vh' _hover={{ backgroundColor:'orange'}} border='1px solid grey'>
          <Image
            boxSize="200px"
            objectFit="cover"
            src="https://sewamitra.up.gov.in/Upload/Service/f798364f-5f40-4b03-9ba8-cb16d9320cca_.jpg"
            alt="Dan Abramov"
          />
        </Box>

        <Box p='20px'  h='40vh' _hover={{ backgroundColor:'orange'}} border='1px solid grey'>
          <Image
            boxSize="200px"
            objectFit="cover"
            src="https://sewamitra.up.gov.in/Upload/Service/aeff2414-03b6-4fcf-8575-dd6010c51f89_Appliance%20Repair.jpg"
            alt="Dan Abramov"
          />
        </Box>

        <Box p='20px'  h='40vh' _hover={{ backgroundColor:'orange'}} border='1px solid grey'>
          <Image
            boxSize="200px"
            objectFit="cover"
            src="https://sewamitra.up.gov.in/images/HomePagePlumber.png"
            alt="Dan Abramov"
          />
        </Box>
      </div>
    </div>
   
   <Footer/>
    </>
  );
};

export default AboutUs;
