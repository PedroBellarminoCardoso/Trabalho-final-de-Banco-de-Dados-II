import api from "../api/api";
import { useEffect, useState } from "react"
import "./style.css"

export default function Fdelete() {
    const [plano, setPlano] = useState([]);
    const [seleciona, setSeleciona] = useState(null);

    async function getPlano() {
        try {
            const planoFromAPI = await api.get('/user');
            setPlano(planoFromAPI.data);
        } catch (error) {
            console.error("Erro ao buscar planos", error);
        }
    };

    async function deletaPlano(id) {
        await api.delete(`/user/${id}`)
        
    }

    useEffect(() => {
        getPlano();
    }, []);

    const mudando = (event) => {
        const idSelecionado = parseInt(event.target.value);
        
        if (!idSelecionado) {
            setSeleciona(null);
            return;
        }

        const planoEncontrado = plano.find(p => p.plano_id === idSelecionado);
        setSeleciona(planoEncontrado);
    };

    const handleExcluir = () => {
        if (seleciona) {
            // Confirmação simples antes de excluir
            if(window.confirm(`Deseja realmente excluir o plano ${seleciona.nome}?`)) {
                 alert(`Excluindo Plano: ${seleciona.nome}`);
                 deletaPlano(seleciona.plano_id);
            }
        };
    };

    return (
        <div className="inserts_box_content">
            <h2>Excluir tipo de plano</h2>

            <label htmlFor="dname">Selecione o plano a ser excluído</label>
            
            <select name="planos" id="dname" onChange={mudando}>
                <option value="">-- Selecione um plano --</option>
                {plano.map((nomes) => (
                    <option key={nomes.plano_id} value={nomes.plano_id}>{nomes.nome}</option>
                ))}
            </select>

            {seleciona && (
                <>
                    <label className="titulo_delete">Descrição do plano</label>
                    <div className="valores_delete">{seleciona.descricao}</div>

                    <label className="titulo_delete">Meses do plano</label>
                    <div className="valores_delete">{seleciona.meses}</div>

                    <label className="titulo_delete">Preço mensal do plano</label>
                    <div className="valores_delete">R$ {seleciona.preco_mensal}</div>

                    <label className="titulo_delete">Modalidade está ativa?</label>
                    <div className="valores_delete">
                        {seleciona.ativo ? "Sim" : "Não"}
                    </div>

                    <button type="button" onClick={handleExcluir} className="botao">
                        Excluir plano
                    </button>
                </>
            )}
        </div>
    )
}