import { Button, Input, InputGroup, Stack, VStack } from "@chakra-ui/react"
import { Send } from "lucide-react";
import { useState } from "react";

function FindServiceCode({ onFindServiceCode }) {

    {/* Função para poder usar useState e capturar o valor escrito */ }
    const [serivceCode, setServicecode] = useState("");

    return (
        <Stack direction={"row"} justify={"center"}>

            {/* Input para capturar o valor inserido */}
            <Input bg={"#D9E9CF"} w={"30vw"} h={"5vh"}
                type="Text" placeholder="Código de Serviço"
                textAlign={"center"}
                value={serivceCode}
                onChange={(event) => setServicecode(event.target.value)}
            />

            {/* Botão de enviar o valor escrito que está interligado com a função que buscará no DB o status do PET */}
            <Button onClick={() => onFindServiceCode(serivceCode)}
                bg={"#D9E9CF"} h={"5vh"} padding={"0"}
            >
                <Send color="gray" />
            </Button>
        </Stack>

    )
}


export default FindServiceCode;