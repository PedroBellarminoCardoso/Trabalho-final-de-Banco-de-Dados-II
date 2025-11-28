import { Button, Stack } from '@chakra-ui/react'
import { useState } from 'react'
import { House, PawPrint, CircleUser, Heading } from 'lucide-react';
import { useNavigate } from 'react-router';


function AplicativoMenu() {

    {/* Função para utilizar a navegação entra páginas no react */}
    const navigate = useNavigate()

    return (
        <Stack
            h={"5vh"}
            gap={"100px"} align={"center"}
            justify={"center"} direction={"row"}
            bg={"#B6CEB4"}
            borderRadius={"2xl"}>
          
            {/* Barra de menu principal.
            Todos os elementos Button seguem o mesmo padrão, 
            sendo a única diferença o caminho e o ícone */}

            <Button onClick={() => navigate("/")}
                bg={"none"} h={'5vh'}>
                <House />
            </Button>

            <Button onClick={() => navigate("/Clientes")}
                bg={"none"} h={'5vh'}>
                <PawPrint />
            </Button>

            <Button onClick={() => navigate("/Funcionarios")}
                bg={"none"} h={'5vh'}>
                <CircleUser />
            </Button>

            <Button onClick={() => navigate("/Funcionarios/sistem")}
                bg={"none"} h={'5vh'}>
                <CircleUser />
            </Button>

        </Stack>
    )


}
export default AplicativoMenu