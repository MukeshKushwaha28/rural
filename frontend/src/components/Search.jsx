import React,{useState,useEffect} from "react";
import { Box, Text } from "@chakra-ui/react";
import { useSearch } from "../context/Search";
import {useNavigate} from 'react-router-dom'
import axios from "axios";
import "../styles/Search.css";
const Search = () => {

  const [district, setDistrict] = useState(""); // Initialize state
  const [catagory, setCatagory] = useState(""); 
  const [search,setSearch] = useSearch();
  const navigate = useNavigate();


  let user = [];
  const handleCatagory = (event) => {
    setCatagory(event.target.value); // Update state when option is selected
    
  };

  const handleDistrict = (event)=>{
    setDistrict(event.target.value)
  }

  user.push(district);
  user.push(catagory);

  
  const category = search[1];
  
  

  
  
const handle = ()=>{
  setSearch(user);
  localStorage.setItem("user", JSON.stringify(user));
  navigate('/cat')
  
}

const data = localStorage.getItem("user");
  


  return (
    <div className="Scontainer">
      <div>
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize={{ base: "25px", md: "40px", lg: "56px" }}
          fontWeight="extrabold"
          
        >
          Search Home & Office Services
        </Text>
        <Text style={{color:'ink'}} fontSize={{ base: "15px", md: "20px", lg: "30px" }}>Search And Book Services From Your Locality And Pay As You Go.</Text>
      </div>
      <div className="form">
        <div>
        <select id="mySelect" value={district} onChange={handleDistrict} className="select">
        <option value="district">---Select Distict---</option>
        <option value="Agra">Agra</option>
        <option value="Amroha">Amroha</option>
        <option value="Bijnor">Bijnor</option>
        <option value="Gorakhpur">Gorakhpur</option>
        <option value="Maharajganj">Maharajganj</option>
      </select>
          {/* <p>Selected car: {selectedCar}</p> */}
        </div>
        <div>
        <select id="mySelect" value={catagory} onChange={handleCatagory} className="select">
        <option value="select">---Select Catagory---</option>
        <option value="Electronics">Electronics</option>
        <option value="Plumber">Plumber</option>
        <option value="Painter">Painter</option>
        <option value="AC/fridge repair">AC/fridge repair</option>
        <option value="Cleaner">Cleaner</option>
        <option value="Carpenter">Carpenter</option>
      </select>
          {/* <p>Selected car: {selectedCar}</p> */}
        </div>

        <div>
          <Box
            width='200px'
            as="button"
            p={4}
            color="white"
            fontWeight="bold"
            borderRadius="md"
            bgGradient="linear(to-r, teal.500, green.500)"
            _hover={{
              bgGradient: "linear(to-r, red.500, yellow.500)",
            }}
            onClick={handle}
          >
            Click here
          </Box>
        </div>
      </div>
    </div>
  );
};

export default Search;
