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

async function atualizaInstrutor(id, nome, cpf, telefone, cref, ativo) {
    try {
        // Conectar ao Banco
        console.log('Conectando...');
        const concta = await sql.connect(config);
        console.log('Conectado com sucesso!');

        // Comando buscar
        await concta.request()
            .input('id', sql.Int, id)
            .input('nome', sql.VarChar, nome)
            .input('cpf', sql.VarChar, cpf)
            .input('telefone', sql.VarChar, telefone)
            .input('registro_CREF', sql.VarChar, cref)
            .input('ativo', sql.Bit, ativo)
            .query(`UPDATE dbo.instrutores 
                SET nome = @nome,
                    cpf = @cpf,
                    telefone = @telefone,
                    registro_CREF = @registro_CREF,
                    ativo = @ativo
                WHERE instrutor_id = @id`)


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

//Criar tabela
async function createTable() {
    try {
        // Conectar ao Banco
        console.log('Conectando...');
        const concta = await sql.connect(config);

        console.log('Conectado com sucesso!');

        // Comando para criar o banco
        const queryCriacao = `
                CREATE TABLE dbo.alunos (
                    ID INT IDENTITY(1,1) PRIMARY KEY,
                    nome VARCHAR(40) NOT NULL,
                    cpf VARCHAR(11),
                    email VARCHAR(100),
                    telefone VARCHAR(20),
                    data_nascimento SMALLDATETIME,
                    sexo VARCHAR(1),
                    criado_em SMALLDATETIME DEFAULT GETDATE(),
                    ativo BIT NOT NULL DEFAULT 1
                ) `

        // Codigo de request
        const resquest = new sql.Request();
        await resquest.query(queryCriacao);
        console.log("Foi");

        //Mostrar o resultado
        console.dir(result.recordset);

    } catch (err) {
        // Pega erro
        console.error('Erro na criação de tabela :', err.message);

    } finally {
        sql.close();
    }
}


//Requests

const app = express();
app.use(express.json(), cors());


//Listar - GET
app.get('/user', async (req, res) => {
    const resultado = await buscarPlano();

    res.status(200).json(resultado)
});


// Criar Usuário - Post
app.post('/user', async (req, res) => {

    console.log("Corpo da requisição:", req.body);
    console.log("Tipo do nome:", typeof req.body.nome);

    const { nome, cpf, telefone, cref, ativo } = req.body;

    await insertaValor(nome, cpf, telefone, cref, ativo)

    res.status(201).json(req.body)
});

// Editar - PUT (ROUTE PARAMS)
app.put('/user/:id', async (req, res) => {

    //Passando o valor do id pelo PUT
    const id = req.params.id;

    const { nome, cpf, telefone, cref, ativo } = req.body;

    console.log(`Atualizando o instrutor de ID: ${id}`);


    await atualizaInstrutor(id, nome, cpf, telefone, cref, ativo)

    res.status(200).json(req.body)
});

// Delete -  DELETE (ROUTE PARAMS)

app.delete('/user/:id', async (req, res) => {

    //Passando o valor do id pelo PUT
    const id = req.params.id;

    console.log(`Deletando o plano de ID: ${id}`);

    await deletarPlano(id)

    res.status(200).json({ massage: 'Plano deletado com suceso!' })
});


app.listen(3000);



