import 'reflect-metadata';

import AppError from '@shared/errors/AppError';

import FakeProviderAvatar from '@shared/container/providers/StorageProvider/fakes/FakeProviderAvatar';
import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import UpdateUserAvatarService from './UpdateUserAvatarService';

//vamos categorizar os testes
describe('UpdateUserAvatar', () => {
  //test to create new user - update avatar
  it('Shold be able to update user avatar', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeProviderAvatar = new FakeProviderAvatar();

    const updateUserAvatar = new UpdateUserAvatarService(
      fakeUsersRepository,
      fakeProviderAvatar
    );

    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: '123456789',
    });

    await updateUserAvatar.execute({
      user_id: user.id,
      avatarFileName: 'avatar.jpg',
    });

    expect(user.avatar).toBe('avatar.jpg');
  });

  //test to create new user
  it('Shold not be able to update avatar from non existing user', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeProviderAvatar = new FakeProviderAvatar();

    const updateUserAvatar = new UpdateUserAvatarService(
      fakeUsersRepository,
      fakeProviderAvatar
    );

  await expect(
      updateUserAvatar.execute({
        user_id: 'non-existing-user',
        avatarFileName: 'avatar.jpg',
      })).rejects.toBeInstanceOf(AppError);
  });

  //test to create new user - update avatar
  it('Shold delete old avatar when updating new one', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const fakeProviderAvatar = new FakeProviderAvatar();

    //retorna se a função foi chamada
    const deleteFile = jest.spyOn(fakeProviderAvatar, 'deleteFile');

    const updateUserAvatar = new UpdateUserAvatarService(
      fakeUsersRepository,
      fakeProviderAvatar
    );

    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@email.com',
      password: '123456789',
    });

    await updateUserAvatar.execute({
      user_id: user.id,
      avatarFileName: 'avatar.jpg',
    });
    //spy - jest function observer
    await updateUserAvatar.execute({
      user_id: user.id,
      avatarFileName: 'avatar2.jpg',
    });

    expect(deleteFile).toHaveBeenCalledWith('avatar.jpg');

    expect(user.avatar).toBe('avatar2.jpg');
  });
});
