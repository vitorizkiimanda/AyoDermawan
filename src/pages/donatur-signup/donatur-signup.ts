import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
// import { Vibration } from '@ionic-native/vibration';

import { TabsDonaturPage } from '../tabs-donatur/tabs-donatur';

@IonicPage()
@Component({
  selector: 'page-donatur-signup',
  templateUrl: 'donatur-signup.html',
})
export class DonaturSignupPage {

  name:string;
  email:string;
  password:string;
  password2:string;
  telephone:number;
  telephoneMessage:string;
  address:string;

  isValidFormTelephone= true;

  constructor(
    // private vibration: Vibration,
    public navCtrl: NavController, 
    // public http: Http, 
    public alertCtrl: AlertController, 
    public navParams: NavParams, 
    // public data: Data,
    public loadCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonaturSignupPage');
  }

  checkTelephone(){
    console.log(this.telephone);
    if(this.telephone<0){
      this.isValidFormTelephone=false;
      // this.telephoneMessage = "Jangan minus coy";
    } else {
      // this.telephoneMessage=null;
      this.isValidFormTelephone=true;
    }
  }

  signUp() {

    // isi dari tombol daftar
    this.navCtrl.setRoot(TabsDonaturPage)

  }

}
