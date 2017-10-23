import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class GetDataService {
  pageSettings = new Subject<any>();

  constructor(private http: Http) { }

  getData(url: string) {
    return this.http.get(url);
  }
}
