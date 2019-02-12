import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalTestPage } from '../modal-test/modal-test.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(public modalController: ModalController) {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalTestPage,
      componentProps: { value: 123 }
    });
    return await modal.present();
  }

  ngOnInit() {
  }

}
