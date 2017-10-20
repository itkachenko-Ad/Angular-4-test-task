import { Component, OnInit } from '@angular/core';
import { SettingsService } from './shared/services/settings.service';
import { SettingsModel } from './shared/services/settings.model';
import { Response} from '@angular/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  settings: SettingsModel;

  constructor(private settingsSrv: SettingsService) { }

  ngOnInit() {
    this.settingsSrv.getData().subscribe(
      (data: Response) => {this.settings = data.json()},
      (error) => { console.log(error); }
    );
  }
}
