import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PhotographerComponent } from './photographers-list/photographer/photographer.component';
import { SubscribeComponent } from './subscribe/subscribe.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'subscribe', component: SubscribeComponent },
  { path: 'photographers/:id', component: PhotographerComponent },
  { path: '**', redirectTo: '/' }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
