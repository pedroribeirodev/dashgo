import { useDisclosure, UseDisclosureReturn } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { createContext, useContext, useEffect } from 'react'

type SidebarDrawerProviderProps = {
  children: React.ReactNode
}

type SiderbarDrawerContextData = UseDisclosureReturn

const SiderbarDrawerContext = createContext({} as SiderbarDrawerContextData)

export function SidebarDrawerProvider({ children }: SidebarDrawerProviderProps) {
  const disclosure = useDisclosure()
  const route = useRouter()

  useEffect(() => {
    disclosure.onClose()
  }, [route.asPath])
  
  return (
    <SiderbarDrawerContext.Provider value={disclosure}>
      {children}
    </SiderbarDrawerContext.Provider>
  )
}

export const useSidebarDrawer = () => useContext(SiderbarDrawerContext)