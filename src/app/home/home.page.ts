import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private menu: MenuController, private router: Router) {}

  openMenu(){
    this.menu.enable(true, 'menu');
    this.menu.open('menu');
  }
  sair(){
    this.router.navigate(['/login']);
  }
  goHome(){
    this.router.navigate(['home']);
  }
  goLista(){
    this.router.navigate(['home', 'lista']);
  }
  goSelect(){
    this.router.navigate(['home', 'select']);
  }
  goImage(){
    this.router.navigate(['home', 'image']);
  }
  goModal(){
    this.router.navigate(['home', 'modal']);
  }
}
