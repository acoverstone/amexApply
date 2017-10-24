import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

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
  university: string
  loanAmount: string

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
    this.university = '';
    this.loanAmount = '';
  }

  ionViewDidLoad() {
     let alert = this.alertCtrl.create({
        title: 'User Not Found',
        message: 'Hi Jared! Your profile was not recognized by our system, please enter your additional information and submit to apply for a loan.',
        buttons: [{
          'text': 'OK'
          }]
      });
      alert.present();
  }

  submitApp() {
    if(this.firstName != '' && this.lastName != '' && this.dob != '' && this.ssn != '' && this.addressLine != '' && this.city != '' && this.state != '' && this.zip != '' && this.phone != '' && this.email != '' && this.loanAmount != '' && this.university != '') {
      this.navCtrl.push('PendingPage', {
        appType: 'studentLoan',
        firstName: this.firstName,
        email: this.email,
        loanAmount: this.loanAmount,
        university: this.university
      });
    } else {
      let alert = this.alertCtrl.create({
        title: 'Error',
        message: 'Please make sure all required fields are filled out before submitting this form.',
        buttons: [{
          'text': 'OK'
          }]
      });
      alert.present();
    }
  }

}
