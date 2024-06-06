import axios from "axios";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminMenu from "./AdminMenu";
import Header from "../Header";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Box,
  Flex,
} from "@chakra-ui/react";
import { wrap } from "framer-motion";

const Massage = () => {
  const [massage, setMassage] = useState();
  const [loading, setLoading] = useState(false);
  const [id,SetId] = useState();


  const fetch = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "http://localhost:8080/api/v1/massage/allMassage"
      );
      console.log(response.data);
      if (response) {
        setMassage(response.data.Massage);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handle = async(id)=>{
         
      try{
            const massage = await axios.post("http://localhost:8080/api/v1/massage/update",{
                  id
            })

            if(massage){
              toast.success("update succesfuly");
              fetch();
            }
      }catch(error){
         console.log(error);
         toast.error("error in updating")
      }
  }

  useEffect(() => {
  
    fetch();
  }, []);

  return (
    <div>

        <Header/>
       
       <Flex justifyContent={'space-between'} flexWrap={'wrap'}>

        <Box w={['100%',['20%']]}>
        <AdminMenu  ></AdminMenu>
        </Box>
        
      <TableContainer >
        <Table variant="simple">
          <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Email</Th>
              <Th>Phone</Th>
              <Th>Adress</Th>
              <Th>District</Th>
              <Th>Catagory</Th>
              <Th>Update</Th>
            </Tr>
          </Thead>
          <Tbody>
            {!massage ? (
              <h1>loading</h1>
            ) : (
              massage.map((item) => {
                return (
                  <>
                    <Tr>
                      <Td>{item.name}</Td>
                      <Td>{item.email}</Td>
                      <Td>{item.phone}</Td>
                      <Td>{item.address}</Td>
                      <Td>{item.district}</Td>
                      <Td>{item.catagory}</Td>
                      
                      <Td>
                        <Button onClick={()=>{handle(`${item._id}`)}}>update</Button>
                      </Td>
                    </Tr>
                  </>
                );
              })
            )}
          </Tbody>
          {/* <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot> */}
        </Table>
      </TableContainer>
         
         < ToastContainer/>
      </Flex>
    </div>
  );
};

export default Massage;
