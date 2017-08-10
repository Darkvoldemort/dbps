import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

/**
 * Generated class for the SellerListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-seller-list',
  templateUrl: 'seller-list.html',
})
export class SellerListPage {
  

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SellerListPage');
  }
  getwords() {
  let alert = this.alertCtrl.create({
      title: 'Comments Updated',
      subTitle: 'Your Comments have been updated and the seller notified',
      buttons:['OK']
    });
    alert.present();
    
}

}
