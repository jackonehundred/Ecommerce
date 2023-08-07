const jsonServer = require('json-server');
const cookieParser = require('cookie-parser');
const path = require('path');
const { addUser } = require('./utils');

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'jsons', 'db.json'));
const middlewares = jsonServer.defaults();

const addDelay = (delay = 0) => new Promise((resolve) => setTimeout(resolve, delay));

// вызвать заместо res.send(...) -> simulateError(res); если нужно имитировать ошибку для теста
const simulateError = (res, code = 500) => res.status(code).jsonp({ code, message: 'fail' });
// чтобы имитировать статус отличный от 200 res.sendStatus(401)

server.use(cookieParser());
server.use(jsonServer.bodyParser);
server.use(middlewares);
server.use((req, res, next) => {
  next();
});

const BASE_PATH = '/api/v1';
// ________________________________________________________________________________
// СЮДА ДОБАВЛЯЕМ JSON-ы С ОТВЕТАМИ ДЛЯ ФРОНТА
// ________________________________________________________________________________

const example = require('./jsons/example.json');
const users = require('./jsons/users.json');
const user = require('./jsons/user.json');
const entries = require('./jsons/entries.json');
const domain = require('./jsons/domain.json');
server.get('/example', async (req, res) => {
  await addDelay(1000);
  await res.send(example);
});

server.get(`${BASE_PATH}`, async (req, res) => {
  await addDelay(1000);
  res.send(domain);
});
server.get(`${BASE_PATH}/users`, async (req, res) => {
  await addDelay(1000);
  await res.send(users);
});

server.get(`${BASE_PATH}/users/:userID`, async (req, res) => {
  const { userID } = req.params;
  await addDelay(1000);
  console.log({ userID });

  if (userID !== undefined) {
    const user = users.find((el) => el.objectGUID === userID);
    await res.send(user);
  } else {
    await res.status(500);
  }
});

server.post(`${BASE_PATH}/users`, async (req, res) => {
  const body = req.body;
  const user = addUser(body);

  await addDelay(3000);
  await users.push(user);
  await res.send(user).status(201);
});

server.get(`${BASE_PATH}/entries`, async (req, res) => {
  await addDelay(1000);
  await res.send(entries);
});

server.delete(`${BASE_PATH}/users/:id`, async (req, res) => {
  res.send(200);
});
// ________________________________________________________________________________
// ЗАВЕРШЕНИЕ НАСТРОЙКИ СЕРВЕРА
// ________________________________________________________________________________

server.use(router);
server.listen(process.env.PORT || 8080, () => {
  console.log(`JSON Server is running: http://localhost:${process.env.PORT || 8080}`);
});
