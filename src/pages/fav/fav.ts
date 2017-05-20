import { Component } from '@angular/core';

import { NavController,ModalController,ViewController } from 'ionic-angular';
import {AddFavPage} from '../add-fav/add-fav'
import {AngularFire, FirebaseListObservable} from 'angularfire2';

/*
  Generated class for the Fav page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-fav',
  templateUrl: 'fav.html'
})
export class FavPage {
lists: FirebaseListObservable<any>;
constructor(public navCtrl: NavController
  ,public modalCtrl: ModalController
  ,public viewCtrl: ViewController
  ,af: AngularFire) {
    var user = af.auth.subscribe(auth => {
        if(auth) {
          this.lists = af.database.list('/'+auth.uid+'/favorite/');
        } else {
            console.log('You are not authenticated')
        }
    });
  }
  seeMore($event){
    console.log($event.toElement.offsetParent.attributes.id.nodeValue);

  }
  deleteRe($event){
    this.lists.remove($event.toElement.offsetParent.attributes.id.nodeValue);
  }

presentAddModal() {
  let contactModal = this.modalCtrl.create(AddFavPage);
 contactModal.present();
}
dismiss() {
    this.viewCtrl.dismiss();
  }
}
