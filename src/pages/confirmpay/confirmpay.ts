import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StatusPage} from '../status/status'

/**
 * Generated class for the ConfirmpayPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-confirmpay',
  templateUrl: 'confirmpay.html',
})
export class ConfirmpayPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
chat(){
  this.navCtrl.push(StatusPage);

}
  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfirmpayPage');
  }

}
