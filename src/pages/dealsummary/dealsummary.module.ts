import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DealsummaryPage } from './dealsummary';

@NgModule({
  declarations: [
    DealsummaryPage,
  ],
  imports: [
    IonicPageModule.forChild(DealsummaryPage),
  ],
})
export class DealsummaryPageModule {}
