import express from 'express';
import * as listCtrl from '../controllers/lists';
console.log(listCtrl);

const router = express.Router();

router.route('/lists')
  .get(listCtrl.getLists);

export default router;