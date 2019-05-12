import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { AppRouting } from './app.routing';

import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { LastpositionComponent } from './component/lastposition/lastposition.component';
import { HistoricalComponent } from './component/historical/historical.component';
import { VirtualzoneComponent } from './component/virtualzone/virtualzone.component';
import { AuthenticationService } from "./service/authentication.service";
import {NgbModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { TokenInterceptor } from "./interceptor/tokeninterceptor";



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
    AppRouting,
    NgbModule
  ],
  providers: [AuthenticationService,
              {
               provide: HTTP_INTERCEPTORS,
               useClass: TokenInterceptor,
               multi: true
              },
              ],
  bootstrap: [AppComponent]
})
export class AppModule { }
