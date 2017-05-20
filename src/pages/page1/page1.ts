import { Component } from '@angular/core';

import { NavController,ModalController } from 'ionic-angular';
import {AddRePage} from '../add-re/add-re'
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {ShowrePage} from '../showre/showre';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html'
})
export class Page1 {
  lists: FirebaseListObservable<any>;

  constructor(public navCtrl: NavController
    ,public modalCtrl: ModalController
    ,af: AngularFire) {
    af.auth.subscribe(auth => {
          if(auth) {
            this.lists = af.database.list('/'+auth.uid+'/reminder/');
          } else {
              console.log('You are not authenticated')
          }

      });

  }
seeMore($event){
  this.presentShowModal($event.toElement.offsetParent.attributes.id.nodeValue);
}
deleteRe($event){
  this.lists.remove($event.toElement.offsetParent.attributes.id.nodeValue);
}
presentAddModal() {
  let contactModal = this.modalCtrl.create(AddRePage);
 contactModal.present();
}

presentShowModal(key) {
  let contactModal = this.modalCtrl.create(ShowrePage,{"selection": key});
 contactModal.present();
}
}
