import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ServiciosAcademicosPage } from './servicios-academicos.page';

const routes: Routes = [
  {
    path: '',
    component: ServiciosAcademicosPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ServiciosAcademicosPage]
})
export class ServiciosAcademicosPageModule {}
