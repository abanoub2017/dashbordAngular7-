import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent   {
  lang: string;
  direction: string;
  class: string;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('ar');
    document.getElementsByTagName("html")[0].setAttribute('lang', 'ar');
    document.getElementsByTagName("body")[0].setAttribute('dir', 'rtl');
    document.getElementsByTagName("body")[0].setAttribute('class', 'isAr');
  }

  changeLanguage() {
  if (this.translate.currentLang === 'en') {
    this.translate.use('ar');
    this.lang = 'ar';
    this.direction = 'rtl';
    this.class = 'isAr';
  } else {
    this.translate.use('en');
    this.lang = 'en';
    this.direction = 'ltr';
    this.class = 'isEn';
  }
  document.getElementsByTagName("html")[0].setAttribute('lang', this.lang);
  document.getElementsByTagName("body")[0].setAttribute('dir', this.direction);
  document.getElementsByTagName("body")[0].setAttribute('class', this.class);
  }

}
