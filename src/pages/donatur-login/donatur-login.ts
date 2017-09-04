import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController } from 'ionic-angular';
import { NgForm } from '@angular/forms';

import { TabsDonaturPage } from '../tabs-donatur/tabs-donatur';
import { DonaturSignupPage } from '../donatur-signup/donatur-signup';

@IonicPage()
@Component({
  selector: 'page-donatur-login',
  templateUrl: 'donatur-login.html',
})
export class DonaturLoginPage {

  submitted = false;
  status:string;
  lihat = true;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonaturLoginPage');
    this.status = "password";
  }

  masuk(form: NgForm) {

    this.submitted = true;

    let loading = this.loadCtrl.create({
        content: 'memuat..'
    });

    if(form.valid){

      loading.present();

      this.navCtrl.setRoot(TabsDonaturPage);

      loading.dismiss();

    }
    else{

      let alert = this.alertCtrl.create({
                title: 'Gagal Masuk',
                subTitle: 'Email atau Password salah',      
                buttons: ['OK']
              });
              // this.vibration.vibrate(1000);
              alert.present();

    }

  }

  // masuk() {
  //   this.navCtrl.setRoot(TabsDonaturPage);
  // }

  showPassword(){
    this.status = "text";
    this.lihat = false;
    console.log(this.status);
  }

  hidePassword(){
    this.status = "password";
    this.lihat = true;
    console.log(this.status);
  }

  signUp() {
    this.navCtrl.push(DonaturSignupPage);
  }

}
