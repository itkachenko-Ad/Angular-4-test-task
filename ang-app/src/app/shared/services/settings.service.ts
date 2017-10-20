import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class SettingsService {

  constructor(private http: Http) { }

  getData() {
    return this.http.get('/assets/data/settings.json');
  }
}
