import { Router } from "express";
import {registerUser} from '../Controllers/user.controllers.js'

const router = Router();

router.route('/api/signup').post(registerUser);

export default router;