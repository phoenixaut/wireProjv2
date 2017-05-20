import {Injectable} from '@angular/core';
import firebase from 'firebase';

@Injectable()
export class DataService {
    public db: any;
    public staticData: any;
    public privateData: any;
    public errorChecking : any;
    constructor() {}

    init() {
      const fbConf = {
        apiKey: "AIzaSyApv2GEUfmnRHUIp8WrGrQVm4S1lZ3nnE8",
          authDomain: "wirelessproj-9f748.firebaseapp.com",
          databaseURL: "https://wirelessproj-9f748.firebaseio.com",
          storageBucket: "wirelessproj-9f748.appspot.com",
          messagingSenderId: "717465424284"
      };

      firebase.initializeApp(fbConf);

      this.db = firebase.database().ref('/');
      this.staticData = firebase.database().ref('/static');
      this.privateData = firebase.database().ref('/private');
    }
    setVal(){
      this.errorChecking = 5;
    }
    login(email,password){
      firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.name;
            var errorMessage = error.message;
            // [START_EXCLUDE]
            if (errorCode === 'auth/wrong-password') {
            this.setVal();
            } else {
            this.setVal();
            }
            console.log(error);

            // [END_EXCLUDE]
          });
    }
    regis(email,password){
      firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
    this.setVal();
    var errorCode = error.name;
    var errorMessage = error.message;

  // ...

});
}
}
// import {Injectable} from '@angular/core';
//
// import firebase from 'firebase';
//
// @Injectable()
// export class DataService {
//     public db: any;
//     public staticData: any;
//     public privateData: any;
//     constructor() {}
//
//     init() {
//       const fbConf = {
//         apiKey: "AIzaSyApv2GEUfmnRHUIp8WrGrQVm4S1lZ3nnE8",
//         authDomain: "wirelessproj-9f748.firebaseapp.com",
//         databaseURL: "https://wirelessproj-9f748.firebaseio.com",
//         storageBucket: "wirelessproj-9f748.appspot.com",
//         messagingSenderId: "717465424284"
//       };
//
//       firebase.initializeApp(fbConf);
//
//       this.db = firebase.database().ref('/');
//       this.staticData = firebase.database().ref('/static');
//       this.privateData = firebase.database().ref('/private');
//     }
// }
