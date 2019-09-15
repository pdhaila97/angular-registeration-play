import { Injectable } from '@angular/core';
import { User } from './user';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  isLoggedIn = false;
  constructor(private router: Router) { }

  register(firstNameInp: string, lastNameInp: string, mobileInp: string, emailInp: string, ageInp:number, passInp:string){
    let name = firstNameInp + " " + lastNameInp;
    passInp = this.hashCode(passInp);
    let user: User = new User(name, Number(mobileInp), emailInp, ageInp, passInp);
    let key:string;
    let keys = Object.keys(localStorage);
    for(let i of keys){
      if(JSON.parse(localStorage.getItem(i)).email === user.email){
        alert("email already registered");
        return;
      }
    }
    if(localStorage.length === 0){
      key = "0";
    }else{
      key = (Number(keys.sort((a, b) =>{ return Number(a)-Number(b);})[localStorage.length-1]) + 1 ).toString();
    }
    localStorage.setItem(key, JSON.stringify(user));
    this.router.navigate([""]);
    // Currently Under Work
    // setTimeout(()=>{
    //   this.router.navigate(['']);
    // }, 2000);
  }

  login(email: string, password: string){
    let keys = Object.keys(localStorage);
    for(let i of keys){
      let user = JSON.parse(localStorage.getItem(i));
      if(user.email === email && user.password === this.hashCode(password)){
        this.isLoggedIn = true;
        this.router.navigate([`/profile/${i}`]);
      }
    }
    if(!this.isLoggedIn){
      alert('No User Found');
    }
  }

  hashCode(password: string) {
    var hash = 0, i: number, chr: any;
    if (password.length === 0) return hash.toString();
    for (i = 0; i < password.length; i++) {
      chr   = password.charCodeAt(i);
      hash  = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash.toString();
  };

}
