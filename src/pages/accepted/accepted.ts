import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AcceptedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accepted',
  templateUrl: 'accepted.html',
})
export class AcceptedPage {
	appType;
	email;
	firstName;
	cardType;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  	this.appType = this.navParams.get('appType');
  	this.email = this.navParams.get('email');
  	this.firstName = this.navParams.get('firstName');
  	this.cardType = "";
  	if(this.appType == "creditCard") {
			this.cardType = this.navParams.get('cardType');
  	}
  }
    

}
