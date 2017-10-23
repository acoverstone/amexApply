import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentLoanPage } from './student-loan';

@NgModule({
  declarations: [
    StudentLoanPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentLoanPage),
  ],
})
export class StudentLoanPageModule {}
