import { Router } from 'express';

import ForgotPasswordController from  '@modules/users/infra/http/controllers/ForgotPasswordController';
import ResetPassWordController from  '@modules/users/infra/http/controllers/ResetPasswordController';

const passwordRouter = Router();
const forgotPasswordController = new ForgotPasswordController();
const resetPassWordController = new ResetPassWordController();

passwordRouter.post('/forgot', forgotPasswordController.create);
passwordRouter.post('/reset', resetPassWordController.create);

export default passwordRouter;
