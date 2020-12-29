import 'reflect-metadata';

import AppError from '@shared/errors/AppError';

import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppoitmentService from './CreateAppointmentService';

//vamos categorizar os testes
describe('CreateAppoitment', () => {
  //test to create new appointment
  it('Shold be able to create a new appointment', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppoimentRepository = new CreateAppoitmentService(
      fakeAppointmentsRepository,
    );

    const appointment = await createAppoimentRepository.execute({
      date: new Date(),
      provider_id: '123456789',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('123456789');
  });
  // test not create new tow appointment same time
  it('Shold not be able to create two appoitments on the same time', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppoimentRepository = new CreateAppoitmentService(
      fakeAppointmentsRepository,
    );

    const dateAppointment = new Date(2020, 12, 10, 11);

    await createAppoimentRepository.execute({
      date: dateAppointment,
      provider_id: '123456789',
    });

    expect(createAppoimentRepository.execute({
      date: dateAppointment,
      provider_id: '123456789',
    })).rejects.toBeInstanceOf(AppError)
  });
});
