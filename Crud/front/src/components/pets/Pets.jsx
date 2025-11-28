import { Stack, Image, Text, Button } from "@chakra-ui/react"
import { useState } from "react"

export default function Pets({ animal }) {

    {/* Funçõees utilizadas para fazer a verificação de seleção do objeto */ }
    const [colorbord, setColorbord] = useState("#ffffff")
    const [estado, setEstado] = useState(true)

    {/* Verificação do estado de verificação do objeto */ }
    const handleClick = () => {
        if (estado == true) {
            setColorbord("#B6F500")
            setEstado(false)
        }
        else if (estado == false) {
            setColorbord("#ffffff")
            setEstado(true)
        }
    }


    return (
        <>
            {/* Objeto de caixa do PET em um botão para permitir a seleção usando o onClick */}
            <Button w={'80%'} h={"15%"} bg={'#D9E9CF'} borderRadius={"2xl"}
                display={"flex"} justifyContent={"flex-start"} borderWidth={"3px"} borderColor={colorbord}
                onClick={handleClick}>

                {/* Seleção da imagem do pet */}
                <Image
                    margin={"10px"}
                    borderRadius={"2xl"}
                    w={"100px"}
                    h={"100px"}
                    src={animal.map((item) => item.imagem)}
                />

                <Stack textAlign={"center"} justify={"center"} w={"50%"}>

                    {/* Chamada de informações do PET */}
                    {animal.map((item) => (

                        <div>
                            <Text color={"black"} bg={"#91c49dff"} borderRadius={"2xl"} marginTop={"2px"} marginBottom={"2px"}> {item.nome_do_pet} </Text>
                            <Text color={"black"} bg={"#91c49dff"} borderRadius={"2xl"} marginTop={"2px"} marginBottom={"2px"}> {item.codigodeservico}</Text>
                            <Text color={"black"} bg={"#91c49dff"} borderRadius={"2xl"} marginTop={"2px"} marginBottom={"2px"}> {item.dataservico}</Text>
                        </div>

                    ))}
                </Stack>

                {/* (Incompleto)
                Status atual do animal, será trocado por uma função automática retiando a imagem estática atual*/}
                <Image
                    margin={"10px"}
                    border={"2px solid #FF746C"}
                    borderRadius={"100%"}
                    w={"50px"}
                    h={"50px"}
                    src={"https://uploads.metroimg.com/wp-content/uploads/2024/09/01135904/Cachorro-espera-por-tutora-que-morreu-na-porta-de-hospital-ha-8-anos.jpg"}
                />

            </Button>
        </>
    )
}