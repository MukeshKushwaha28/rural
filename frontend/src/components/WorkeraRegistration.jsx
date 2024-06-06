import React, { useState } from "react";
import Header from "./Header";
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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const WorkeraRegistration = () => {
  const [name, setName] = useState();
  const [fname, setfname] = useState();
  const [email, setemail] = useState();
  const [phone, setphone] = useState();
  const [address, setaddres] = useState();
  const [district, setdistrict] = useState();
  const [experience, setexperience] = useState();
  const [DOB, setDOB] = useState();
  const [education, seteducation] = useState();
  const [skill, setskill] = useState();
  const [Scertificate, setScertificate] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const workerData = new FormData();
      workerData.append("name", name);
      workerData.append("fname", fname);
      workerData.append("email", email);
      workerData.append("phone", phone);
      workerData.append("address", address);
      workerData.append("district", district);
      workerData.append("experience", experience);
      workerData.append("DOB", DOB);
      workerData.append("education", education);
      workerData.append("skill", skill);
      workerData.append("Scertificate", Scertificate);

      const worker = await axios.post(
        "http://localhost:8080/api/v1/worker/workerRegistration",
        workerData
      );

      if(worker){
        toast.success("worker registration successfully");
        setName("");
        setfname("");
        setemail("")
        setphone("");
        setaddres("")
      }
    } catch (error) {
      console.log(error);
      toast.error("error in registration");
    }
  };

  return (
    <>
      <Header />

      <Center>
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize={{ base: "25px", md: "40px", lg: "56px" }}
          fontWeight="extrabold"
        >
          Skilled Worker Registration
        </Text>
      </Center>

      <Flex flexWrap="wrap">
        <FormControl
          isRequired
          width={[
            "100%", // 0-30em
            "45%", // 30em-48em
          ]}
          p={[3, 4, 6, 8]}
          m={[2, 4, 6, 8]}
          bg={"grey"}
          color={"white"}
          borderRadius={10}
        >
          <FormLabel>Full name</FormLabel>
          <Input
            type="text"
            value={name}
            mb={4}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />

          <FormLabel>Father name</FormLabel>
          <Input
            mb={4}
            type="text"
            value={fname}
            onChange={(e) => {
              setfname(e.target.value);
            }}
          />

          <FormLabel>Mobile Number</FormLabel>
          <Input
            type="number"
            mb={4}
            value={phone}
            onChange={(e) => {
              setphone(e.target.value);
            }}
          />

          <Flex flexWrap="wrap" gap={4}>
            <Box width={["100%", "45%"]}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={email}
                mb={4}
                mr={4}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
              />
            </Box>

            <Box width={["100%", "45%"]}>
              <FormLabel>Experience</FormLabel>
              <Input
                type="number"
                mb={4}
                value={experience}
                onChange={(e) => {
                  setexperience(e.target.value);
                }}
              />
            </Box>

            <Box width={["100%", "45%"]}>
              <FormLabel>Date of Birth</FormLabel>
              <Input
                type="date"
                mb={4}
                value={DOB}
                onChange={(e) => {
                  setDOB(e.target.value);
                }}
              />
            </Box>

            <Box width={["100%", "45%"]}>
              <FormLabel>Education</FormLabel>
              <Select
                placeholder="Select Eduction"
                mb={4}
                color={"black"}
                value={education}
                onChange={(e) => {
                  seteducation(e.target.value);
                }}
              >
                <option>---Select Education ---</option>
                <option value="Diploma">Diploma</option>
                <option value="High School">High School</option>
                <option value="ITI">ITI</option>
                <option value="Post Graduate">Post Graduate</option>
                <option value="Un-Educated">Un-Educated</option>
              </Select>
            </Box>

            <Box width={["100%", "45%"]}>
              <FormLabel>District</FormLabel>
              <Select
                placeholder="Select district"
                mb={4}
                value={district}
                color={"black"}
                onChange={(e) => {
                  setdistrict(e.target.value);
                }}
              >
                <option>---Select District ---</option>
                <option value="Agra">Agra</option>
                <option value="Amroha">Amroha</option>
                <option value="Bijnor">Bijnor</option>
                <option value="Gorakhpur">Gorakhpur</option>
                <option value="Maharajganj">Maharajganj</option>
              </Select>
            </Box>

            <Box width={["100%", "45%"]}>
              <FormLabel>Skill</FormLabel>
              <Select
                placeholder="Select skill"
                mb={4}
                color={"black"}
                value={skill}
                onChange={(e) => {
                  setskill(e.target.value);
                }}
              >
                <option>--select skill --</option>
                <option value="Carpenter">Carpenter</option>
                <option value="Catering Work">Catering Work</option>
                <option value="Delivery Boy/Courier Service<">
                  Delivery Boy/Courier Service
                </option>
                <option value="Electricitian">Electricitian</option>
                <option value="Plumber">Plumber</option>
                <option value="A/C mechanincs">A/C mechanincs</option>
              </Select>
            </Box>
          </Flex>

          <FormLabel>Address</FormLabel>
          <Input
            type="text"
            mb={4}
            value={address}
            onChange={(e) => {
              setaddres(e.target.value);
            }}
          />

          <Flex flexWrap="wrap">
            <Box width={["100%", "45%"]}>
              <FormLabel>Skill Certificate</FormLabel>
              <Input
                type="file"
                placeholder="Father name"
                accept="image/*"

                mb={4}
                onChange={(e) => {
                  setScertificate(file[0]);
                }}
              />
            </Box>
          </Flex>

          <Button onClick={handleSubmit}>submit</Button>
        </FormControl>

        <Box
          p={[3, 4, 6, 8]}
          m={[2, 4, 6, 8]}
          width={[
            "100%", // 0-30em
            "40%", // 30em-48em
          ]}
        >
          <Box>
            <Text as="h1">Contact Information</Text>
            <Text as="p">
              Directorate of Training & Employment UP, Rojgar Bhawan Guru Govind
              Singh Marg, Lucknow Pincode -226001
            </Text>

            <Text as="p">155330</Text>

            <Text as="p">rural.up@gmail.com</Text>

            <Text as="h1">How Can We Help ?</Text>

            <Text as="p">
              - First of its kind Initiative to empower skilled, semi-skilled,
              and unskilled workers
            </Text>

            <Text as="p">
              - If in case any training is required it would be provided through
              proper channel
            </Text>

            <Text as="p">- Hassle-free registration</Text>

            <Text as="p">
              - Your details are safe and secure as per terms and conditions
              specified and shall be used for relevant employment opportunities.
            </Text>
          </Box>

          <Box></Box>
        </Box>
      </Flex>
      <ToastContainer />
      <Footer></Footer>
    </>
  );
};

export default WorkeraRegistration;
