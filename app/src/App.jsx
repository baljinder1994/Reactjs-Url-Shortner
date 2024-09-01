import { useState } from 'react'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import List from './components/List';
import Form from './components/Form';
function App() {
  
  const router=createBrowserRouter([
   
    {
      path:'/',
     element:<><Form/></>
    },
    {
      path:'/shortened-urls',
      element:<>{<List />}</>
    },
    
  ])
  return (
    <>
     <ChakraProvider>
         <RouterProvider router={router} />
    </ChakraProvider>
   
    </>
  )
}

export default App
