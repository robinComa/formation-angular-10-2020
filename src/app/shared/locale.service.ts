import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

enum Locale {
  fr = 'fr-FR',
  en = 'en-US'
}

const LOCAL_STORAGE_KEY = 'LOCALE_ID';

@Injectable()
export class LocaleService {

  constructor(translateService: TranslateService) {}

  getLocale(): string {
    return localStorage.getItem(LOCAL_STORAGE_KEY) || Locale.fr;
  }

  setLang(lang: string): void {
    localStorage.setItem(LOCAL_STORAGE_KEY, Locale[lang]);
    location.reload();
  }

  getLang(): string {
    return this.getLocale().split('-')[0];
  }
}
