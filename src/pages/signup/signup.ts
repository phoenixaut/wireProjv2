import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ModalController, Platform, ViewController,AlertController } from 'ionic-angular';
import { AngularFire } from 'angularfire2';

/*
  Generated class for the Signup page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  signupData = {
   email: '',
   password: '',
   passwordRetyped: ''
 };
  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public alertCtrl: AlertController,
    private af: AngularFire) {
       this.signupData.email = this.navParams.get('email');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  dismiss() {
      this.viewCtrl.dismiss();
    }

    showAlert(titles,text) {
    let alert = this.alertCtrl.create({
      title: titles,
      subTitle: text,
      buttons: ['OK']
    });
    alert.present();
  }
  signup() {
   if(this.signupData.password !== this.signupData.passwordRetyped) {
     let alert = this.alertCtrl.create({
       title: 'Error',
       message: 'Your password and your re-entered password does not match each other.',
 buttons: ['OK']
     });
     alert.present();
     return;
   }

   this.af.auth.createUser({
     email: this.signupData.email,
     password: this.signupData.password
    })
   .then(auth => {
     // Could do something with the Auth-Response
     this.af.database.list(auth.uid+'/reminder').push({  place: "Bann Sritang",color: "Green", Time: "13.34"});
     this.af.database.list(auth.uid+'/favorite').push({  place: "Bann Sritang", color: "Green"});
     this.af.database.list(auth.uid+'/feedback').push({ detail: "Nothing", email: ""});
     this.dismiss();
   })
   .catch(err => {
     // Handle error
     let alert = this.alertCtrl.create({
       title: 'Error',
       message: err.message,
       buttons: ['OK']
     });
     alert.present();
   });
 }

  // regis() {
  //   if (this.email.length < 4) {
  //         this.showAlert("Email Inccorect", "Please re-enter email address");
  //       }
  //   else if (this.password.length < 4) {
  //         this.showAlert("Password Inccorect", "Password should has at least 5 characters");
  //         return;
  //     }
  //
  //     if(this.password.length > 4 && this.email.length > 4){
  //
  //       this.showAlert("Congraturation!!!!", "You can use email to login to TROK TRAM");
  //       this.dismiss();
  //     }
  //
  // }
}
