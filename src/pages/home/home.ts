import { Component } from '@angular/core';

import { AlertController } from 'ionic-angular';
import { NavController } from 'ionic-angular';




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
  doCheckbox1() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Which parts do you want renovated?');

    alert.addInput({
      type: 'checkbox',
      label: 'Foundations',
      value: 'value1',
      checked: true
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Walls',
      value: 'value2'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Painting',
      value: 'value3'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Roof',
      value: 'value4'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Garden',
      value: 'value5'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Kitchen',
      value: 'value6'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Washroom',
      value: 'value6'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Basement',
      value: 'value6'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Portico',
      value: 'value6'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay',
      handler: data => {
        console.log('Checkbox data:', data);
        this.testCheckboxOpen = false;
        this.testCheckboxResult = data;
      }
    });
    alert.present().then(() => {
      this.testCheckboxOpen = true;
    });
  }
  doCheckbox2() {
    let alert = this.alertCtrl.create();
    alert.setTitle('What stages you want to be built?');

    alert.addInput({
      type: 'checkbox',
      label: 'Foundations',
      value: 'value1',
      checked: true
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Walls',
      value: 'value2'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Painting',
      value: 'value3'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Roof',
      value: 'value4'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Garden',
      value: 'value5'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Kitchen',
      value: 'value6'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Washroom',
      value: 'value6'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Basement',
      value: 'value6'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Portico',
      value: 'value6'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay',
      handler: data => {
        console.log('Checkbox data:', data);
        this.testCheckboxOpen = false;
        this.testCheckboxResult = data;
      }
    });
    alert.present().then(() => {
      this.testCheckboxOpen = true;
    });
  }
  doCheckbox3() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Which parts do you want the plumbing to be done?');

    alert.addInput({
      type: 'checkbox',
      label: 'Foundations',
      value: 'value1',
      checked: true
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Walls',
      value: 'value2'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Painting',
      value: 'value3'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Roof',
      value: 'value4'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Garden',
      value: 'value5'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Kitchen',
      value: 'value6'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Washroom',
      value: 'value6'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Basement',
      value: 'value6'
    });

    alert.addInput({
      type: 'checkbox',
      label: 'Portico',
      value: 'value6'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Okay',
      handler: data => {
        console.log('Checkbox data:', data);
        this.testCheckboxOpen = false;
        this.testCheckboxResult = data;
      }
    });
    alert.present().then(() => {
      this.testCheckboxOpen = true;
    });
  }

}
