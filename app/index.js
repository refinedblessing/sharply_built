import express from 'express';
import bodyParser from 'body-parser';
import lists from './routes/lists';

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.redirect('/api/lists');
});

app.use('/api/lists', lists);

const server = app.listen(port, () => console.log('Server running'));