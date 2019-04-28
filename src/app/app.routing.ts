import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';
import { LastpositionComponent } from './lastposition/lastposition.component';
import { HistoricalComponent } from './historical/historical.component';
import { VirtualzoneComponent } from './virtualzone/virtualzone.component';

const routes: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'lastposition', component: LastpositionComponent },
  { path: 'historical', component: HistoricalComponent },
  { path: 'virtualzone', component: VirtualzoneComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRouting { }
