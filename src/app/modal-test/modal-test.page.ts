import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-test',
  templateUrl: './modal-test.page.html',
  styleUrls: ['./modal-test.page.scss'],
})
export class ModalTestPage implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  close() {
    this.modalCtrl.dismiss();
  }
}
