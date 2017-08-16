import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaymentAndContactPage } from '../payment-and-contact/payment-and-contact'

/**
 * Generated class for the SelleracceptPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-selleraccept',
  templateUrl: 'selleraccept.html',
})
export class SelleracceptPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SelleracceptPage');
  }
  onpay(){
 
   this.navCtrl.push(PaymentAndContactPage);

 }
}
