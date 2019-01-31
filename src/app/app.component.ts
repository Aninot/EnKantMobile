import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent{

  public appPages = [
    {
      title: 'Accueil',
      url: '/accueil',
      icon: 'home',
      care : false,
    },
    {
      title: 'Votre Espace',
      url: '/informations',
      icon: 'person',
      care : true,
    },
    {
      title: 'Nos Menus',
      url: '/menu',
      icon: 'list',
      care : false,
    },
    {
      title: 'Vos commandes',
      url: '/historique',
      icon: 'book',
      care : true,
    },

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
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
