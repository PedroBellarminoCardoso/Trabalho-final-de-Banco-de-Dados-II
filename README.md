## Projeto Sistema de Controle de Assinaturas para Academias
O projeto visa a criação de um modelo físico de banco de dados para um sistema de controle financeiro de uma academia. Desenvolvido com MySQL Server, e criando um CRUD para cadastros de novos clientes, novas assinaturas, seus instrutores, presenças e formas de treino. Onde é feito a conexão com o banco de dados por meio do JavaScript, fazendo todas as operações de adições, atualizações e eliminação desses dados.

### Integrantes

Ana Carolina Rovaris de Matos - AnaCarolinaRovaris<br>
Juan Sartori Alticimo - jass1945<br>
Pedro Bellarmino Cardoso - PedroBellarminoCardoso<br>
Renan Matias Zanini - RenanMZanini<br>

### Modelo Físico

A ferramenta [dbdiagram.io](https://dbdiagram.io/) foi utilizada para criar o modelo físico do banco de dados e, em seguida, gerar os scripts DDL das tabelas e relacionamentos.<br>
Arquivo fonte: [Modelo Fisico](https://dbdiagram.io/d/Modelo-Fisico-69111d0c6735e11170f635e5).<br>

<img width="1336" height="714" alt="Modelo_Físico" src="https://github.com/user-attachments/assets/d267c66d-9c31-4f9d-b1f0-8d49b6757a74" />





## Dicionário de Dados

As tabelas e indices foram documentados na seguinte planilha [Dicionário](https://github.com/PedroBellarminoCardoso/Trabalho-final-de-Banco-de-Dados-II/tree/main/Dicionário_dados)

## Scripts SQL

Neste projeto foi utilizado Microsoft SQL Server e JavaScript.

## Referências Bibliográticas

+ Microsoft. Acessar SQL: conceitos básicos, vocabulário e sintaxe. Disponivel em: https://support.microsoft.com/pt-br/topic/acessar-sql-conceitos-básicos-vocabulário-e-sintaxe-444d0303-cde1-424e-9a74-e8dc3e460671. Acesso em 10/11/2025.
+ DevMedia. Entendendo e usando índices. Disponivel em: https://www.devmedia.com.br/entendendo-e-usando-indices/6567?utm_dev=google_ads_pmax&gad_source=1&gad_campaignid=22326280955&gclid=CjwKCAiA86_JBhAIEiwA4i9Ju8fWYJCoZfBt7X1OLivvuuwBT3r-bBTD4U0FVk2zRYi-BJ5zypxEgRoCBj0QAvD_BwE. Acesso em 15/11/2025.
  

Abaixo, segue os scripts SQL separados por tipo:

+ [Tabelas](https://github.com/PedroBellarminoCardoso/Trabalho-final-de-Banco-de-Dados-II/tree/main/Script/ddl/Tabelas)
+ [Índices](https://github.com/PedroBellarminoCardoso/Trabalho-final-de-Banco-de-Dados-II/tree/main/Script/ddl/Indices)
+ [Gatilhos](https://github.com/PedroBellarminoCardoso/Trabalho-final-de-Banco-de-Dados-II/tree/main/Script/ddl/Trigers)
+ [Procedimentos armazenados](https://github.com/PedroBellarminoCardoso/Trabalho-final-de-Banco-de-Dados-II/tree/main/Script/ddl/procedimentos-armazenados)
+ [Funções](https://github.com/PedroBellarminoCardoso/Trabalho-final-de-Banco-de-Dados-II/tree/main/Script/ddl/Funções)
+ [DML](https://github.com/PedroBellarminoCardoso/Trabalho-final-de-Banco-de-Dados-II/tree/main/script/dml)



## Código Fonte do CRUD

+ Javascrip para o backend e conexão com banco SQL
+ Bibliotecas usadas no Javascrip: 
  + Express
  + mssql
  + cors

## Passos para execução do CRUD

Criar banco de dados pelo docker.
docker run xyz
...
[Codigo Fonte](https://github.com/PedroBellarminoCardoso/Trabalho-final-de-Banco-de-Dados-II/blob/main/crud/crud.txt)

.
.
.
.
.
.
.
.
.


## Relatório Final
O relatório final está disponível no arquivo [Relátorio_final/template1.docx](https://github.com/PedroBellarminoCardoso/Trabalho-final-de-Banco-de-Dados-II/tree/main/Relat%C3%B3rio_final)

Apresentaçao em slides disponivel [aqui](https://www.canva.com/design/DAG5ALgi1Vg/Cj30zYJVFzVN8f2BjArvFA/edit?utm_content=DAG5ALgi1Vg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton)
