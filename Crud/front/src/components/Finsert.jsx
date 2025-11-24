// Insert será no instrutor
import { useState } from "react"
import "./style.css"

export default function Finsert({ onAddNewInstrutor }) {

    const [nomeInstrutor, setNomeInstrutor] = useState("")
    const [cpfInstrutor, setCpfInstrutor] = useState("")
    const [telInstrutor, setTelInstrutor] = useState("")
    const [crefInstrutor, setCrefInstrutor] = useState("")
    const [dataInstrutor, setDataInstrutor] = useState("")
    const [ativoInstrutor, setAtivoInstrutor] = useState("")

    return (
        <div className="inserts_box_content">
            <h2>Cadastrar novo instrutor</h2>

            <label htmlFor="iname">Nome do instrutor</label>
            <input type="text" id="iname"
                value={nomeInstrutor}
                onChange={(event) => setNomeInstrutor(event.target.value)} />

            <label htmlFor="icpf">CPF do instrutor</label>
            <input type="text" id="icpf"
                value={cpfInstrutor}
                onChange={(event) => setCpfInstrutor(event.target.value)} />

            <label htmlFor="itelefone"> Telefone para contato</label>
            <input type="text" id="itelefone"
                value={telInstrutor}
                onChange={(event) => setTelInstrutor(event.target.value)} />

            <label htmlFor="icref">Registro CREF</label>
            <input type="text" id="icref"
                value={crefInstrutor}
                onChange={(event) => setCrefInstrutor(event.target.value)} />

            <label htmlFor="icontrato">Data de contrato</label>
            <input type="date" id="icontrato"
                value={dataInstrutor}
                onChange={(event) => setDataInstrutor(event.target.value)} />

            <div className="inserts_box_content_final">
                <label> O instrutor está contratado?</label>
                <div id="Finsert_situacao">
                    <label htmlFor="iativo">Sim</label>
                    <input type="radio" id="iativo" name="isituacao"
                        value={ativoInstrutor}
                        onSelect={(event) => setAtivoInstrutor(true)} />

                    <label htmlFor="iinativo">Não</label>
                    <input type="radio" id="iinativo" name="isituacao"
                        value={ativoInstrutor}
                        onSelect={(event) => setAtivoInstrutor(false)} />
                </div>

                <div id="Fbotoes">
                    <button type="submit" className="botao" onClick={() => {
                        onAddNewInstrutor(nomeInstrutor, cpfInstrutor, telInstrutor, crefInstrutor, dataInstrutor, ativoInstrutor);
                        setNomeInstrutor("");
                        setCpfInstrutor("");
                        setTelInstrutor("");
                        setCrefInstrutor("");
                        setDataInstrutor("");
                        setAtivoInstrutor("");
                    }}> Enviar</button>
                    <button type="reset" className="botao">Resetar</button>
                </div>
            </div>

        </div>
    )
}