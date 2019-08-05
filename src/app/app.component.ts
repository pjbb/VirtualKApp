import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
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

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}