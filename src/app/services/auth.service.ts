import { Injectable } from '@angular/core';
import endpoints from '../Base de datos/bd';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private endpointsAuth: endpoints
  ) { }

  addUser = (data: any) => {
    this.endpointsAuth.addUser(data);
  }
  updateUser = (data: any) => {
    this.endpointsAuth.updateUser(data)
  }
  removeUser = (data: any) => {
    this.endpointsAuth.removeUser(data)
  }
  getUser = () => {
    return this.endpointsAuth.getUser()
  }
  validateUser = (data: any) => {
    return this.endpointsAuth.validateUser(data)
  }

}
