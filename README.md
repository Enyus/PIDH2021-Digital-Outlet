# PIDH2021-Digital-Outlet
Projeto Integrador do curso WebFullStack da Digital House do 2º Semestre de 2021. Digital Outlet é um projeto de marketplace.


Link do Figma: https://www.figma.com/file/AywRxr4wmFFcc68L5jBzYN/Digital-Shop?node-id=0%3A1

Páginas Estáticas no Github Pages: https://enyus.github.io/DO$ (pode estar defasado em relação ao projeto principal)

# Instruções para uso:
Para a aplicação rodar tranquilamente, siga os seguintes passos:
- Clone o repositório com git clone
- Garanta que o MySQL Workbench esteja com as configurações de /config/database.js e não esqueça de criar uma tabela chamada "dho_db"
- No seu prompt de comando, na pasta criada use os seguintes comandos:
    - npm install (instala as bibliotecas necessárias)
    - npx sequelize db:migrate (cria as tabelas necessárias no banco de dados)
    - npx sequelize db:seed:all (cria entradas nas tabelas do banco de dados para que a aplicação tenha o mínimo para poder rodar tranquilamente)
    - npm start (começa o servidor e a aplicação está pronta pra ser utilizada no http://localhost:3000/)
