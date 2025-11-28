import AplicativoMenu from "../nav/aplicativoMenu"
import { AbsoluteCenter, Stack } from "@chakra-ui/react"

import LoginUser from "../login/login";

{/* (Incompleto) Função para validar login e senha de funcionario */ }
function onTryLogin(userNickName, userPassword) {

    let dataUser = {
        userNickName,
        userPassword
    }
    console.log(dataUser)

}

function PageEmployee() {

    return (
        <div>
            {/* Chamada do menu superior*/}
            <AplicativoMenu />

            <AbsoluteCenter>
                <Stack bg={"#B6CEB4"} h={"30vh"} w={"30vw"} borderRadius={"2xl"}
                    justify={"center"} align={"center"}>

                    {/* Chamada da função de login e passando o valor da função OnTryLogin para ela*/}
                    <LoginUser onTryLogin={onTryLogin} />
                
                </Stack>
            </AbsoluteCenter>

        </div>
    )

}
export default PageEmployee