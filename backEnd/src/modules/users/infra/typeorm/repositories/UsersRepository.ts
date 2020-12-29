import { getRepository, Repository } from 'typeorm';

import User from '../entities/User';

//fazendo a importação da interface IUserRepository
import IUsersRepository from '@modules/users/repositories/IUsersRepository'
import ICreateUsersTDO from '@modules/users/dtos/ICreateUserDTO'

class UsersRepository implements IUsersRepository {
  //criando uma variável para Repository User
  private ormRepository: Repository<User>;
  constructor() {
    this.ormRepository = getRepository(User)
  }

  //implementando o método para busca de usuários por ID
  public async findById(id: string): Promise<User | undefined> {
    //por receber uma string o findOne() já busca diretamente o id
    const user = await this.ormRepository.findOne(id);
    return user;
  }

  //implementando o método para busca de usuário por email
  public async findByEmail(email: string): Promise<User | undefined> {
     const user = await this.ormRepository.findOne({
       where: { email },
     });
     return user;
  }

  //definindo e implementando o método create com base na interface
  public async create(userData: ICreateUsersTDO): Promise<User> {
    const user = this.ormRepository.create(userData);
    //realizando a operação de save() do typeorm
    await this.ormRepository.save(user);
    //retornando o usuário criado
    return user;
  }

  //implementando o método para atualizar nosso usuário
  public async save(user: User): Promise<User> {
    return this.ormRepository.save(user);
  }
}

export default UsersRepository;
