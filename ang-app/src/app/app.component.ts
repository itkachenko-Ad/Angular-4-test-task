import { Component, OnInit } from '@angular/core';
import { Response} from '@angular/http';
import { GetDataService } from './shared/services/get-data.service';
import { SettingsModel } from './shared/services/settings.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private settingsUrl = '/assets/data/settings.json';

  settings: SettingsModel;

  constructor(private getDataSrv: GetDataService) { }

  ngOnInit() {
    this.getDataSrv.getData(this.settingsUrl).subscribe(
      (data: Response) => {
        this.settings = data.json();
        this.getDataSrv.pageSettings.next(this.settings);
      },
      (error) => { console.log(error); }
    );
  }
}
