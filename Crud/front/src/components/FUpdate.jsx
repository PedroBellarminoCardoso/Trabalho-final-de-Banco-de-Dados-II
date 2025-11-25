// Update será na modalidade
import "./style.css"

export default function Fupdate(){
    return(       <div className="inserts_box_content">
            <h2>Atualizar modalidade</h2>

            <label htmlFor="unome">Nome da modalidade</label>
            <input type="text" id="uname" />

            <label htmlFor="udescricao">Descricao da modalidade</label>
            <input type="text" id="udescricao" />

            <label htmlFor="uinstrutor"> Instrutor responsável</label>
            <input type="text" id="uinstrutor" />

            <div className="inserts_box_content_final">
                <label> Modalidade está ativa?</label>
                <div id="Finsert_situacao">
                    <label htmlFor="uativo">Sim</label>
                    <input type="radio" id="iativo" value="true" name="usituacao" />
                    <label htmlFor="uinativo">Não</label>
                    <input type="radio" id="uinativo" value="false" name="usituacao" />
                </div>

                <div id="Fbotoes">
                    <button type="submit" className="botao"> Enviar</button>
                    <button type="reset" className="botao">Resetar</button>
                </div>
            </div>

        </div>
    )
}