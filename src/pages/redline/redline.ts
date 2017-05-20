import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {SchedulePage} from '../schedule/schedule'
import { PopoverController } from 'ionic-angular';
import { ModalController} from 'ionic-angular';

/*
  Generated class for the Redline page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-redline',
  templateUrl: 'redline.html'
})
export class RedlinePage {
  page:any;
  constructor(public modalCtrl: ModalController,public navCtrl: NavController, public navParams: NavParams) {
    this.page = 0;
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad RedlinePage');
  }

  goToNext($event){
    var page:string = $event.toElement.attributes.id.nodeValue;

  let contactModal = this.modalCtrl.create(SchedulePage,{"selection": page});
   contactModal.present();
  }

}
