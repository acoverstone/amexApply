import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HouseLoanPage } from './house-loan';

@NgModule({
  declarations: [
    HouseLoanPage,
  ],
  imports: [
    IonicPageModule.forChild(HouseLoanPage),
  ],
})
export class HouseLoanPageModule {}
