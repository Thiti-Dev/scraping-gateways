import express from 'express';
import { getRouteInformation } from '../controllers/npm';
const router = express.Router();


router.route('/').get(getRouteInformation)

export default router