import Appointment from '../infra/typeorm/entities/Appointment';

import ICreateAppointmentTDO from '@modules/appointments/dtos/ICreateAppointmentDTO'

export default interface IAppointamentsRepository {
  //definindo os formato do método create com base na interface
  create(data: ICreateAppointmentTDO): Promise<Appointment>;
  findByDate(date: Date): Promise<Appointment | undefined>;
}
