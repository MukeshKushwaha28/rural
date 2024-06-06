import React, { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import Footer from "./Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Wrap, WrapItem } from "@chakra-ui/react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Box,
  Flex,
  Select,
  Center,
} from "@chakra-ui/react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  ButtonGroup,
  Image,
  Stack,
  Heading,
  Divider,
  Button,
} from "@chakra-ui/react";

const Order = () => {
  const id1 = localStorage.getItem("id");
  const [product, setProduct] = useState();

  const id = JSON.parse(id1);
  const [name, setName] = useState();
  const [district, setDistrict] = useState();
  const [address, setAddress] = useState();
  const [phone, setPhone] = useState();
  const [email, setEmail] = useState();
  const [catagory, setCatagory] = useState();

  const now = new Date();
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Months are zero-based
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");
  const year = now.getFullYear();

  const time =
    month +
    "/" +
    day +
    "/" +
    hours +
    "/" +
    minutes +
    "/" +
    seconds +
    "/" +
    year;
  console.log(time);

  //  console.log(_id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          `http://localhost:8080/api/v1/product/singleProduct`,
          { id }
        );
        // console.log(response.data.product);
        setProduct(response.data.product);
        if (response) {
          // toast.success("Massage created successfully!");
        }
        
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handle1 = async (e) => {
    e.preventDefault();
    try {
      const massage = await axios.post(
        "http://localhost:8080/api/v1/massage/createMassage",
        { name, district, address, phone, email, catagory, time }
      );

      if (massage.data.success) {
        toast.success("Massage Forwarded  Successfully");
        console.log(massage);
        setName("");
        setDistrict("");
        setAddress("");
        setCatagory("");
        setPhone("");
        setEmail("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(product);

  return (
    <Box bg={"#6F4E37"}>
      <Header />
     
      <Center p={[3, 4, 6, 8]} m={"10"}>
        <Flex flexWrap={"wrap"} p={["5", "10"]}>
          {!product ? (
            <h1>loading</h1>
          ) : (
            <Card
              h={["430", "430"]}
              marginLeft={["10", "10"]}
              w={["80", "80"]}
              mb={"10"}
            >
              <CardBody
                border={"1px solid black"}
                bg={"rgb(189, 183, 107,.5)"}
                _hover={{ bg: "rgb(189, 183, 107,.3)" }}
                transition={"0.5s"}
              >
                <Image
                  src={`http://localhost:8080/api/v1/product/product-photo/${product._id}`}
                  alt="Green double couch with wooden legs"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{product.name}</Heading>
                  <Text>
                    {product.description}
                  </Text>
                  <Text color="blue.600" fontSize="2xl">
                    {product.price}
                  </Text>
                </Stack>
              </CardBody>
            </Card>
          )}

          <Box w={"100"} ml={["5", "10"]} pl={["5", "10"]}>
            <Flex flexWrap="wrap">
              <FormControl
                isRequired
                // width={[
                //   "100%", // 0-30em
                //   "100%", // 30em-48em
                // ]}
                p={[3, 4, 6, 8]}
                m={[2, 4, 6, 8]}
                bg={"grey"}
                color={"white"}
                borderRadius={10}
              >
                <FormLabel>Full name</FormLabel>
                <Input
                  type="text"
                  mb={4}
                  required
                  onChange={(event) => {
                    setName(event.target.value);
                  }}
                />

                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  mb={4}
                  required
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />

                <FormLabel>Mobile NUmber</FormLabel>
                <Input
                  type="number"
                  mb={4}
                  required
                  onChange={(event) => {
                    setPhone(event.target.value);
                  }}
                />

                <FormLabel>Address</FormLabel>
                <Input
                  type="text"
                  mb={4}
                  required
                  onChange={(event) => {
                    setAddress(event.target.value);
                  }}
                />

                <FormLabel>district</FormLabel>
                <Input
                  type="text"
                  mb={4}
                  required
                  onChange={(event) => {
                    setDistrict(event.target.value);
                  }}
                />

                <FormLabel>catagory</FormLabel>
                <Input
                  type="text"
                  mb={4}
                  required
                  onChange={(event) => {
                    setCatagory(event.target.value);
                  }}
                />

                <Button onClick={handle1}>submit</Button>
              </FormControl>
            </Flex>
          </Box>
        </Flex>
      </Center>
      <ToastContainer />
      <Footer></Footer>
    </Box>
  );
};

export default Order;
