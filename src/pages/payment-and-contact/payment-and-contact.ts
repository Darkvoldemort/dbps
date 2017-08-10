import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DealsummaryPage } from '../dealsummary/dealsummary';

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
    public schds:any[]=[];
    public opsch:boolean;
    
      



  constructor(public navCtrl: NavController, 
    public navParams: NavParams
    // public datePicker: DatePicker
  ) { }
  
  fullPayment(){
   this.full = true;
   this.part = false; 
   this.third = false;
   this.opsch =false;
  }

  partialPay(){
    this.part =true;
    this.third = false;
    this.full =false;
    this.opsch =false;


  }

  thirdPay(){

    this.part = false;
    this.third = true;
    this.full =false;
    this.opsch =false;
  }

  addInputField(){
     this.choices.push('');
      
  }
  opneSchd()
  {
    this.part = false;
    this.third = false;
    this.full =false;
    this.opsch=true;

  }
  schedulePay()
  {
   
  }

  addschedule()
  {
   this.schds.push('');
  }

summary(){
  this.navCtrl.push(DealsummaryPage);

}



  ionViewDidLoad() {
    
    console.log('ionViewDidLoad PaymentAndContactPage');
  }

  
}
