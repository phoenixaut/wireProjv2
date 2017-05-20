import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {GreetPagePage} from '../greet-page/greet-page';

/*
  Generated class for the Loading page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-loading',
  templateUrl: 'loading.html'
})
export class LoadingPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.createTimeout(1000)
                .then(() => {
                    this.navCtrl.push(GreetPagePage);
                });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoadingPage');


  }

  createTimeout(timeout) {
          return new Promise((resolve, reject) => {
              setTimeout(() => resolve(null),timeout)
          })
      }

}
