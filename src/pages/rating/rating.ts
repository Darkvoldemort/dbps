import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from '../home/home';


@IonicPage()
@Component({
  selector: 'page-rating',
  templateUrl: 'rating.html',
})
export class RatingPage {
  @Input() numStars: number = 5;
	@Input() readOnly: boolean = true;
  @Input() value: number = 5;
  
	@Output() clicked: EventEmitter<number> = new EventEmitter<number>();

	stars: string[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RatingPage');
  }
ngAfterViewInit(){
    this.calc();
  }

  calc(){
  	this.stars = [];
	  let tmp = this.value;
	  for(let i=0; i < this.numStars; i++, tmp--)
		  if(tmp >= 1)
			  this.stars.push("star");
		  else if (tmp < 1 && tmp > 0)
			  this.stars.push("star-half");
		  else
			  this.stars.push("star-outline");
  }

  starClicked(index:number){
  	 {
		  this.value = index + 1;
		  this.calc();
		  this.clicked.emit(this.value);
	  }
	}
	
	gohome(){
		 this.navCtrl.popTo(HomePage);
	}
}
