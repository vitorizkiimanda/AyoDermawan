import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, AlertController, App, ModalController, Platform, ViewController, ActionSheetController } from 'ionic-angular';
import { NgForm } from '@angular/forms';
// import { ModalPage } from './modal-page';

import { Camera, CameraOptions } from '@ionic-native/camera';

import { Data } from '../../providers/data';
import { Http } from '@angular/http';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseObjectObservable, FirebaseListObservable } from 'angularfire2/database';

import { DonaturLelang2Page } from '../donatur-lelang2/donatur-lelang2';


// @IonicPage()
@Component({
  selector: 'page-donatur-lelang',
  templateUrl: 'donatur-lelang.html',
})
export class DonaturLelangPage {

  image1: string;
  image2: string;
  image3: string;
  id_donatur:string;

  validLembagaUang = false;

  validLembagaBarang = false;
  validKategori = false;
  

  
  // validProvinsi = false;
  // validKota = false;
  // validKecamatan = false;

  
  validProvinsi = true;
  validKota = true;
  validKecamatan = true;

  validPhoto= false;

  submitted = false;
  gambar1= true;
  gambar2= true;

  name: string;
  price:string;
  kategori: string;
  lembaga_barang: string;
  provinsi: string;
  kota: string;
  kecamatan: string;
  address: string;
  description: string;

  nama_lembaga: string;

  donatur: FirebaseObjectObservable<any[]>;

  lembaga:any;

