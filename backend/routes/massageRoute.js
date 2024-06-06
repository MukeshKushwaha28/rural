import express from 'express'

import { massageController,getAll,updateController } from '../controllers/massgeController.js';

const router = express.Router();

router.post('/createMassage',massageController);
router.get('/allMassage',getAll );
router.post('/update',updateController );

export default router;