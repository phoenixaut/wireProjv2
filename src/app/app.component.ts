import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { Page1 } from '../pages/page1/page1';
import { Page2 } from '../pages/page2/page2';
import {GreetPagePage} from '../pages/greet-page/greet-page';
import {FavPage} from '../pages/fav/fav';
import {FeedbackPage} from '../pages/feedback/feedback';
import { AngularFire } from 'angularfire2';
import {LoadingPage} from '../pages/loading/loading';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = GreetPagePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,private af: AngularFire) {
    this.af.auth.subscribe(auth => {
      if(!auth)
        this.rootPage = LoadingPage;
      else
        this.rootPage = Page1;
    });
    this.initializeApp();
    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Map', component: Page2 },
      { title: 'Reminder', component: Page1 },
      { title: 'Favorite', component: FavPage},
      { title: 'Feedback', component: FeedbackPage},
    ];
  }
  logout(){
    this.af.auth.logout();
    this.rootPage = GreetPagePage;
  }
  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}
