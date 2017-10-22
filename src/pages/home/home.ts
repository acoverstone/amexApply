import { Component } from '@angular/core';
import { NavController, PopoverController, NavParams, ViewController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  template: `
  <ion-content style="margin-top:10px !important;">
    <ion-list no-lines radio-group [(ngModel)]="appType" class="popover-page">
      <ion-item>
        <ion-label>Credit Card</ion-label>
        <ion-radio value="Credit Card"></ion-radio>
      </ion-item>
      <ion-item>
        <ion-label>Student Loan</ion-label>
        <ion-radio value="Student Loan"></ion-radio>
      </ion-item>
      <ion-item>
        <ion-label>House Loan</ion-label>
        <ion-radio value="House Loan"></ion-radio>
      </ion-item>
      <ion-item>
        <ion-label>Car Loan</ion-label>
        <ion-radio value="Car Loan"></ion-radio>
      </ion-item>
    </ion-list>
    <div padding>
    	<button ion-button block id="submitButton" (click)="closePopover()" style="margin-top:-20px !important;">Confirm</button>
  	</div>
  </ion-content>
  `
})
export class PopoverPage {
	appType;

  constructor(public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ngOnInit() {
    this.appType = this.navParams.get('appType');
  }

  closePopover() {
  	this.viewCtrl.dismiss(this.appType);
  }

}



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	appType;
	idScanned;
	faceVerified;

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController, public camera: Camera) {
  	this.idScanned = false;
		this.faceVerified = false;
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage, {
    	appType: this.appType
    });
    popover.onDidDismiss(data => {
   		this.appType = data;
   	});
    popover.present({
      ev: myEvent
    });
  }

  submitApp() {
  	console.log(this.appType);
  }

  takePic() {
  	const options: CameraOptions = {
	  quality: 100,
		  destinationType: this.camera.DestinationType.DATA_URL,
		  encodingType: this.camera.EncodingType.JPEG,
		  mediaType: this.camera.MediaType.PICTURE
		} 

		this.camera.getPicture(options).then((imageData) => {
		 let base64Image = 'data:image/jpeg;base64,' + imageData;
		}, (err) => {
				
		});
  }

  scanID() {
  	this.idScanned = true;
  }
  
  scanFace() {
  	this.faceVerified = true;
  }
}
