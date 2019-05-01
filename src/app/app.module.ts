import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LastpositionComponent } from './lastposition/lastposition.component';
import { HistoricalComponent } from './historical/historical.component';
import { VirtualzoneComponent } from './virtualzone/virtualzone.component';
import {AuthenticationService} from "./service/authentication.service";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    WelcomeComponent,
    LastpositionComponent,
    HistoricalComponent,
    VirtualzoneComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRouting
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
