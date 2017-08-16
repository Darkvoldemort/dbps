import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import{SelleracceptPage} from '../selleraccept/selleraccept'

@IonicPage()
@Component({
  selector: 'page-addseller',
  templateUrl: 'addseller.html',
})
export class AddsellerPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddsellerPage');
  }

  onkindok(){
  
  {

  let alert = this.alertCtrl.create({
  title: 'Entrepreneur added and Notified',
  subTitle: 'You will receive a notification if entrepreneur accept the project',
  buttons: [{
    text: 'Ok',
    handler: () => {
      let navTransition = alert.dismiss();

        navTransition.then(() => {
          this.navCtrl.push(SelleracceptPage);
        });
      return false;
    }
  }]
});

alert.present();
 
  
 }
   }

 
}
