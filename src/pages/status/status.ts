import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
// import { ItemSliding } from 'ionic-angular';
import { RatingPage} from '../rating/rating';

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

   public tran1:boolean;
   public tran2:boolean;


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
  
  share() {
    let alert = this.alertCtrl.create({
      title: 'Payment Sucessful!',
      subTitle: '1000 DKK transfered Danske Bank escrow account 098765431 to seller account',
      buttons: ['OK']
    });
    alert.present();
     
    //  slidingItem.close();
     this.navCtrl.push(RatingPage);
  }

  reject() {
    let alert = this.alertCtrl.create({
      title: 'Payment Rejected!',
      subTitle: 'Seller has been notified of the Payment rejection',
      buttons: ['OK']
    });
    alert.present();
     
    //  slidingItem.close();
     this.navCtrl.push(RatingPage);
  }
  openGrid1(){
    this.tran1 =true;
    this.tran2 = false;
  }
  openGrid2(){
    this.tran2 =true;
    this.tran1 = false;
  }

}
