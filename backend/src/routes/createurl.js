import express from 'express';
import {createShortUrl} from '../controllers/createUrlController.js';

const router = express.Router();

router.post("/", createShortUrl);

export default router;