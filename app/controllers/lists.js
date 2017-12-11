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
  if (!parseInt(req.params.id, 10)) {
    res.send({
      err: 'List not available'
    })
  }

  List.find({
      id: req.params.id,
      include: [{ model: Task, as: 'Items' }]
    })
    .then(list => {
      if(list)
        res.json(list);
      res.send({
        info: 'List not available'
      })
    })
    .catch(err => {
      res.status(500).send({err});
    });
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
  if (!parseInt(req.params.id, 10)) {
    res.send({
      err: 'List not available'
    })
  }

  List.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(() => {
    res.status(202).send({
      info: 'List successfully destroyed'
    })
  })
  .catch(err => {
    res.status(500).send({err: err.toString()});
  });
}
const updateList = (req, res) => {
  if (!parseInt(req.params.id, 10)) {
    res.send({
      err: 'List not available'
    })
  }

  List.find({
    id: req.params.id,
    include: [{ model: Task, as: 'Items' }]
  })
    .then((list) => {
      if (list) {
        list.update({
            title: req.params.title
          })
          .then((list) => {
            res.status(200).send(list)
          })
      }
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