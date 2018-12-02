import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-list',
  templateUrl: 'settings.page.html',
  styleUrls: ['settings.page.scss']
})
export class SettingsPage implements OnInit {
  currentLang: string;
  public items: Array<{ title: string; note: string; icon: string }> = [];
  constructor(public translate: TranslateService) {
  }

  ngOnInit() {
  }

  langHandler() {
    this.translate.use(this.currentLang).subscribe(() => {
      console.log("success")
    });
  }

}
