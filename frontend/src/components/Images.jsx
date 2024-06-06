import React from 'react'
import { Image ,Stack,Flex,Box,Text,Center} from '@chakra-ui/react'
import { wrap } from 'framer-motion'

const Images = () => {
  return (
<Flex  flexDirection='row' flexWrap='wrap' gap='4' justify='space-between' p='10'>

    <Box>
    <Image
    boxSize='300px'
    objectFit='cover'
    src='https://bit.ly/dan-abramov'
    alt='Dan Abramov'
    borderRadius='100'
  />
  <Text fontSize='2rem'><Center>shreyansh <br /> </Center></Text><br />
    </Box>
 
 <Box>
  <Image
    boxSize='300px'
    objectFit='cover'
    src='https://bit.ly/dan-abramov'
    alt='Dan Abramov'
    borderRadius='100'
  />
  <Text fontSize='2rem'><Center>Rahul <br /> </Center></Text><br />
  </Box>

  <Box>

  <Image boxSize='300px' src='https://bit.ly/dan-abramov' alt='Dan Abramov'  borderRadius='50'/>
  <Text fontSize='2rem'><Center>Nitish<br /> </Center></Text><br />
  </Box>

</Flex>
  )
}

export default Images
