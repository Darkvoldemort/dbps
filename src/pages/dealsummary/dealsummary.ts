import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{ AgreementPage} from '../agreement/agreement'

/**
 * Generated class for the DealsummaryPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dealsummary',
  templateUrl: 'dealsummary.html',
})
export class DealsummaryPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  agreement(){
 
  this.navCtrl.push(AgreementPage);
}
  ionViewDidLoad() {
    console.log('ionViewDidLoad DealsummaryPage');
  }

}
