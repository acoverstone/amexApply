import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';



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

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
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
    this.cardType = '';
  }

  ionViewDidLoad() {
   	let alert = this.alertCtrl.create({
        title: 'Existing User',
        message: 'Your profile was recognized by our system, please double check your information and submit to apply for a card.',
        buttons: [{
          'text': 'OK'
          }]
      });
      alert.present();
  }

  submitApp() {
    if(this.firstName != '' && this.lastName != '' && this.dob != '' && this.ssn != '' && this.addressLine != '' && this.city != '' && this.state != '' && this.zip != '' && this.phone != '' && this.email != '' && this.firstName != '' && this.cardType != '') {
      console.log('submitted');
    }
  }

}
