import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CarLoanPage } from './car-loan';

@NgModule({
  declarations: [
    CarLoanPage,
  ],
  imports: [
    IonicPageModule.forChild(CarLoanPage),
  ],
})
export class CarLoanPageModule {}
