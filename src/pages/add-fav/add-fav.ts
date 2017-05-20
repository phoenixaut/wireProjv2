import { Component } from '@angular/core';
import { NavController, NavParams,ViewController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
/*
  Generated class for the AddFav page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-add-fav',
  templateUrl: 'add-fav.html'
})
export class AddFavPage {
  TramStop;
  tram;
  lists: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController
    , public navParams: NavParams
    ,public viewCtrl: ViewController
  ,public af: AngularFire) {}
    items = [
    'Bann Sritang',
    'Parking',
    'Faculty of Physical Therapy',
    'Institute of Nutrition',
    'Faculty of Environment and Resource Studies',
    'Library',
    'Institute for Population and Social Research',
    'Faculty of Engineering',
    'Gate 4',
    'Institute of Science and Technology',
    'Office of the President',
    'International College',
    'ASEAN Institute for Health Development',
    'Thai House',
    'Faculty of Socail Sciences and Humanities',
    'Institute of Language and Culture',
    'Faculty of Arts',
    'Music Museum',
    'Faculty of Science',
    'Parking 2',
    'Mahidol Learning Center',
    'Baan Chiyapruek',
    'Staff House',
    'Soccer Field 1-2',
    'Faculty of Vaterinary Science',
    'Collegge of Religious Studies',
    'MU Corner',
    'Mahidol Wittayanusorn School',
    'National Institute for Child and Family Development',
    'Condominiums',
    'Ramathibodi Dorm',
    'Police Station',
    'Faculty of Medical Technology',
    'Salaya Market',
    'Main Gate',
    'Ratchasuda College',
    'College of Music'
  ];

    tramColors= [
      'Blue',
      'Red',
      'Green',
      'Yellow'
    ];
    addRe(){
      var user = this.af.auth.subscribe(auth => {
          if(auth) {
            this.lists = this.af.database.list('/'+auth.uid+'/favorite/');
            this.lists.push({  place: this.TramStop
                              ,color: this.tram
                            });
          } else {
              console.log('You are not authenticated')
          }

      });
      this.dismiss();
    }
    dismiss() {
        this.viewCtrl.dismiss();
      }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AddFavPage');
  }

}
