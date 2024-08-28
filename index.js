// index.js
require('dotenv').config();
const express = require('express');
const { Sequelize } = require('sequelize');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuração do Sequelize
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: process.env.DB_DIALECT
});

sequelize
  .authenticate()
  .then(() => console.log('Conexão com o banco de dados estabelecida com sucesso.'))
  .catch((err) => console.error('Não foi possível conectar ao banco de dados:', err));

app.use(express.json());

// Rotas para Users, Serviços, Notícias e Destaques
app.use('/api/users', require('./routes/users'));
app.use('/api/servicos', require('./routes/servicos'));
app.use('/api/noticias', require('./routes/noticias'));
app.use('/api/destaques', require('./routes/destaques'));

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
