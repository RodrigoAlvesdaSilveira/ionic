import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { ListaPage } from '../lista/lista.page';
import { SelectPage } from '../select/select.page';
import { ImagePage } from '../image/image.page';
import { ModalPage } from '../modal/modal.page';
import { IndexPage } from '../index/index.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
        children: [
          {
            path: '',
            redirectTo: 'index',
            pathMatch: 'full' },
          {
            path: 'index',
            component: IndexPage,
          },
          {
            path: 'lista',
            component: ListaPage,
          },
          {
            path: 'select',
            component: SelectPage,
          },
          {
            path: 'image',
            component: ImagePage,
          },
          {
            path: 'modal',
            component: ModalPage,
          },
        ],
      },
    ])
  ],
  declarations: [HomePage, ListaPage, SelectPage, ImagePage, ModalPage, IndexPage]
})
export class HomePageModule {}
