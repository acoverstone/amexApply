import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-credit-card',
  templateUrl: 'credit-card.html',
})
export class CreditCardPage {

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
  	console.log(applicant);
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
    console.log('ionViewDidLoad CreditCardPage');
  }

}
