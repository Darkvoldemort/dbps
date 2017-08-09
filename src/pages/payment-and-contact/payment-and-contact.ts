import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


/**
 * Generated class for the PaymentAndContactPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-payment-and-contact',
  templateUrl: 'payment-and-contact.html',
})
export class PaymentAndContactPage {
    public  full: boolean ;
    public  part: boolean ;
    public  third:boolean ;
    public text:string;
    public choices:any[] =[];
    public itenno:number;
    
      



  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
  }
  
  fullPayment(){
   this.full = true;
   this.part = false; 
   this.third = false;
   console.log(this.full);
   console.log(this.part);
   console.log(this.third);
  }

  partialPay(){
    this.part =true;
    this.third = false;
    this.full =false;
    console.log(this.full);
   console.log(this.part);
   console.log(this.third);


  }

  thirdPay(){

    this.part = false;
    this.third = true;
    this.full =false;
    console.log(this.full);
   console.log(this.part);
   console.log(this.third);
  }

  addInputField(){
     this.choices.push('');
    
  }

  ionViewDidLoad() {
    
    console.log('ionViewDidLoad PaymentAndContactPage');
  }

  
}
