import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  username: string = '';
  password: string = '';

  constructor(private router: Router) {}
  onLogin(){
    if(this.username.length > 2 && this.password.length > 2){
      console.log(`User: ${this.username} Loged successfully`);
      this.router.navigate(['/inicio']);
    }else{
      console.log('ingresa usuario y contraseña');
    }
  }

}
