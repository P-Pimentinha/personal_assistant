import express from 'express';
const router = express.Router();

import { getWords } from '../controllers/wordsControllers.js';

router.route('/').get(getWords);

export default router;
