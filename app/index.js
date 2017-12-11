import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/index';
import models from './models/index';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.redirect('/api/lists');
});

app.use('/api', routes);
models.sequelize.sync()
  .then(() => {
    const server = app.listen(port, () => console.log('Server running'));
  });