import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, App, ModalController, Platform, ViewController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
// import { ModalPage } from './modal-page';

import { DonaturUangPage } from '../donatur-uang/donatur-uang';
import { DonaturBarangPage } from '../donatur-barang/donatur-barang';


@Component({
  selector: 'page-donatur-sumbang',
  templateUrl: 'donatur-sumbang.html',
})

export class DonaturSumbangPage {

  sumbang: string = "barang";

  constructor(
    // private vibration: Vibration,
    public navCtrl: NavController, 
    // public http: Http, 
    public alertCtrl: AlertController, 
    public navParams: NavParams, 
    // public data: Data,
    public loadCtrl: LoadingController,
    public app: App,
    public modalCtrl: ModalController) {
  }

  UploadFoto() {
    let modal = this.modalCtrl.create(ModalContentPage);
    modal.present();
  }

  OpenItemUang() {
    // untuk push page dengan tabs dihide
    this.app.getRootNav().push(DonaturUangPage);
  }

  OpenItemBarang() {
    // untuk push page dengan tabs dihide
    this.app.getRootNav().push(DonaturBarangPage);
  }


}

@Component({
  template: `
<ion-header>

  <ion-navbar color="AyoDermawan">
    <ion-title text-center>Unggah Foto</ion-title>
  </ion-navbar>

</ion-header>

<ion-content padding>
  
  <ion-item no-lines>
        <button class='Button' color="AyoDermawan" ion-button outline block (click)='UploadFoto()'><p class="ButtonWordBlue">Selesai</p></button>
        <button class='Button' color="AyoDermawan" ion-button block (click)='dismiss()'><p class="ButtonWord">Batal</p></button>
      </ion-item>
</ion-content>
`
})
export class ModalContentPage {
  character;

  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController
  ) {}

  dismiss() {
    this.viewCtrl.dismiss();
  }
}