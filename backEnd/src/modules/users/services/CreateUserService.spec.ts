import 'reflect-metadata';

import AppError from '@shared/errors/AppError';

import FakeHashProvider from '@modules/users/providers/HashProvider/fakes/FakeHashProvider';
import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import CreateUserService from './CreateUserService';

//vamos categorizar os testes
describe('CreateUser', () => {
  //test to create new user
  it('Shold be able to create a new user', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();
    const createUserRepository = new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider
    );

    const user = await createUserRepository.execute({
      name: 'Claudeilton Dantas',
      email: 'fcd007@hotmail.com',
      password: '12456789'
    });

    expect(user).toHaveProperty('id');
  });

  //test to e-mail user
  it('Shold not be able to create a new user with same e-mail another', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeHashProvider = new FakeHashProvider();

    const createUser= new CreateUserService(
      fakeUsersRepository,
      fakeHashProvider
    );

    await createUser.execute({
      name: 'Claudeilton Dantas',
      email: 'fcd007@hotmail.com',
      password: '12456789'
    });

    await expect(
        createUser.execute({
        name: 'Claudeilton Dantas',
        email: 'fcd007@hotmail.com',
        password: '12456789'
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
