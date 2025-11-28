import { AbsoluteCenter, Center, Flex, Spacer, Box, Stack, Heading } from "@chakra-ui/react"
import FindServiceCode from '../../components/serivceCode/serviceCode'

{/* (Incompleto)
    Função para imprimir valor colocado no Input
    Será subistituida por uma função de pesquisa de código em um DB*/}
function onFindServiceCode(serivceCode) {
  console.log(serivceCode)
}

export default function PageStart(){
    return (

        
        <Stack bg={"#B6CEB4"} h={"80vh"} w={"80vw"} borderRadius={"2xl"}
            justify={"center"} gap={"100px"}>
            
            {/* Protótipo inicial de página inicial, será remodelada*/}
            <Flex alignContent={"center"} justify={"center"} gap={"100px"}>

                <Box bg={"#D9E9CF"} h={"21vh"} w={"21vh"} borderRadius={"2xl"}>
                </Box>

                <Box bg={"#D9E9CF"} w={"21vh"} borderRadius={"2xl"}>
                </Box>

                <Box bg={"#D9E9CF"} w={"21vh "} borderRadius={"2xl"}>
                </Box>
            </Flex>

            <Flex alignContent={"center"} justify={"center"}>

            </Flex>

            {/* Função para buscar o valor de serviço*/}
            <FindServiceCode onFindServiceCode={onFindServiceCode} />

        </Stack>

    )
}