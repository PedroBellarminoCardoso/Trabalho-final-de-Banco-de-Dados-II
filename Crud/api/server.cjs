const express = require('express')
const sql = require('mssql');

const cors = require('cors');


// Configurações do Banco
const config = {
    user: 'sqluser',             // Usuário
    password: '123',            //  senha
    server: 'localhost',       // IP do servidor 
    database: 'EXITFIT',      // Banco de dados
    port: 54234,             // Porta 
    options: {
        encrypt: false,     // Para local deixe em falso
        enableArithAbort: true,
        trustServerCertificate: true,    // Muda para true para aceitar local
        cryptoCredentialsDetails: {
            minVersion: 'TLSv1'        // Ajuda se o SQL Server for versão 2008 ou 2012
        }
    }
};

// Deletar item
async function deletarPlano(id) {
    try {
        // Conectar ao Banco
        console.log('Conectando...');
        const concta = await sql.connect(config);
        console.log('Conectado com sucesso!');

        // Comando deletar
        console.log('Deletando o Plano...')
        await concta.request()
            .input('id', sql.Int, id)
            .query(`
               IF (@id = 1) 
                    BEGIN
                        UPDATE Assinatura SET plano_id = 2 WHERE plano_id = @id;
                        DELETE FROM dbo.Planos WHERE plano_id = @id;
                    END
                ELSE
                    BEGIN
                        UPDATE Assinatura SET plano_id = 1 WHERE plano_id = @id;
                        DELETE FROM dbo.Planos WHERE plano_id = @id;
                    END`)

    } catch (err) {
        // Pega erro
        console.error('Erro na conexão :', err.message);

    } finally {
        sql.close();
    }

}

// Insertar item
async function insertaValor(nome, cpf, telefone, cref, ativo) {
    try {
        // Conectar ao Banco
        console.log('Conectando...');
        const concta = await sql.connect(config);
        console.log('Conectado com sucesso!');

        // Comando Insertar
        console.log('Inserindo valor!');
        await concta.request()
            .input('nome', sql.VarChar, nome)
            .input('cpf', sql.VarChar, cpf)
            .input('telefone', sql.VarChar, telefone)
            .input('registro_CREF', sql.VarChar, cref)
            .input('ativo', sql.Bit, ativo)
            .query('INSERT INTO dbo.instrutores (nome,cpf,telefone,registro_CREF,ativo,contratado_em) VALUES (@nome,@cpf,@telefone,@registro_CREF,@ativo,GETDATE())')

    } catch (err) {
        // Pega erro
        console.error('Erro no insert :', err.message);

    } finally {
        sql.close();
    }

}


// Atualizar item

async function atualizaModalidade(id, nome, descricao, instrutor, ativo) {
    try {
        // Conectar ao Banco
        console.log('Conectando...');
        const concta = await sql.connect(config);
        console.log('Conectado com sucesso!');

        // Comando buscar
        await concta.request()
            .input('id', sql.Int, parseInt(id))
            .input('nome', sql.VarChar, nome)
            .input('descricao', sql.VarChar, descricao)
            .input('instrutor', sql.VarChar, parseInt(instrutor))
            .input('ativo', sql.Bit, ativo)
            .query(`UPDATE dbo.Modalidades 
                    SET nome = @nome,
                        descricao = @descricao,
                        instrutor_principal_id = @instrutor,
                        ativo = @ativo
                    WHERE modalidade_id = @id`)


    } catch (err) {
        // Pega erro
        console.error('Erro na Atualização :', err.message);

    } finally {
        sql.close();
    }

}


// Buscar item
async function buscarPlano() {
    try {
        // Conectar ao Banco
        console.log('Conectando...');
        const concta = await sql.connect(config);
        console.log('Conectado com sucesso!');

        // Comando buscar
        const resultado = await concta.request().query("SELECT * from dbo.Planos");
        console.log('Lista de planos:', resultado.recordset);
        return resultado.recordset;

    } catch (err) {
        // Pega erro
        console.error('Erro na busca :', err.message);

    } finally {
        sql.close();
    }

}

async function buscarModalidade() {
    try {
        // Conectar ao Banco
        console.log('Conectando...');
        const concta = await sql.connect(config);
        console.log('Conectado com sucesso!');

        // Comando buscar
        const resultado = await concta.request().query("SELECT * from dbo.Modalidades");
        console.log('Lista de modalidade:', resultado.recordset);
        return resultado.recordset;

    } catch (err) {
        // Pega erro
        console.error('Erro na busca :', err.message);

    } finally {
        sql.close();
    }

}

async function buscarInstrutor() {
    try {
        // Conectar ao Banco
        console.log('Conectando...');
        const concta = await sql.connect(config);
        console.log('Conectado com sucesso!');

        // Comando buscar
        const resultado = await concta.request().query("SELECT * from dbo.Instrutores");
        console.log('Lista de Instrutores:', resultado.recordset);
        return resultado.recordset;

    } catch (err) {
        // Pega erro
        console.error('Erro na busca :', err.message);

    } finally {
        sql.close();
    }

}

//Requests

const app = express();
app.use(express.json(), cors());


//Listar - GET
app.get('/user/planos', async (req, res) => {
    const resultado = await buscarPlano();

    res.status(200).json(resultado)
});

app.get('/user/modalidade', async (req, res) => {
    const resultado = await buscarModalidade();

    res.status(200).json(resultado)
});

app.get('/user/instrutor/busca', async (req, res) => {
    const resultado = await buscarInstrutor();

    res.status(200).json(resultado)
});





// Criar Usuário - Post
app.post('/user/cadastrar', async (req, res) => {

    console.log("Corpo da requisição:", req.body);
    console.log("Tipo do nome:", typeof req.body.nome);

    const { nome, cpf, telefone, cref, ativo } = req.body;

    await insertaValor(nome, cpf, telefone, cref, ativo)

    res.status(201).json(req.body)
});



// Editar - PUT (ROUTE PARAMS)
app.put('/user/modalidade/atualiza/:id', async (req, res) => {

    //Passando o valor do id pelo PUT
    const id = parseInt(req.params.id);

    const { nome, descricao, instrutor, ativo } = req.body;

    console.log(`Atualizando a modalidade de ID: ${id}`);


    await atualizaModalidade(id,nome, descricao, instrutor, ativo)


    res.status(200).json({ massage: 'Modalidade Atualizada com suceso!' })
});

// Delete -  DELETE (ROUTE PARAMS)

app.delete('/user/planos/:id', async (req, res) => {

    //Passando o valor do id pelo PUT
    const id = req.params.id;

    console.log(`Deletando o plano de ID: ${id}`);

    await deletarPlano(id)

    res.status(200).json({ massage: 'Plano deletado com suceso!' })
});


app.listen(3000);



