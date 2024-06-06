import express from 'express'
import formidable from "express-formidable";

import { workerRegistrationContoller ,getAllWorkers} from '../controllers/workerController.js';
const router =express.Router();


router.post("/workerRegistration",formidable(),workerRegistrationContoller);
router.get("/allWorker",getAllWorkers);


export default router;