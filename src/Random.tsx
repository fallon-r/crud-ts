import { Image,Box } from "@chakra-ui/react"


const Random = () => {
  return (
    <div>
        <Box boxSize='md'>
            <Image 
                src="https://picsum.photos/500/500"
                objectFit='cover'
                alt='Random photo from picsum' 
                borderRadius='100'
                />

        </Box>

    </div>
  )
}

export default Random