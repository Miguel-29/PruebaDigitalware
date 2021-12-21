import { Injectable } from '@angular/core';
import endpoints from '../Base de datos/bd';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {

  constructor(
    private endpointsAuth: endpoints
  ) { }

  addFlights = (data: any) => {
    this.endpointsAuth.addFlights(data);
  }
  updateFlights = (data: any) => {
    this.endpointsAuth.updateFlights(data)
  }
  removeFlights = (data: any) => {
    this.endpointsAuth.removeFlights(data)
  }
  getFlights = () => {
    return this.endpointsAuth.getFlights()
  }
}
