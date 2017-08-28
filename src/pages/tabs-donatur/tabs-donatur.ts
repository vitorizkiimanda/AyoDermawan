import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { DonaturHomePage } from '../donatur-home/donatur-home';
import { DonaturListPage } from '../donatur-list/donatur-list';
import { DonaturProfilPage } from '../donatur-profil/donatur-profil';
import { DonaturNotifikasiPage } from '../donatur-notifikasi/donatur-notifikasi';
import { DonaturSumbangPage } from '../donatur-sumbang/donatur-sumbang';

@IonicPage()
@Component({
  selector: 'page-tabs-donatur',
  templateUrl: 'tabs-donatur.html',
})
export class TabsDonaturPage {

  tab1Root = DonaturHomePage;
  tab2Root = DonaturListPage;
  tab3Root = DonaturSumbangPage;
  tab4Root = DonaturNotifikasiPage;
  tab5Root = DonaturProfilPage;

  constructor() {

  }

}
