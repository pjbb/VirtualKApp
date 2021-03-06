import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { HomeStudentPage } from './home-student.page';
import { PruebaPage } from './prueba/prueba.page';

const routes: Routes = [
  {
    path: '',
    component: HomeStudentPage,
    children: [
        {
      path: '',
      component: PruebaPage
    }
    ]
  }
  
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeStudentPage, PruebaPage]
})
export class HomeStudentPageModule {}
