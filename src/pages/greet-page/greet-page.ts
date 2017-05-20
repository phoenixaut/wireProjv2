import { Component } from '@angular/core';
import { NavController, NavParams,ModalController,ToastController} from 'ionic-angular';
import {Page1} from '../page1/page1'
import {Page2} from '../page2/page2'
import {SignupPage} from '../signup/signup'
import { AngularFire, AuthMethods, AuthProviders } from 'angularfire2';

@Component({
  selector: 'page-greet-page',
  templateUrl: 'greet-page.html'
})
export class GreetPagePage {
  loginData = {
      email: '',
      password: ''
    }
  constructor(public navCtrl: NavController
    , public navParams: NavParams
    , public modalCtrl: ModalController
    ,private af: AngularFire
    ,private toastCtrl: ToastController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad GreetPagePage');
  }
  login(){
    // Login Code her
   this.af.auth.login({
     email: this.loginData.email,
     password: this.loginData.password
   }, {
     method: AuthMethods.Password,
     provider: AuthProviders.Password
   })
   .then(auth => {
     // Do custom things with auth
     var tmp = this.loginData.email;
     var splitted = tmp.split(".", 2);
     this.navCtrl.setRoot(Page1);
   })
   .catch(err => {
     // Handle error
     let toast = this.toastCtrl.create({
       message: err.message,
       duration: 2000
     });
     toast.present();
   });
  }
  goToMap(){
    this.navCtrl.push(Page2);
  }
  presentModal() {
    let modal = this.modalCtrl.create(SignupPage);
    modal.present();
  }
}
