import { Component } from '@angular/core';
import { NavController, NavParams, ViewController,ModalController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {AddTimePage} from '../add-time/add-time';
/*
  Generated class for the Showre page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-showre',
  templateUrl: 'showre.html'
})
export class ShowrePage {
  key;
  items = [];
  lists: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController
    , public navParams: NavParams
   ,af: AngularFire
 ,public viewCtrl: ViewController
,public modalCtrl: ModalController) {
    this.key = this.navParams.get("selection");
    af.auth.subscribe(auth => {
          if(auth) {
            this.lists = af.database.list('/'+auth.uid+'/reminder/'+this.key+'/Time/',{ preserveSnapshot: true });
            this.lists
              .subscribe(snapshots => {
                this.items = [];
                snapshots.forEach(snapshot => {
                    this.items.push(snapshot.val());
    });
    this.items.sort();
  })
    console.log(this.items);
          } else {
              console.log('You are not authenticated')
          }

      });
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ShowrePage');
  }
  dismiss() {
      this.viewCtrl.dismiss();
    }

    presentAddModal() {
      let contactModal = this.modalCtrl.create(AddTimePage,{"selection": this.key});
     contactModal.present();
    }

}
