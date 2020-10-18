import express from 'express';
import './database/connection';
import routes from './routes';
import path from 'path';
import 'express-async-errors';
import errorHandler from './errors/handlers'
import cors from 'cors';


const app = express();

app.use(cors());
app.use(express.json()); ///express não entende json, por isso tem que colocar isso ("plugin")
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
// ROTA - conjunto inteiro
// Recurso - usuário
// Métodos HTTP = GET, POST, PUT, DELETE
// GET - Buscando info (lista, items, etc) - navegador usa esse método
// POST - Criando Informação
// PUT - Editar informação
// Delete - Deletar info

// Parâmetros - 3 TIPOS
// Query Params: http://localhost:3333/users?search=diego --> usa '?' busca, filtro, paginação etc parâmetros opcionais
// Route Params: http://localhost:3333/users/1 (identificar um recurso - por "ID")
// Body: http://localhost:3333/users --> informações complexas, formulários, dados etc

// 3 formas de lidar com banco de dados: Driver Nativo, Query builder e ORM
// Object Relational Mapping: maior abstração, uma classe JS que significa uma tabela no banco de dados

// migrations 

app.use(errorHandler);

app.listen(3333);