import AplicativoMenu from "../nav/aplicativoMenu"
import { AbsoluteCenter, Stack, Button } from "@chakra-ui/react"

//Ainda falta fazer a troca de estados e nomes para cadastro
//Ainda falta fazer o envio dos dados

function PageClient() {

    return (
        <div>
            {/* Chamada do menu superior*/}
            <AplicativoMenu />

            <AbsoluteCenter>
                <Stack bg={"#B6CEB4"} h={"80vh"} w={"80vw"} borderRadius={"2xl"}
                    justify={"space-evenly"} align={"start"}
                >
                    {/* Botão para abrir cadastro de um cliente*/}
                    <Button
                        margin={"0 0 0 10vh"}
                        bg={"#D9E9CF"}
                        w={"20vw"} h={"10vh"}
                        borderRadius={"2xl"}
                        color={"black"}
                        fontSize={"2xl"}
                        borderWidth={"3px"}
                        borderColor={"#96A78D"}>
                        Cadastrar Cliente
                    </Button>

                    {/* Botão para abrir cadastro de Pet */}
                    <Button
                        margin={"0 0 0 10vh"}
                        bg={"#D9E9CF"}
                        w={"20vw"} h={"10vh"}
                        borderRadius={"2xl"}
                        color={"black"}
                        fontSize={"2xl"}
                        borderWidth={"3px"}
                        borderColor={"#96A78D"}>
                        Cadastrar Pet
                    </Button>

                    {/* Botão para abrir o cadastro de agendamento */}
                    <Button
                        margin={"0 0 0 10vh"}
                        bg={"#D9E9CF"}
                        w={"20vw"} h={"10vh"}
                        borderRadius={"2xl"}
                        color={"black"}
                        fontSize={"2xl"}
                        borderWidth={"3px"}
                        borderColor={"#96A78D"}>
                        Agendamento
                    </Button>



                </Stack>
            </AbsoluteCenter>
        </div>

    )


}
export default PageClient