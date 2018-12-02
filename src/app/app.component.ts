import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/members/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/members//list',
      icon: 'list'
    },
    {
      title: 'Settings',
      url: '/members//settings',
      icon: 'home'
    },
  ];

  public authenticated = false;

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public translate: TranslateService,
    private authenticationService: AuthenticationService,
    private router: Router
  ) {
    translate.setDefaultLang('zh-cn');
    this.initializeApp();    
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.authenticationService.authenticationState.subscribe(state => {
      if (state) {
        this.router.navigate(['members', 'home']);
        this.authenticated = true;
      } else {
        this.router.navigate(['login']);
        this.authenticated = false;
      }
    });
  }
}
