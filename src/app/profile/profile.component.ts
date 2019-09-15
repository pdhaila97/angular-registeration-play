import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private service: AppService, private router: Router) { }

  ngOnInit() {
  }

  logout(){
    this.service.isLoggedIn = false;
    this.router.navigate(['']);
  }

}
