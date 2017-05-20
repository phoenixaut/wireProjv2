import { Component } from '@angular/core';
import { NavController, NavParams,AlertController } from 'ionic-angular';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
/*
  Generated class for the Feedback page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-feedback',
  templateUrl: 'feedback.html'
})
export class FeedbackPage {
  feedbackData = {
   email: '',
   detail: ''
  };
    lists: FirebaseListObservable<any>;
  constructor(public navCtrl: NavController
    , public navParams: NavParams
  ,public af: AngularFire
  ,public alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedbackPage');
  }

  submitFeedback(){
    this.af.auth.subscribe(auth => {
       if(auth) {
         this.lists = this.af.database.list('/'+auth.uid+'/feedback/');
         this.lists.push({  detail: this.feedbackData.detail
                           ,email: this.feedbackData.email});

      this.showAlert();
      
       } else {
           console.log('You are not authenticated')
       }

   });
  }
 showAlert(){
   let alert = this.alertCtrl.create({
                          title: "Congraturation",
                          subTitle: "Thank you for your feedback",
                          buttons: ['OK']
                        });
                        alert.present();
 }
}
