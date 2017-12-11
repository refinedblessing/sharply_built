const List = require('../models/index').List;
const Task = require('../models/index').Task;

const getLists = (req, res) => {
  List.all({
    include: [{ model: Task, as: 'Items' }]
  })
    .then((lists) => {
      res.json(lists);
    })
    .catch(err => {
      res.status(500).send({err: err.toString()});
    });
}

const getList = (req, res) => {
  res.json(req.list);
}

const createList = (req, res) => {
  List.create({
    title: req.body.title,
    include: [{ model: Task, as: 'Items' }]
  })
  .then(list => {
    res.json(list);
  })
  .catch(err => {
    res.status(500).send({err});
  });
}

const deleteList = (req, res) => {
  req.list.destroy()
  .then(() => {
    res.status(200).send({
      info: 'List successfully destroyed'
    })
  })
  .catch(err => {
    res.status(500).send({err: err.toString()});
  });
}

const updateList = (req, res) => {
  req.list
    .update({
      title: req.body.title
    })
    .then((list) => {
      res.status(200).send(list)
    })
    .catch(err => {
      res.status(500).send({err});
    })
}

export {
  getLists,
  getList,
  createList,
  deleteList,
  updateList
};