const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
const jsonServer = require('json-server');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const router = jsonServer.router('db.json');
app.use('/api', router);

app.get('/api/users', (req, res) => {
  const users = router.db.get('users').value();
  res.json(users);
});

app.post('/api/users', (req, res) => {
  const { id, name, email } = req.body;
  if (!id || !name || !email) {
    return res.status(400).json({ error: 'Bazı alanlar eksik.' });
  }
  const newUser = { id, name, email };
  router.db.get('users').push(newUser).write();
  res.json(newUser);
});

app.get('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const user = router.db.get('users').find({ id: parseInt(id) }).value();
  if (!user) {
    return res.status(404).json({ error: 'Kullanıcı bulunamadı.' });
  }
  res.json(user);
});

app.delete('/api/users/:id', (req, res) => {
  const { id } = req.params;
  const userIndex = router.db.get('users').findIndex({ id: parseInt(id) }).value();
  if (userIndex === -1) {
    return res.status(404).json({ error: 'Kullanıcı bulunamadı.' });
  }
  router.db.get('users').splice(userIndex, 1).write();
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Server başlatıldı. Port: ${PORT}`);
});
