import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then(m => m.ListPageModule)
  },
  { path: 'start', loadChildren: './components/students/start/start.module#StartPageModule' },
  { path: 'inicio', loadChildren: './components/teachers/inicio/inicio.module#InicioPageModule' },
  { path: 'home-teacher', loadChildren: './components/teachers/home-teacher/home-teacher.module#HomeTeacherPageModule' },
  { path: 'home-student', loadChildren: './components/students/home-student/home-student.module#HomeStudentPageModule'},
  { path: 'a', loadChildren: './components/students/home-student/prueba/prueba.module#PruebaPageModule' },
  { path: 'tutoriales', loadChildren: './components/students/home-student/tutoriales/tutoriales.module#TutorialesPageModule' },  { path: 'cursos', loadChildren: './components/students/home-student/cursos/cursos.module#CursosPageModule' },






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
