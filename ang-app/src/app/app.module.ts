import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GetDataService } from './shared/services/get-data.service';
import { HttpModule } from '@angular/http';
import { HomeComponent } from './home/home.component';
import { PhotographersListComponent } from './photographers-list/photographers-list.component';
import { AppRoutingModule } from './app-routing.module';
import { PhotographerComponent } from './photographers-list/photographer/photographer.component';
import { PhotoPopupComponent } from './photographers-list/photographer/photo-popup/photo-popup.component';
import { FooterComponent } from './footer/footer.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    PhotographersListComponent,
    PhotographerComponent,
    PhotoPopupComponent,
    FooterComponent,
    SubscribeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [GetDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
