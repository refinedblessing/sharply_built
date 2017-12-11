import express from 'express';
import * as listCtrl from '../controllers/lists';
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

export default router;