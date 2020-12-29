import { startOfHour } from 'date-fns';
import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';

import Appointment from '../infra/typeorm//entities/Appointment';
import IAppointmentsRepository from '@modules/appointments/repositories/IAppointmentsRepository';

interface IRequest {
  provider_id: string;
  date: Date;
}
/*
* Dependency Inversion (SOLID)
*/

//obrigatório para colocar para injeção de dependencias
@injectable()
class CreateAppointmentService {
  constructor (
    @inject('AppointmentsRepository')
    private appointmentsRepository: IAppointmentsRepository,
    ) {}

  public async execute({ provider_id, date }: IRequest): Promise<Appointment> {

  const appointmentDate =  startOfHour(date);

  const findAppointmentInSameDate = await this.appointmentsRepository.findByDate(
    appointmentDate,
  );

  if(findAppointmentInSameDate) {
    throw new AppError('This appointment os alread booked');
  }

  const appointment = await this.appointmentsRepository.create({
    provider_id,
    date: appointmentDate,
  });
  return appointment;
  }
}

export default CreateAppointmentService;
