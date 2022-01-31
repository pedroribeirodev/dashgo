import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { RiMenuLine } from 'react-icons/ri'
import { useSidebarDrawer } from '../../contexts/sidebarDrawerContext'
import { Logo } from './logo'
import { Notification } from './notifications'
import { Profile } from './profile'
import { Search } from './search'

export function Header() {
  const { onOpen } = useSidebarDrawer()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      { !isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
          mt="2"
        />
      ) }
      <Logo />

      { isWideVersion && <Search /> }
      <Flex
        align="center"
        ml="auto"
      >
        <Notification />    
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}