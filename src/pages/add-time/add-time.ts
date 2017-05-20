import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
/*
  Generated class for the AddTime page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-time',
  templateUrl: 'add-time.html'
})
export class AddTimePage {
  Time;
  lists: FirebaseListObservable<any>;
  key;
  constructor(public navCtrl: NavController
    , public navParams: NavParams
  ,af: AngularFire
,public viewCtrl: ViewController) {
    this.key = this.navParams.get("selection");
    console.log(this.key)
    af.auth.subscribe(auth => {
          if(auth) {
            this.lists = af.database.list('/'+auth.uid+'/reminder/'+this.key+'/Time');
          } else {
              console.log('You are not authenticated')
          }

      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddTimePage');
  }
  dismiss() {
      this.viewCtrl.dismiss();
    }
  addTime(){
    this.lists.push(this.Time);
    console.log(this.Time);
    this.dismiss();
  }

}
