import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { IonicModule, Animation,AnimationController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [RouterLink, IonicModule]
})
export class HomePage {

  private animation1?:Animation;
  private animation2?:Animation;

  constructor(private aCntrl:AnimationController, private router: Router) {}

  ngAfterViewInit(){ 

    const buttonElement1 = document.querySelector('.animacion1') as HTMLElement;
    const buttonElement2 = document.querySelector('.animacion2') as HTMLElement;

    if (buttonElement1) {
      this.animation1 = this.aCntrl.create()
        .addElement(buttonElement1)
        .duration(500) 
        .fromTo('transform', 'scale(1)', 'scale(20)') 
        .fromTo('opacity', '1', '0') 
        .fromTo('transform', 'scale(20)', 'scale(1)') 
        .fromTo('opacity', '0', '1') 
        .onFinish(() => {
          this.router.navigate(['/login']);
        });
    }
    if (buttonElement2) {
      this.animation2 = this.aCntrl.create()
        .addElement(buttonElement2)
        .duration(500) 
        .fromTo('transform', 'scale(1)', 'scale(0.1)') 
        .fromTo('opacity', '1', '0') 
        .fromTo('transform', 'scale(0.1)', 'scale(1)') 
        .fromTo('opacity', '0', '1') 
        .onFinish(() => {
          this.router.navigate(['/login']);
        });
    }

  }

  func1(){
    if(this.animation1){
      this.animation1.play();
      
    }else{
      console.log("La animacion no se ejecuto correctamente")
    }
  }

  func2(){
    if(this.animation2){
      this.animation2.play();
      
    }else{
      console.log("La animacion no se ejecuto correctamente")
    }
  }

}
