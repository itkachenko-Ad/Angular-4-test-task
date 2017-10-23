import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { GetDataService } from '../shared/services/get-data.service';
import { SettingsModel } from '../shared/services/settings.model';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit, OnDestroy {
  settings: SettingsModel;
  private subscription: Subscription;

  constructor(private getDataSrv: GetDataService) { }

  ngOnInit() {
    this.subscription = this.getDataSrv.pageSettings.subscribe(
      (data: SettingsModel) => {
        this.settings = data;
      },
      (error) => { console.log(error); }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
