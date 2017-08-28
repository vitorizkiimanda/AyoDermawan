import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { TabsLembagaPage } from '../pages/tabs-lembaga/tabs-lembaga';
import { TabsDonaturPage } from '../pages/tabs-donatur/tabs-donatur';

import { LoginPage } from '../pages/login/login';

import { DonaturLoginPage } from '../pages/donatur-login/donatur-login';
import { DonaturHomePage } from '../pages/donatur-home/donatur-home';
import { DonaturHome2Page } from '../pages/donatur-home2/donatur-home2';
import { DonaturListPage } from '../pages/donatur-list/donatur-list';
import { DonaturList2Page } from '../pages/donatur-list2/donatur-list2';
import { DonaturProfilPage } from '../pages/donatur-profil/donatur-profil';
import { DonaturProfilEditPage } from '../pages/donatur-profil-edit/donatur-profil-edit';
import { DonaturSumbangPage } from '../pages/donatur-sumbang/donatur-sumbang';
import { DonaturSignupPage } from '../pages/donatur-signup/donatur-signup';
import { DonaturUangPage } from '../pages/donatur-uang/donatur-uang';
import { DonaturBarangPage } from '../pages/donatur-barang/donatur-barang';
import { DonaturNotifikasiPage } from '../pages/donatur-notifikasi/donatur-notifikasi';

import { ModalContentPage } from '../pages/donatur-sumbang/donatur-sumbang';

import { LembagaLoginPage } from '../pages/lembaga-login/lembaga-login';
import { LembagaLelangPage } from '../pages/lembaga-lelang/lembaga-lelang';
import { LembagaLelang2Page } from '../pages/lembaga-lelang2/lembaga-lelang2';
import { LembagaNotifikasiPage } from '../pages/lembaga-notifikasi/lembaga-notifikasi';
import { LembagaProfilPage } from '../pages/lembaga-profil/lembaga-profil';
import { LembagaProfilEditPage } from '../pages/lembaga-profil-edit/lembaga-profil-edit';
import { LembagaSignupPage } from '../pages/lembaga-signup/lembaga-signup';
import { LembagaDonasiPage } from '../pages/lembaga-donasi/lembaga-donasi';
import { LembagaRiwayatPage } from '../pages/lembaga-riwayat/lembaga-riwayat';

// import { SuperTabsModule } from '../ionic2-super-tabs/src';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,

    LoginPage,
    
    DonaturHomePage,
    DonaturHome2Page,
    DonaturLoginPage,
    DonaturListPage,
    DonaturList2Page,
    DonaturProfilPage,
    DonaturProfilEditPage,
    DonaturSumbangPage,
    DonaturSignupPage,
    DonaturUangPage,
    DonaturBarangPage,
    DonaturNotifikasiPage,

    ModalContentPage,

    LembagaLoginPage,
    LembagaLelangPage,
    LembagaLelang2Page,
    LembagaNotifikasiPage,
    LembagaProfilPage,
    LembagaProfilEditPage,
    LembagaSignupPage,
    LembagaDonasiPage,
    LembagaRiwayatPage,

    TabsDonaturPage,
    TabsLembagaPage,
    TabsPage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    
    LoginPage,

    DonaturHomePage,
    DonaturHome2Page,
    DonaturLoginPage,
    DonaturListPage,
    DonaturList2Page,
    DonaturProfilPage,
    DonaturProfilEditPage,
    DonaturSumbangPage,
    DonaturSignupPage,
    DonaturUangPage,
    DonaturBarangPage,
    DonaturNotifikasiPage,

    ModalContentPage,
    
    LembagaLoginPage,
    LembagaLelangPage,
    LembagaLelang2Page,
    LembagaNotifikasiPage,
    LembagaProfilPage,
    LembagaProfilEditPage,
    LembagaSignupPage,
    LembagaDonasiPage,
    LembagaRiwayatPage,

    TabsDonaturPage,
    TabsLembagaPage,
    TabsPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
