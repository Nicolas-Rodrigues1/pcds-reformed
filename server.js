const jsonServer = require('json-server');
const app = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();


app.use(middlewares);
app.use(router);

// Inicia o servidor na porta 3000
app.listen(3000, () => {
  console.log('JSON Server is running on port 3000');
});