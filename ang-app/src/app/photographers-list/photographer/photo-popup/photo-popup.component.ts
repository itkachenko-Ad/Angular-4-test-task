import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-popup',
  templateUrl: './photo-popup.component.html',
  styleUrls: ['./photo-popup.component.scss']
})
export class PhotoPopupComponent implements OnInit {
  @Input() itemToOpen: object;
  popupOpened = false;

  constructor() { }

  ngOnInit() {
  }

  togglePopup() {
    this.popupOpened = !this.popupOpened;
  }

}
