import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { ConfirmpayPage } from '../confirmpay/confirmpay';
import { AlertController } from 'ionic-angular';




@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }
confirmpay(){
  // this.navCtrl.push(ConfirmpayPage);
   {
    let alert = this.alertCtrl.create({
      title: 'Payment Sucessful!',
      subTitle: '10000 DKK transfered from account 1234567890 to Danske Bank escrow account 098765431',
      buttons: ['OK']
    });
    alert.present();
  }

}
  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
  }

}
