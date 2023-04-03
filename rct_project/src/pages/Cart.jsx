import Navbar from "../components/Navbar"
import { Box,Button,Center,Img,SimpleGrid,Text,VStack,Select,Spinner,Input} from "@chakra-ui/react";

function Cart(){
let array=JSON.parse(localStorage.getItem("cart"))
||[]


return(
    <>
    {/* "cart" */}
    <Navbar/>
    <div>total price:${}</div>
    <SimpleGrid  gap='10px' columns={4} className="main_container" margin="20px">


{
        array?.map((el)=>{

                    return <Box mt="25px"  key={el.id} boxShadow="rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;" borderRadius={"sm"} alt="Clothes" objectFit={"cover"} _hover={{ transform: "scale(0.9)", }} transition={"0.1s ease-in-out"} >
                    <Center >
                      <Img height="400px" w="100%" src={el.avatar}   />
                    </Center>
          
                    <VStack spacing={2} p={2}>
                      <Text fontSize={"20px"} fontWeight="bold">{el.name}</Text>
                      <Text >{el.name}</Text>
                      <Text >{el.description}</Text>
                      <Text >{el.price}</Text>
                      <Text >{el.brand}</Text>
                     
                    </VStack>
                  </Box>



        })
    }

</SimpleGrid>
    
    </>
)

}

export default Cart