import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import {GreetPagePage} from '../pages/greet-page/greet-page';
import {SignupPage} from '../pages/signup/signup';
import {TestPage} from '../pages/test/test';
import {SchedulePage} from '../pages/schedule/schedule';
import {AddRePage} from '../pages/add-re/add-re';
import {FavPage} from '../pages/fav/fav';
import {GreenlinePage} from '../pages/greenline/greenline';
import {RedlinePage} from '../pages/redline/redline';
import {YellowlinePage} from '../pages/yellowline/yellowline';
import {InfoPage} from '../pages/info/info';
import {AddFavPage} from '../pages/add-fav/add-fav';
import {FeedbackPage} from '../pages/feedback/feedback';
import { AngularFireModule } from 'angularfire2';
import { BrowserModule } from '@angular/platform-browser';
import {LoadingPage} from '../pages/loading/loading';
import {ShowrePage} from '../pages/showre/showre';
import {AddTimePage} from '../pages/add-time/add-time';

var config = {
      apiKey: "AIzaSyApv2GEUfmnRHUIp8WrGrQVm4S1lZ3nnE8",
          authDomain: "wirelessproj-9f748.firebaseapp.com",
          databaseURL: "https://wirelessproj-9f748.firebaseio.com",
          projectId: "wirelessproj-9f748",
          storageBucket: "wirelessproj-9f748.appspot.com",
          messagingSenderId: "717465424284"
  };

@NgModule({
  declarations: [
    MyApp,
    Page1,
    Page2,
    GreetPagePage,
    SignupPage,
    TestPage,
    SchedulePage,
    AddRePage,
    FavPage,
    InfoPage,
    FeedbackPage,
    GreenlinePage,
    RedlinePage,
    YellowlinePage,
    AddFavPage,
    LoadingPage,
    ShowrePage,
    AddTimePage
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    BrowserModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Page1,
    Page2,
    GreetPagePage,
    SignupPage,
    TestPage,
    SchedulePage,
    AddRePage,
    FavPage,
    InfoPage,
    FeedbackPage,
    GreenlinePage,
    RedlinePage,
    YellowlinePage,
    AddFavPage,
    LoadingPage,
    ShowrePage,
    AddTimePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
