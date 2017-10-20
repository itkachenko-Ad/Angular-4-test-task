import { Component, Input, OnInit } from '@angular/core';
import { SettingsModel } from '../shared/services/settings.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() settings: SettingsModel;

  constructor() { }

  ngOnInit() {

  }

}
