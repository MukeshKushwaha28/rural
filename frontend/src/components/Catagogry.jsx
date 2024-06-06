import React, { useEffect, useState } from "react";
import { Wrap, WrapItem } from "@chakra-ui/react";
import { useSearch } from "../context/Search";
import { GrCheckboxSelected } from "react-icons/gr";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./Header";
import axios from "axios";
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
import { Navigate, useNavigate } from "react-router-dom";

const Catagogry = () => {
  const [search] = useSearch();
  const [product, setProduct] = useState();
  const data = localStorage.getItem("user");
  const [district, category] = JSON.parse(data);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.post(
          "http://localhost:8080/api/v1/product/get-product",
          { category: category, district: district }
        );
        // console.log(response.data.products);
        if(response){
          toast.success("searing successfuly")
        }
        setProduct(response.data.products);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handle = (id)=>{
      localStorage.setItem("id", JSON.stringify(id));
      navigate('/order')
  }

  console.log(product);

  return (
    <>

    <Header/>
      <Wrap p={10}>

        {!product ? (
          <h1>loading</h1>
        ) : (
      
          product.map((item) => {
            return (
              <>
                <WrapItem>
                  <Card maxW="sm" border={'1px solid black'} bg={'rgb(189, 183, 107,.5)'} _hover={{bg:'rgb(189, 183, 107,.3)'}} transition={'0.5s'}>
                    <CardBody>
                      <Image
                        src={`http://localhost:8080/api/v1/product/product-photo/${item._id}`}
                        alt="Green double couch with wooden legs"
                        borderRadius="lg"
                       
                      />
                      <Stack mt="6" spacing="3">
                        <Heading size="md">{item.name}</Heading>
                        <Text>
                          {item.description}
                        </Text>
                        <Text color="blue.600" fontSize="2xl">
                        starting price  Rs.{item.price}
                        </Text>
                      </Stack>
                    </CardBody>
                    <CardFooter>
                      <ButtonGroup spacing="2">
                        <Button variant="solid" colorScheme="blue" onClick={()=>{handle(item._id)}}>
                          <GrCheckboxSelected />Select
                        </Button>
                      </ButtonGroup>
                    </CardFooter>
                  </Card>
                </WrapItem>
              </>
            );
          })

          
        )}
      </Wrap>

      <ToastContainer/>
    </>

   
  );
};

export default Catagogry;
