import {Box,Image,Input,SimpleGrid} from "@chakra-ui/react"

import { PhoneIcon, AddIcon, WarningIcon ,SearchIcon} from '@chakra-ui/icons'

function Navbar(){


return(
    <>
    <SimpleGrid columns={2} spacing={10}>


    <Box border="1px solid red">


    <Image src="https://cdn.fcglcdn.com/brainbees/images/n/fc_logo.png" alt="logo" />




    </Box>

    <Box>
        <Input w={500} />
        <SearchIcon/>

    </Box>


    </SimpleGrid>

    
    
    </>
)


}

export default Navbar