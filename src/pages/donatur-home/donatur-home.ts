import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, App } from 'ionic-angular';

import { DonaturHome2Page } from '../donatur-home2/donatur-home2';
import { DonaturLelangPage } from '../donatur-lelang/donatur-lelang';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

// @IonicPage()
@Component({
  selector: 'page-donatur-home',
  templateUrl: 'donatur-home.html',
})
export class DonaturHomePage {

  lelang: any;

  constructor(
    private fireauth: AngularFireAuth, 
    private firedata: AngularFireDatabase, 
    public navCtrl: NavController, 
    public navParams: NavParams,
    public app: App) {
      this.firedata.list('lelang').subscribe(data=>{
        console.log(data);
        this.lelang=data;//ngambil data yang dikasih firebase
      
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonaturHomePage');
  }

  OpenItem(data) {
    // untuk push page dengan tabs dihide
    this.app.getRootNav().push(DonaturHome2Page, data);
  }

  tambahLelang() {
    this.app.getRootNav().push(DonaturLelangPage);
  }

}
