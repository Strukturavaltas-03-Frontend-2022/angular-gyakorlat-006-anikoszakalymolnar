import { Injectable } from '@angular/core';
import { Event } from '../model/event';
import { Location } from '../model/location';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor() { }

  getAll(): Event[] {
    return [
      {
        name: 'meeting',
        date: '2022.11.04.',
        time: '18:30',
        location: {
          address: 'Hal Street 35.',
          city: 'Bp',
          country: 'Hungary',
        }
      },
      {
        name: 'exam',
        date: '2022.11.09.',
        time: '15:00',
        location: {
          address: 'Home Street 1.',
          city: 'Bp',
          country: 'Hungary',
        }
      },
      {
        name: 'dating',
        date: '2022.11.22.',
        time: '19:00',
        location: {
          address: 'Hauszmann Alajos Street 6.',
          city: 'Bp',
          country: 'Hungary',
        }
      }
    ];
  }
}