  constructor(
    private fireauth: AngularFireAuth,
    private firedata: AngularFireDatabase,
    // private vibration: Vibration,
    public navCtrl: NavController, 
    public http: Http, 
    public alertCtrl: AlertController, 
    public navParams: NavParams, 
    public data: Data,
    public loadCtrl: LoadingController,
    public app: App,
    public modalCtrl: ModalController,
    public actionSheetCtrl: ActionSheetController,
    private camera: Camera) {

      this.firedata.list('lembaga').subscribe(data => {
        console.log(data);        
        this.lembaga=data;//ngambil data yang dikasih firebase
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DonaturLelangPage');
  }

  OpenItemBarang(form: NgForm) {

    this.submitted = true;

    let loading = this.loadCtrl.create({
        content: 'memuat..'
    });

    if(form.valid && this.validKategori && this.validLembagaBarang && this.validProvinsi && this.validKota && this.validKecamatan && this.validPhoto){

      console.log(this.lembaga_barang);
      //mendapatkan nama_lembaga dari id_lembaga
      this.firedata.object('/lembaga/'+this.lembaga_barang).subscribe(lembaga => {
        this.nama_lembaga = lembaga.name;
      });
      console.log(this.nama_lembaga);
      
      let input = JSON.stringify({
        name:this.name,
        price:this.price,
        kategori:this.kategori,
        lembaga_barang:this.lembaga_barang,
        // provinsi:this.provinsi,
        // kota:this.kota,
        // kecamatan:this.kecamatan,
        address:this.address,
        description:this.description,
        image1:this.image1,
        image2:this.image2,
        image3:this.image3,
      });
      
      


      loading.present();

      

      // untuk push page dengan tabs dihide
      this.app.getRootNav().push(DonaturLelang2Page, input);

      loading.dismiss();

    }
    else{

      let alert = this.alertCtrl.create({
                title: 'Lengkapi Data',
                // subTitle: 'Email atau Password salah',      
                buttons: ['OK']
              });
              // this.vibration.vibrate(1000);
              alert.present();

    }

  }

  cekKategori() {
    this.validKategori = true;
  }

  cekLembagaBarang(){

    this.validLembagaBarang = true;
 
 }

 cekProvinsi() {
   this.validProvinsi = true;
 }

 cekKota(){
   this.validKota = true;
 }

 cekKecamatan(){
   this.validKecamatan = true;
 }


 updatePicture1() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Pilihan',
      buttons: [
        {
          text: 'Ambil Gambar Baru',
          role: 'ambilGambar',
          handler: () => {
            this.takePicture1();
          }
        },
        {
          text: 'Pilih Dari Galleri',
          role: 'gallery',
          handler: () => {
            this.getPhotoFromGallery1();
          }
        }
      ]
    });
    actionSheet.present();
  }

  async takePicture1(){
    try {
      const options : CameraOptions = {
        quality: 50, //to reduce img size
        targetHeight: 600,
        targetWidth: 600,
        destinationType: this.camera.DestinationType.DATA_URL, //to make it base64 image
        encodingType: this.camera.EncodingType.JPEG,
        mediaType:this.camera.MediaType.PICTURE,
        correctOrientation: true
      }

      const result1 =  await this.camera.getPicture(options);

      this.image1 = 'data:image/jpeg;base64,' + result1;

      this.validPhoto=true;
      this.gambar1=false;

    }
    catch (e) {
      console.error(e);
      alert("error");
    }

  }

  getPhotoFromGallery1(){
    this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        sourceType     : this.camera.PictureSourceType.PHOTOLIBRARY,
        targetWidth: 600,
        targetHeight: 600
    }).then((imageData) => {
      // this.base64Image = imageData;
      // this.uploadFoto();
      this.image1 = 'data:image/jpeg;base64,' + imageData;
      this.validPhoto=true;
      this.gambar1=false;
      }, (err) => {
    });
  }

  updatePicture2() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Pilihan',
      buttons: [
        {
          text: 'Ambil Gambar Baru',
          role: 'ambilGambar',
          handler: () => {
            this.takePicture2();
          }
        },
        {
          text: 'Pilih Dari Galleri',
          role: 'gallery',
          handler: () => {
            this.getPhotoFromGallery2();
          }
        }
      ]
    });
    actionSheet.present();
  }

  async takePicture2(){
    try {
      const options : CameraOptions = {
        quality: 50, //to reduce img size
        targetHeight: 600,
        targetWidth: 600,
        destinationType: this.camera.DestinationType.DATA_URL, //to make it base64 image
        encodingType: this.camera.EncodingType.JPEG,
        mediaType:this.camera.MediaType.PICTURE,
        correctOrientation: true
      }

      const result2 =  await this.camera.getPicture(options);

      this.image2 = 'data:image/jpeg;base64,' + result2;

      this.validPhoto=true;
      this.gambar2=false;

    }
    catch (e) {
      console.error(e);
      alert("error");
    }

  }

  getPhotoFromGallery2(){
    this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        sourceType     : this.camera.PictureSourceType.PHOTOLIBRARY,
        targetWidth: 600,
        targetHeight: 600
    }).then((imageData) => {
      // this.base64Image = imageData;
      // this.uploadFoto();
      this.image2 = 'data:image/jpeg;base64,' + imageData;
      this.validPhoto=true;
      this.gambar2=false;
      }, (err) => {
    });
  }

  updatePicture3() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Pilihan',
      buttons: [
        {
          text: 'Ambil Gambar Baru',
          role: 'ambilGambar',
          handler: () => {
            this.takePicture3();
          }
        },
        {
          text: 'Pilih Dari Galleri',
          role: 'gallery',
          handler: () => {
            this.getPhotoFromGallery3();
          }
        }
      ]
    });
    actionSheet.present();
  }

  async takePicture3(){
    try {
      const options : CameraOptions = {
        quality: 50, //to reduce img size
        targetHeight: 600,
        targetWidth: 600,
        destinationType: this.camera.DestinationType.DATA_URL, //to make it base64 image
        encodingType: this.camera.EncodingType.JPEG,
        mediaType:this.camera.MediaType.PICTURE,
        correctOrientation: true
      }

      const result3 =  await this.camera.getPicture(options);

      this.image3 = 'data:image/jpeg;base64,' + result3;

      this.validPhoto=true;

    }
    catch (e) {
      console.error(e);
      alert("error");
    }

  }

  getPhotoFromGallery3(){
    this.camera.getPicture({
        destinationType: this.camera.DestinationType.DATA_URL,
        sourceType     : this.camera.PictureSourceType.PHOTOLIBRARY,
        targetWidth: 600,
        targetHeight: 600
    }).then((imageData) => {
      // this.base64Image = imageData;
      // this.uploadFoto();
      this.image3 = 'data:image/jpeg;base64,' + imageData;
      this.validPhoto=true;
      }, (err) => {
    });
  }

}
