import { Component ,NgZone,ViewChild} from '@angular/core';
import * as io from 'socket.io-client';
import { IonicPage, NavController, NavParams,Content } from 'ionic-angular';
import { PaymentAndContactPage } from '../payment-and-contact/payment-and-contact'

@IonicPage()
@Component({
  selector: 'page-selleraccept',
  templateUrl: 'selleraccept.html',
})
export class SelleracceptPage {
  @ViewChild(Content) content: Content;
  messages:any = [];
  socketHost: string = "http://localhost:3000/";
  socket:any;
  chat:any;
  username:string;
  zone:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.socket = io.connect(this.socketHost);
    this.zone = new NgZone({enableLongStackTrace: false});
    this.socket.on("chat message", (msg:any) =>{
      this.zone.run(() =>{
        this.messages.push(msg);
        this.content.scrollToBottom();
      });
    });
  }

  chatSend(v:any){
    let data = {
      message: v.chatText,
      username: this.username
    }
    this.socket.emit('new message', data);
    this.chat = '';
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SelleracceptPage');
  }
  onpay(){
 
   this.navCtrl.push(PaymentAndContactPage);

 }
}
