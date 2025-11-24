// Delete será no planos

export default function Fdelete() {
    return (<div className="inserts_box_content">
        <h2>Excluir tipo de plano</h2>

        <label htmlFor="dnome">Nome do plano</label>
        <input type="text" id="dname" />

        <label htmlFor="ddescricao">Descrição do plano </label>
        <input type="text" id="ddescricao" />

        <label htmlFor="dmeses"> Meses do plano</label>
        <input type="text" id="dmeses" />

        <label htmlFor="dpreco"> Preço mensal do plano</label>
        <input type="text" id="dpreco" />

        <div className="inserts_box_content_final">
            <label> Modalidade está ativa?</label>
            <div id="dinsert_situacao">
                <label htmlFor="dativo">Sim</label>
                <input type="radio" id="iativo" value="true" name="usituacao" />
                <label htmlFor="uinativo">Não</label>
                <input type="radio" id="uinativo" value="false" name="usituacao" />
            </div>

            <div id="Fbotoes">
                <button type="submit" className="botao"> Excluir plano</button>
            </div>
        </div>

    </div>
    )
}