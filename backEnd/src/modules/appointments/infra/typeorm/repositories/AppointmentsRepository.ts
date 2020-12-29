import { getRepository, Repository } from 'typeorm';

import Appointment from '../entities/Appointment';

//fazendo a importação da interface appointamentsRepositoty
import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository'

import ICreateAppointmentTDO from '@modules/appointments/dtos/ICreateAppointmentDTO'

class AppointmentsRepository implements IAppointmentsRepository {
  //criando uma variável para Repository
  private ormRepository: Repository<Appointment>;
  constructor() {
    this.ormRepository = getRepository(Appointment)
  }
  public async findByDate(date: Date): Promise<Appointment | undefined>{
    const findAppointment = await this.ormRepository.findOne({
      where: { date: date},
    });

    return findAppointment;
  }
  //definindo e implementando o método create com base na interface
  public async create({ provider_id, date }: ICreateAppointmentTDO ): Promise<Appointment>{
    const appointment = this.ormRepository.create({ provider_id, date });
    //realizando a operação de save() do typeorm
    await this.ormRepository.save(appointment);
    //retornando o repositório creado
    return appointment;
  }
}

export default AppointmentsRepository;
