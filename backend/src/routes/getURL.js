import express from 'express';
import { getUrl } from '../controllers/getUrlController.js';


const router = express.Router();

router.get("/:id", getUrl);

export default router;