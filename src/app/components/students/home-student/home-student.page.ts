import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home-student',
  templateUrl: './home-student.page.html',
  styleUrls: ['./home-student.page.scss'],
})
export class HomeStudentPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }

  public appPages = [
    {
      title: 'Inicio',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'General',
      url: '/list',
      icon: 'book'
    },
    {
      title: 'Presentaciones',
      icon: 'desktop'
    },
    {
      title: 'Herramientas',
      icon: 'construct'
    },
    {
      title: 'Entregas',
      icon: 'folder'
    },
    {
      title: 'Talleres',
      icon: 'create'
    },
    {
      title: 'OVAs',
      icon: 'videocam'
    }
  ];

  openFirst() {
    this.menu.enable(true, 'one');
    this.menu.open('one');
  }

  openEnd() {
    this.menu.open('end');
  }

  openCustom() {
    this.menu.enable(true, 'custom');
    this.menu.open('custom');
  }

}
