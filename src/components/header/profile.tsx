import { Box, Flex, Text, Avatar } from '@chakra-ui/react'

type ProfileProps = {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Pedro Ribeiro</Text>
          <Text color="gray.300" fontSize="small">pedroribeiro.developer@gmail.com</Text>
        </Box>
      )}
      <Avatar size="md" name="Pedro Ribeiro" src="https://github.com/pedroribeirodev.png" />
    </Flex>
  )
}