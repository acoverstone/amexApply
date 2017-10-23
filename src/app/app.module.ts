import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { SocialSharing } from '@ionic-native/social-sharing';

import { MyApp } from './app.component';
import { HomePage, PopoverPage } from '../pages/home/home';
import { CreditCardPage } from '../pages/credit-card/credit-card'
import { HouseLoanPage } from '../pages/house-loan/house-loan'
import { StudentLoanPage } from '../pages/student-loan/student-loan'
import { CarLoanPage } from '../pages/car-loan/car-loan'

var config = {
    apiKey: "AIzaSyD1A99KFinXU4emmchL1fcg_om4l-6wjlU",
    authDomain: "amexapply.firebaseapp.com",
    databaseURL: "https://amexapply.firebaseio.com",
    projectId: "amexapply",
    storageBucket: "",
    messagingSenderId: "430667545945"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CreditCardPage,
    HouseLoanPage,
    StudentLoanPage,
    CarLoanPage,
    PopoverPage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CreditCardPage,
    PopoverPage,
    HouseLoanPage,
    StudentLoanPage,
    CarLoanPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    SpeechRecognition,
    SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
