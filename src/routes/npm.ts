import express from 'express';
import { getPackageStatistic, getRouteInformation } from '../controllers/npm';
const router = express.Router();


router.route('/').get(getRouteInformation)
router.route('/:module_name').get(getPackageStatistic)

export default router