import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PaymentAndContactPage } from '../payment-and-contact/payment-and-contact'

@IonicPage()
@Component({
  selector: 'page-requirement',
  templateUrl: 'requirement.html',
})
export class RequirementPage {
   public size:boolean;
   public type:boolean;
   public kind:boolean;
   public budget:boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
 onkindok(){
   this.size =true;
   

 }
 
 onproject()
{
  this.kind = true;
}
 ontype(){
   this.budget=true;;
    }
 onkind(){
   
   this.budget=true;
   
 }
 onbudget(){
 
   this.navCtrl.push(PaymentAndContactPage);

 }
onsize(){
  this.type =true;
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad RequirementPage');
  }

}
