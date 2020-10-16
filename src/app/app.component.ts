import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LocaleService } from './shared/locale.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private translateService: TranslateService, private localeService: LocaleService) {
    this.translateService.use(this.localeService.getLang());
  }

  setLanguage(lang: string): void {
    this.translateService.use(lang);
    this.localeService.setLang(lang);
  }

}
