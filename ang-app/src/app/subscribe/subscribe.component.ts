import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.scss']
})
export class SubscribeComponent {
  @ViewChild('f') signUpForm: NgForm;
  agreeChecked = false;
  showMgs = false;
  subInfo = {
    username: '',
    country: '',
    category: ''
  };

  onSubmit() {
    if (this.agreeChecked) {
      this.subInfo.username = this.signUpForm.value.username;
      this.subInfo.country = this.signUpForm.value.country;
      this.subInfo.category = this.signUpForm.value.category;

      this.showMgs = false;

      console.log(this.subInfo);
    } else {
      this.showMgs = true;
    }
  }

  onCheck() {
    this.agreeChecked = !this.agreeChecked;
  }
}
