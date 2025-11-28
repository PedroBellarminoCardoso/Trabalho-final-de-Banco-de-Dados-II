import { Button, Input, InputGroup, Stack } from "@chakra-ui/react"
import { User, KeySquare } from 'lucide-react';
import { useState } from "react";

function LoginUser({ onTryLogin }) {

    {/* Chamada para capturar usuário e senha escritas */ }
    const [userNickName, setUserName] = useState("");
    const [userPassword, setUserPasswd] = useState("");

    return (
        <div>
            <Stack justify={"center"} align={"center"}
            >
                {/* Iniciando um gurpo de Input do Chakra UI 
                juntamente com o icone do lucide */}
                <InputGroup w={"20vw"} startAddon={<User />}>

                    {/* Chamado o input de Usuário e capturando o seu valor */}
                    <Input
                        type="text" id="userNickName"
                        bg={"#D9E9CF"} placeholder="Usuário"

                        value={userNickName}
                        onChange={(event) => setUserName(event.target.value)}
                    />
                </InputGroup>

                {/* Iniciando um gurpo de Input do Chakra UI 
                juntamente com o icone do lucide */}
                <InputGroup w={"20vw"} startAddon={<KeySquare />} >

                    {/* Chamado o input de senha e capturando o seu valor */}
                    <Input type="password" id="userPassword"
                        bg={"#D9E9CF"} placeholder="Usuário"

                        value={userPassword}
                        onChange={(event) => setUserPasswd(event.target.value)}

                    />
                </InputGroup>

                <Button type="submit"
                    color={"Black"}
                    borderColor={"#96A78D"}
                    bg={"#D9E9CF"}
                    onClick={() => onTryLogin(userNickName, userPassword)}
                >Entrar</Button>
            </Stack>
        </div>
    )

}

export default LoginUser