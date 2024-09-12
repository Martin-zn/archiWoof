import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonicModule, Animation,AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  username: string = '';
  password: string = '';

  private animation3?:Animation;

  constructor(private aCntrl:AnimationController, private router: Router) {}

  ngAfterViewInit(){

    const buttonElement3 = document.querySelector('.animacion3') as HTMLElement;

    if (buttonElement3) {
      this.animation3 = this.aCntrl.create()
  .addElement(buttonElement3)
  .duration(1000) // Duración total de la animación
  .easing('ease-in-out') // Efecto de suavizado para la caída y el rebote
  .keyframes([
    { offset: 0, transform: 'translateY(0)', opacity: '1' }, // Posición inicial
    { offset: 0.6, transform: 'translateY(100vh)', opacity: '1' }, // Caída hasta el borde inferior
    { offset: 0.8, transform: 'translateY(-30px)', opacity: '1' }, // Rebote hacia arriba
    { offset: 1, transform: 'translateY(0)', opacity: '1' } // Vuelve a la posición original
  ])
  .onFinish(() => {
    this.router.navigate(['/inicio']); // Navegamos a /inicio después de la animación
  });
    }
    
  }

  onLogin(){
    if(this.username.length > 2 && this.password.length > 2){
      console.log(`User: ${this.username} Loged successfully`);
      if(this.animation3){
        this.animation3.play();
      }
    }else{
      console.log('ingresa usuario y contraseña');
    }
  }

}
