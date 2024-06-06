import React, { useEffect, useState } from "react";
import axios from "axios";
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
const Workers = () => {
  const [worker, setWokers] = useState();

  const workers = async () => {
    try {
      const workers = await axios.get(
        "http://localhost:8080/api/v1/worker/allWorker"
      );
      if (workers) {
        console.log(workers.data.workers);
        // toast.success("succesfully workers got");
        setWokers(workers.data.workers);
      }
    } catch (error) {
      console.log(error);
      toast.error("error occured in getting worker");
    }
  };

  useEffect(() => {
    workers();
  }, []);

  return (
    <div>
      <Header />

      <Flex justifyContent={"space-between"} flexWrap={"wrap"}>
        <Box w={["100%", ["20%"]]}>
          <AdminMenu></AdminMenu>
        </Box>
        <TableContainer  w={["100%", ["70%"]]}>
          <Table variant="simple">
            <TableCaption>Imperial to metric conversion factors</TableCaption>
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>fname</Th>
                <Th>Email</Th>
                <Th>Phone</Th>
                <Th>Adress</Th>
                <Th>District</Th>
                <Th>Experience</Th>
                <Th>DOB</Th>
                <Th>Education</Th>
                <Th>Skill</Th>
                <Th>Update</Th>
              </Tr>
            </Thead>
            <Tbody>
              {!worker ? (
                <h1>loading</h1>
              ) : (
                worker.map((item) => {
                  return (
                    <>
                      <Tr>
                        <Td>{item.name}</Td>
                        <Td>{item.fname}</Td>
                        <Td>{item.email}</Td>
                        <Td>{item.phone}</Td>
                        <Td>{item.address}</Td>
                        <Td>{item.district}</Td>
                        <Td>{item.experience}</Td>
                        <Td>{item.DOB}</Td>
                        <Td>{item.education}</Td>
                        <Td>{item.skill}</Td>

                        <Td>
                          <Button
                            onClick={() => {
                              handle(`${item._id}`);
                            }}
                          >
                            update
                          </Button>
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
      </Flex>

      <ToastContainer />
    </div>
  );
};

export default Workers;
