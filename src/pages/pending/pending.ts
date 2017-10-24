import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PendingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pending',
  templateUrl: 'pending.html',
})
export class PendingPage {
	appType;
	email;
	firstName;
	loanAmount;
	university;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.appType = this.navParams.get('appType');
  	this.email = this.navParams.get('email');
  	this.firstName = this.navParams.get('firstName');
  	this.loanAmount = '';
		this.university = '';
		if(this.appType == "studentLoan") {
			this.loanAmount = this.navParams.get('loanAmount');
			this.university = this.navParams.get('university');
		}
  }



}
