import {Box,Image,Input,SimpleGrid,Text,Flex,Spacer,
Container,Card,CardBody,Stack,Heading,Divider,CardFooter,ButtonGroup,Button} from "@chakra-ui/react"

import { PhoneIcon, AddIcon, WarningIcon ,SearchIcon} from '@chakra-ui/icons'

import {HiOutlineShoppingCart} from "react-icons/hi"
function Navbar(){




const midimage={
 pics: [
   {image:"https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/29459.webp"},

        {image:"https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/29445.webp"},
        {
        image:"https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/29448.webp"
        },
        {image:"https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/29461.webp"},
        {image:"https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/29447.webp"},
        {
        image:"https://cdn.fcglcdn.com/brainbees/images/boutique/670x670/29460.webp"
        }
      
    ]
}

const brand={
    brands:[
        {
            image:"https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_19.jpg"
        },
        {
            image:"https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_20.jpg"
        },{
            image:"https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_21.jpg"
        },
        {
            image:"https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_22.jpg"
        },{
            image:"https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_23.jpg"
        },{
            image:"https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_1111101032022_24.jpg"
        },{
            image:"https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_25.jpg"
        },{
            image:"https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_26.jpg"
        },{
            image:"https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_27.jpg"
        },
        {image:"https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_28_doodle_poodle.jpg",
   },
   {
    image:"https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_0103202_ED_A_MAMA.jpg"
},
{
    image:"https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_30.jpg"
},{
    image:"https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_31.jpg"
},{
    image:"https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_32.jpg"
},{
    image:"https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_33.jpg"
},{
    image:"https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_34.jpg"
},{
    image:"https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_35.jpg"
},{
    image:"https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_36.jpg"
},{
    image:"https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_38.jpg"
},{
    image:"https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_pine_active_spring_01032022_39.jpg"
},{
    image:"https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring__1111101032022_40.jpg"
},{
    image:"https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring__1111101032022_41.jpg"
},{
    image:"https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_01032022_42.jpg"
},{
    image:"https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_spring_12052022_50.jpg"
}
    ]
}




return(
    <>
<SimpleGrid columns={2} spacing={10}>

<SimpleGrid columns={2} spacing={10}>


  <Box border="1px solid red">


  <Image src="https://cdn.fcglcdn.com/brainbees/images/n/fc_logo.png" alt="logo" />




  </Box>

  <Box >
      <Input w={200}  />
      <SearchIcon/>

  </Box>


  </SimpleGrid>

<Box>
  
 <Flex>
 <Box>
  <Text fontSize="sm" > Select location </Text>
 
</Box>
<Spacer/>

<Box> <Text fontSize="sm" > Stores& Preschools </Text>

  </Box>
<Spacer/>

  <Box>
<Spacer/>

  <Text fontSize="sm" > Support </Text>
 
  </Box>
<Spacer/>

  <Box>
  <Text fontSize="sm" > Track Order </Text>
  </Box>
<Spacer/>

  <Box>

  <Text fontSize="sm" > My Account </Text>

  </Box>
<Spacer/>

<Box>

<HiOutlineShoppingCart/>
  
  </Box>


 </Flex>
</Box>


</SimpleGrid>


select tags   


crousel


{/* -------images */}
<Box>

<SimpleGrid columns={3} gap={10}>
{
    midimage?.pics.map((el)=>{
        return<Card maxW='sm' key={Math.random()}>
  <CardBody>
    <Image
      src={el.image}
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
      <Heading size='md'>Kids Fashion</Heading>
     
      <Text color='blue.600' fontSize='2xl'>
        $450
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='solid' colorScheme='blue'>
        Buy now
      </Button>
      <Button variant='ghost' colorScheme='blue'>
        Add to cart
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>

    })
}
  
</SimpleGrid>

<Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/1920_446_desktop_summer_200323_01_new.jpg" alt="pic"/>

</Box>

<Box>
    <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer_080323_02.jpg" alt="pic"/>
    <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer_080323_03.jpg"/>
</Box>

<Box>
    <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/1920_171_desktop_summer_080323_05.jpg"/>
</Box>



<Box>
<Flex gap={10} p={10}>
<Card maxW='sm'>
  <CardBody>
    <Image
      src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer_080323_06_new.jpg"
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
    
     
  
    </Stack>
  </CardBody>


</Card>

<Card maxW='sm'>
  <CardBody>
    <Image
      src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer_080323_07_new.jpg"
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
    
 
    </Stack>
  </CardBody>


</Card>

<Card maxW='sm'>
  <CardBody>
    <Image
      src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer_080323_08_new.jpg"
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
    

    </Stack>
  </CardBody>


</Card>

<Card maxW='sm'>
  <CardBody>
    <Image
      src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer_080323_09_new.jpg"
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
    

    </Stack>
  </CardBody>


</Card>
<Card maxW='sm'>
  <CardBody>
    <Image
      src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer_080323_10_new.jpg"
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
    
     

    </Stack>
  </CardBody>


</Card>
<Card maxW='sm'>
  <CardBody>
    <Image
      src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer_080323_11_new.jpg"
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
    
 
    </Stack>
  </CardBody>


</Card>


<Card maxW='sm'>
  <CardBody>
    <Image
      src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer_080323_13.jpg"
      alt='Green double couch with wooden legs'
      borderRadius='lg'
    />
    <Stack mt='6' spacing='3'>
    
     
     
    </Stack>
  </CardBody>


</Card>
</Flex>



</Box>

<Box>
    <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/1920_223_desktop_summer_080323_47.jpg"/>
</Box>


{/* ---brands----- */}
    

    <Box>
      <SimpleGrid columns={5} p={10} gap={10}>
      {
           brand?.brands.map((el)=>{
                return <Image src={el.image} w="200px" />
        })
    }
      </SimpleGrid>
    </Box>

    <Box>

        <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer_080323_21_NEW.jpg"/>
        <Image src="https://cdn.fcglcdn.com/brainbees/images/cattemplate/fashion_desktop_summer_080323_22_NEW.jpg"/>


    </Box>


    {/* ---------footer------------ */}
    </>
)


}

export default Navbar