import express from 'express';
import * as listCtrl from '../controllers/lists';

const router = express.Router();

router.route('/lists')
  .get(listCtrl.getLists)
  .post(listCtrl.createList);

router.route('/lists/:id')
  .get(listCtrl.getList)
  .put(listCtrl.updateList)
  .delete(listCtrl.deleteList);

export default router;