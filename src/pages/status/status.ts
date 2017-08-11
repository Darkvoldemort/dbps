import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the StatusPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-status',
  templateUrl: 'status.html',
})
export class StatusPage {
   public swipe: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }
 
  confirmpay(){
  // this.navCtrl.push(ConfirmpayPage);
   {
    let alert = this.alertCtrl.create({
      title: 'Payment Sucessful!',
      subTitle: '10000 DKK transfered Danske Bank escrow account 098765431 to seller account',
      buttons: ['OK']
    });
    alert.present();
  }
  }
 confirmpay1(){
  // this.navCtrl.push(ConfirmpayPage);
   {
    let alert = this.alertCtrl.create({
      title: 'Payment Sucessful!',
      subTitle: '5000 DKK transfered Danske Bank escrow account 098765431 to seller account',
      buttons: ['OK']
    });
    alert.present();
  }
  }

  confirmpay2(){
  // this.navCtrl.push(ConfirmpayPage);
   {
    let alert = this.alertCtrl.create({
      title: 'Payment Sucessful!',
      subTitle: '1000 DKK transfered Danske Bank escrow account 098765431 to seller account',
      buttons: ['OK']
    });
    alert.present();
  }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad StatusPage');
  }

}
