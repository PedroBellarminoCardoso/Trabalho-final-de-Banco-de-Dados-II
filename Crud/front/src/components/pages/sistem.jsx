import { Box, Stack, ScrollArea } from "@chakra-ui/react"
import AplicativoMenu from "../nav/aplicativoMenu"
import Pets from "../pets/Pets"
import Pets_contents from "../pets/pets_contents"
import { useState } from "react";

export default function Sistem() {

    {/*Dicionário utilizado para guardar dados de animais enaqunto não é 
        feito a ligação com DB */}
    const [animal, setAnimal] = useState([
        {
            id: 1,
            nome_do_pet: "Paulinho Malvadão",
            especie: "Cachorro",
            raça: "Golden",
            nome_responsavel: "Jorge",
            email: "Jorge@gmail.com",
            telefone: "+55 (68) 90203-0401",

            codigodeservico: "123123431",
            dataservico: "10-12-2025",

            imagem: "https://images.squarespace-cdn.com/content/v1/54822a56e4b0b30bd821480c/45ed8ecf-0bb2-4e34-8fcf-624db47c43c8/Golden+Retrievers+dans+pet+care.jpeg"
        }]
    );

    {/* Função do Chakra UI para dar efeito de sombra na rolagem */}
    const shadowRoll = {
        "--scroll-shadow-size": "4rem",
        maskImage:
            "linear-gradient(#000,#000,transparent 0,#000 var(--scroll-shadow-size),#000 calc(100% - var(--scroll-shadow-size)),transparent)",
        "&[data-at-top]": {
            maskImage:
                "linear-gradient(180deg,#000 calc(100% - var(--scroll-shadow-size)),transparent)",
        },
        "&[data-at-bottom]": {
            maskImage:
                "linear-gradient(0deg,#000 calc(100% - var(--scroll-shadow-size)),transparent)",
        },
    }

    return (
        <div>
            {/* Chamada de menu */}
            <AplicativoMenu />



            <Stack display={"flex"} direction={"row"} justifyContent={"space-evenly"}>

                <Box bg={"#B6CEB4"} h={"80vh"} w={"30vw"} m={"10vh 0 0 0"} borderRadius={"2xl"}
                >
                    {/* Função do Chakra UI para permitir o Scroll junto com o efeito de shadow */}
                    <ScrollArea.Root>
                        <ScrollArea.Viewport css={shadowRoll}>
                            
                            {/* Conteúdo que será mostrado na caixa */}
                            <ScrollArea.Content
                                m={"10px 0 0 0"}
                                h={"80vh"} w={"30vw"}
                                display={"flex"}
                                flexDirection={"column"}
                                alignItems={"center"}
                                justifyContent={"space-evenly"}
                                gap={"10px"}
                            >
                                {/* Chamad de função de Pets passando o valor do atual dicionário */}
                                <Pets animal={animal} />

                            </ScrollArea.Content>
                        </ScrollArea.Viewport>
                    </ScrollArea.Root>
                </Box>

                {/* Local onde será mostrado os dados do pet e onde será atualizado o estado do banho do pet */}
                <Box bg={"#B6CEB4"} h={"80vh"} w={"30vw"}
                    borderRadius={"2xl"}
                    m={"10vh 0 0 0"}
                    display={"flex"}
                    justifyContent={"space-evenly"}
                >
                    
                    {/*(Incompleto) Chama os dados em formato de imput do animal */}
                    <Pets_contents animal={animal} />
                
                </Box>

            </Stack>

        </div >
    )
}