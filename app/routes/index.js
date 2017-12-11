import express from 'express';
import * as listCtrl from '../controllers/lists';
import * as taskCtrl from '../controllers/tasks';
import validateList from '../middlewares/validatelist';

const router = express.Router();
console.log(validateList);

router.route('/lists')
  .get(listCtrl.getLists)
  .post(listCtrl.createList);

router.route('/lists/:list_id')
  .get(validateList, listCtrl.getList)
  .put(validateList, listCtrl.updateList)
  .delete(validateList, listCtrl.deleteList);

router.route('/lists/:list_id/tasks')
  .get(validateList, taskCtrl.getTasks)
  .post(validateList, taskCtrl.createTask);

router.route('/lists/:list_id/tasks/:task_id')
  .get(validateList, taskCtrl.getTask)
  .put(validateList, taskCtrl.updateTask)
  .delete(validateList, taskCtrl.deleteTask);

export default router;