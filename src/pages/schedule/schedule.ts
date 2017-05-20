import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';

/*
  Generated class for the Schedule page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-schedule',
  templateUrl: 'schedule.html'
})
export class SchedulePage {
  character;
  path;
  constructor(public navCtrl: NavController, public navParams: NavParams,public viewCtrl: ViewController
) {
    this.character = this.navParams.get("selection");
    this.path = "../../assets/img/time/" + this.character + ".png";
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SchedulePage');
  }
  dismiss() {
      this.viewCtrl.dismiss();
    }
}
