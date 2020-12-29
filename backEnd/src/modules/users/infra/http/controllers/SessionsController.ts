import { Request, Response} from 'express';

import { container } from 'tsyringe';

import AuthenticateUserService from '@modules/users/services/AutheticateUserService';

export default class SessionController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const autenticateUser = container.resolve(AuthenticateUserService);
    const { user, token } = await autenticateUser.execute({
      email,
      password
    });

    return response.json({ user, token });
  }
}
