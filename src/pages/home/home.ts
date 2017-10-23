import { Component } from '@angular/core';
import { NavController, PopoverController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { CreditCardPage } from '../../pages/credit-card/credit-card'
import { HouseLoanPage } from '../../pages/house-loan/house-loan'
import { StudentLoanPage } from '../../pages/student-loan/student-loan'
import { CarLoanPage } from '../../pages/car-loan/car-loan'

// Popup page to select application type
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
  comments;
  numberDocs;

  constructor(public navCtrl: NavController, public popoverCtrl: PopoverController, public camera: Camera, private alertCtrl: AlertController, private speechRecognition: SpeechRecognition, private socialSharing: SocialSharing) {
  	this.idScanned = false;
		this.faceVerified = false;
    this.comments = '';
    this.numberDocs = 0;
  }

  // Present page to select application type
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

  // Submit application to verify your identify and bring you to next page
  submitApp() {
    console.log(this.appType);
    if(this.appType != null && this.idScanned && this.faceVerified) {
      if(this.appType == "Credit Card") {
        this.navCtrl.push(CreditCardPage);
      }
      else if(this.appType == "Student Loan") {
        this.navCtrl.push(StudentLoanPage);
      }
      else if(this.appType == "House Loan") {
        this.navCtrl.push(HouseLoanPage);
      }
      else if(this.appType == "Car Loan") {
        this.navCtrl.push(CarLoanPage);
      }
    }
    else {
      let alert = this.alertCtrl.create({
        title: 'Error',
        message: 'Please check your application to make sure your identitiy is verified and that you have selected your application type.',
        buttons: ['Dismiss']
      });
      alert.present();
    }
  }

  // Take a picture with camera plugin
  takePic() {
  	const options: CameraOptions = {
	  quality: 100,
		  destinationType: this.camera.DestinationType.DATA_URL,
		  encodingType: this.camera.EncodingType.JPEG,
		  mediaType: this.camera.MediaType.PICTURE
		} 

		this.camera.getPicture(options).then((imageData) => {
		 let base64Image = 'data:image/jpeg;base64,' + imageData;
     return true;
		}, (err) => {
				return false;
		});
  }

  // Scan driver's license
  scanID() {
    this.takePic();
    setTimeout(() =>{
      this.idScanned = true;
    }, 1000);
  	
  }

  // Add document to list of docs
  addDocument() {
    this.takePic();
    setTimeout(() =>{
      this.numberDocs += 1;
    }, 1000);
    
  }

  // Remove document from list of docs
  removeDocument() { 
    this.numberDocs -= 1;
  }
  
  // Scan face to verify identity
  scanFace() {
    this.takePic();
    setTimeout(() =>{
  	  this.faceVerified = true;
    }, 1000);
  }

  // Implements social media sharing
  shareToReference() {
    this.socialSharing.share('Hi! I just wanted to reach out to let you know I used you as a reference while applying for an American Express Account! Check out the mobile application at: https://itunes.apple.com/us/app/amex-mobile/id362348516?mt=8', 'AMEX Referral').then(() => {
 
    }).catch(() => {

    });
  }

  // Get speech to text from the microphone for comments
  getSpeech() {

    this.speechRecognition.hasPermission()
      .then((hasPermission: boolean) => {

        if (!hasPermission) {
        this.speechRecognition.requestPermission()
          .then(
            () => console.log('Granted'),
            () => console.log('Denied')
          )
        }

    });

    this.speechRecognition.startListening()
      .subscribe(
        (matches: Array<string>) => {
          this.comments = matches[0];
        },
        (onerror) => console.log('error:', onerror)
      )

    let alert = this.alertCtrl.create({
        title: 'Listening',
        message: 'Please click below when you are done speaking.',
        buttons: [{
          'text': 'Stop Listening',
          'handler': () => {
             this.speechRecognition.stopListening();
          }
          }]
      });
      alert.present();
  }

}
