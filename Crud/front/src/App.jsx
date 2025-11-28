{/* Bibliotecas utilizadas:
  Chakra UI
  react-dom
  lucide-react
   */}
import { useState } from 'react'
import { AbsoluteCenter, Center, Flex, Spacer, Box, Stack, Heading } from "@chakra-ui/react"
import AplicativoMenu from './components/nav/aplicativoMenu'
import PageStart from './components/pages/pageStart'

{/* Função principal do aplicativo */ }
function App() {
  return (
    <div>
      {/* Barra de Menu com chamadas para outras páginas */}
      <AplicativoMenu />

      {/* Centralizando a pagina inical*/}
      <AbsoluteCenter>
        <Stack justify={"space-evenly"} align={"start"}
        >
          {/* Chamada do elemento principal da pagina inicial */}
          <PageStart />

        </Stack>
      </AbsoluteCenter>
    </div>

  )
}

export default App
