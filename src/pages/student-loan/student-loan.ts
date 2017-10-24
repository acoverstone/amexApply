import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StudentLoanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-student-loan',
  templateUrl: 'student-loan.html',
})
export class StudentLoanPage {

	firstName: string
  lastName: string
  dob: string
  ssn: string
  addressLine: string
  city: string
  state: string
  zip: string
  phone: string
  email: string
  reference: string

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	let applicant = this.navParams.get('applicant');
		this.firstName = applicant.firstName;
    this.lastName = applicant.lastName;
    this.dob = (new Date(applicant.dob)).toISOString();
    this.ssn = applicant.ssn;
    this.addressLine = applicant.addressLine;
    this.city = applicant.city;
    this.state = applicant.state;
    this.zip = applicant.zip;
    this.phone = applicant.phone;
    this.email = applicant.email;
    this.reference = applicant.reference;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentLoanPage');
  }

}
