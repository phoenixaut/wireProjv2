import { Component } from '@angular/core';

import { NavController, NavParams,ModalController,ViewController } from 'ionic-angular';
import {TestPage} from '../test/test';
import {InfoPage} from '../info/info';
import {GreenlinePage} from '../greenline/greenline';
import {RedlinePage} from '../redline/redline';
import {YellowlinePage} from '../yellowline/yellowline';


@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {

  constructor(public navCtrl: NavController
    , public navParams: NavParams
    ,public modalCtrl: ModalController
  ,public viewCtrl: ViewController) {
  }

  GotoSche(){
    this.navCtrl.push(TestPage);
  }
  GotoSche2(){
    this.navCtrl.push(RedlinePage);
  }
  GotoSche3(){
    this.navCtrl.push(GreenlinePage);
  }
  GotoSche4(){
    this.navCtrl.push(YellowlinePage);
  }
  presentAddModal() {
  let contactModal = this.modalCtrl.create(InfoPage);
   contactModal.present();
  }

}
