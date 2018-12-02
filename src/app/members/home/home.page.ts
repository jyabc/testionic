import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import { AuthenticationService } from './../../services/authentication.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(public translate: TranslateService, private authService: AuthenticationService){
  }

  logout() {
    this.authService.logout();
  }
}
