import React, { useState } from 'react'
import {Box,Heading,VStack,Input,Text,useToast,Button} from '@chakra-ui/react'
import axios from 'axios'
const Form = () => {

    const[url,setUrl]=useState('')
    const[shortenedUrl,setShortenedUrl]=useState('')
    const toast=useToast()

    const handleSubmit=async(e) =>{
      e.preventDefault();
      try{
        const response=await axios.post('http://localhost:5000/api/shorten',{originalUrl:url})
       setShortenedUrl(response.data.shortenedUrl)
       toast({
        title:'URL Shortened Successfully',
        description:response.data.shortenedUrl,
        status:'success',
        duration:5000,
        isClosed:true
       })
    }catch(error){
        toast({
            title:'Error',
            description:'There was an error',
            status:'error',
            duration:5000,
            isClosed:true
        })
    }
    }
  return (
     <Box
       minH="100vh"
       display="flex"
       justifyContent="center"
       alignItems="center"
       bgGradient="linear(to-r,teal.500,blue.500)"
       p={4}
     >
     <Box
      bg="white"
      p={8}
      rounded="lg"shadow="lg"
      maxW="500px"
      w="100%"
     >
        <Heading
          mb={6} textAlign="center" color="teal.600"
        >
            URL Shortener
        </Heading>
        <VStack
          spacing={4}>
             <Input
               placeholder="Enter your URL"
               size="lg"
               variant="filled"
               value={url}
               onChange={(e) => setUrl(e.target.value)}
             ></Input>
             <Button
               colorScheme="teal"
               size="lg"
               width="full"
               onClick={handleSubmit}
             >Shorten URL</Button>
             {shortenedUrl && (
                <Box
                  mt={4}
                  textAlign="center">
                    <Text color="gray.600">Your Shortened URL</Text>
                    <Text fontWeight="bold" color="teal.500">
                        <a href={shortenedUrl} target="_blank" rel="noopener noreferrer">
                            {shortenedUrl}
                        </a>
                    </Text>
                  </Box>
             )}
          </VStack>
     </Box>

     </Box>
  )
}

export default Form
