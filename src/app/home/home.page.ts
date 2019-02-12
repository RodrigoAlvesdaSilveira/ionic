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
    this.router.navigate(['login']);
    this.menu.close('menu');
  }
  goHome(){
    this.router.navigate(['home']);
    this.menu.close('menu');
  }
  goLista(){
    this.router.navigate(['home', 'lista']);
    this.menu.close('menu');
  }
  goSelect(){
    this.router.navigate(['home', 'select']);
    this.menu.close('menu');
  }
  goImage(){
    this.router.navigate(['home', 'image']);
    this.menu.close('menu');
  }
  goModal(){
    this.router.navigate(['home', 'modal']);
    this.menu.close('menu');
  }
}
