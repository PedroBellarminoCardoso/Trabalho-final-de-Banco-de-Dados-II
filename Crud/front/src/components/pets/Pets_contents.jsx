import { Box, DataList, Text } from "@chakra-ui/react"
import { useState } from "react"


export default function Pets_contents({ animal }) {

    return (
        <div>
            <Box bg={"#D9E9CF"} w={"25vw"} h={"15vh"} borderRadius={"2xl"} marginTop={"11px"} marginBottom={"10px"}>
                {/* Local de resumo do Pet */}
            </Box>

            <Box bg={"#D9E9CF"} w={"25vw"} h={"61vh"} borderRadius={"2xl"}>

                {/*Local principal da aplicação, será montado a lista de dados do PET */}
                <DataList.Root>
                    {/* Função chamando os dados do pet
                    Ainda falta fazer verificações para não puxar todos os animais cadastrados >:(
                    */}
                    {animal.map((item) => (
                        <DataList.Item key={item.nome_do_pet}>

                            {/*Chamada do nome */}
                            <DataList.ItemLabel>Nome do Pet</DataList.ItemLabel>
                            <DataList.ItemValue>{item.nome_do_pet}</DataList.ItemValue>

                            {/*Chamada da especie */}
                            <DataList.ItemLabel>Especie</DataList.ItemLabel>
                            <DataList.ItemValue>{item.especie}</DataList.ItemValue>

                            {/* Chamada da raça*/}
                            <DataList.ItemLabel>Raça</DataList.ItemLabel>
                            <DataList.ItemValue>{item.raça}</DataList.ItemValue>

                            {/* Chamada do responsavel */}
                            <DataList.ItemLabel>Responsável</DataList.ItemLabel>
                            <DataList.ItemValue>{item.nome_responsavel}</DataList.ItemValue>

                            {/* Chamada do email */}
                            <DataList.ItemLabel>E-mail</DataList.ItemLabel>
                            <DataList.ItemValue>{item.email}</DataList.ItemValue>

                            {/* Chamada do telefone */}
                            <DataList.ItemLabel>Telefone</DataList.ItemLabel>
                            <DataList.ItemValue>{item.telefone}</DataList.ItemValue>
                        </DataList.Item>

                    ))}

                </DataList.Root>
            </Box>

        </div>
    )
}