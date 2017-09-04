import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams , LoadingController, AlertController } from 'ionic-angular';
import { NgForm } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-donatur-profil-edit',
  templateUrl: 'donatur-profil-edit.html',
})
export class DonaturProfilEditPage {

  submitted = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public loadCtrl: LoadingController,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonaturProfilEditPage');
  }

}
