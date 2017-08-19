import { Component } from '@angular/core';

import { AlertController } from 'ionic-angular';
import { NavController } from 'ionic-angular';
import { RequirementPage } from '../../pages/requirement/requirement';




@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  
  constructor(public alertCtrl: AlertController,public navCtrl: NavController) { }

  testCheckboxOpen: boolean;
  testCheckboxResult: any;


  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
  presentFilter(){

    let alert = this.alertCtrl.create({
      title: 'Oops Sorry',
      subTitle: 'Filtering is unavailable at the moment',
      buttons:['OK']
    });
    alert.present();
    
  }

  requirement()
  {
     this.navCtrl.push(RequirementPage);
  }
}
