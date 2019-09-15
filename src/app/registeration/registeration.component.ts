import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { User } from '../user';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.css']
})
export class RegisterationComponent implements OnInit {

  constructor(private service: AppService) { }
  ngOnInit() {
  }

  onRegister(firstNameInp: string, lastNameInp: string, mobileInp: string, emailInp: string, ageInp:number, passInp:string){
    this.service.register(firstNameInp, lastNameInp, mobileInp, emailInp, ageInp, passInp);
  }

}
