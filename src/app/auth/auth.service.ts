import { Injectable } from '@angular/core';
import { AppService } from '../app.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private service: AppService) { }

  isLoggedIn = this.service.isLoggedIn;

}
