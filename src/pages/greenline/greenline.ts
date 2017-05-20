import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {SchedulePage} from '../schedule/schedule'
import { PopoverController } from 'ionic-angular';
import { ModalController} from 'ionic-angular';

/*
  Generated class for the Greenline page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-greenline',
  templateUrl: 'greenline.html'
})
export class GreenlinePage {
  page:any;
  constructor(public modalCtrl: ModalController,public navCtrl: NavController, public navParams: NavParams) {
    this.page = 0;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad GreenlinePage');
  }
  goToNext($event){
    var page:string = $event.toElement.attributes.id.nodeValue;

  let contactModal = this.modalCtrl.create(SchedulePage,{"selection": page});
   contactModal.present();
  }
}
