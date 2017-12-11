const List = require('../models/index').List;
const Task = require('../models/index').Task;

const validateList = (req, res, next) => {
  const ListId = parseInt(req.params.list_id, 10);

  return List.find({
      where: {
        id: ListId
      },
      include: [{ model: Task, as: 'Items' }]
    })
    .then(list => {
      if(!list) {
        return res.status(404).send({
          info: 'List not available'
        })
      }
      req.list = list;
      next();
    })
    .catch(err => {
      res.status(500).send({err});
    });
}

export default validateList;