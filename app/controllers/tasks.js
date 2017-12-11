const Task = require('../models/index').Task;

const getTasks = (req, res) => {
  Task.all({
    where: {
      ListId: req.list.id
    }
  })
    .then((tasks) => {
      res.json(tasks);
    })
    .catch(err => {
      res.status(500).send({err: err.toString()});
    });
}

const getTask = (req, res) => {
  Task.find({
    where: {
      id: req.params.task_id,
      ListId: req.list.id
    }
  })
  .then(task => {
    if(!task) {
      return res.status(404).send({
        info: 'Task not available'
      })
    }
    res.json(task);
  })
  .catch(err => {
    res.status(500).send({err});
  })
}

const createTask = (req, res) => {
  Task.create({
    name: req.body.name,
    ListId: req.list.id
  })
  .then(task => {
    res.json(task);
  })
  .catch(err => {
    res.status(500).send({err});
  });
}

const deleteTask = (req, res) => {
  Task.destroy({
    where: {
      id: req.params.task_id,
      ListId: req.list.id
    }
  })
  .then(() => {
    res.status(200).send({
      info: 'Task successfully destroyed'
    })
  })
  .catch(err => {
    res.status(500).send({err: err.toString()});
  });
}

const updateTask = (req, res) => {
  Task.find({
    where: {
      id: req.params.task_id,
      ListId: req.list.id
    }
  })
  .then(task => {
    task.update({
      complete: req.body.complete || task.complete,
      name: req.body.name || task.name
    })
    .then((task) => {
      res.status(200).send(task)
    })
    .catch(err => {
      res.status(500).send({err: err.toString()});
    });
  })
  .catch(err => {
    res.status(500).send({err});
  })
}

export {
  getTasks,
  getTask,
  createTask,
  deleteTask,
  updateTask
};