import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
/*
  Generated class for the Settings page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html'
})
export class SettingsPage {

  private _settings = new Array<Setting>();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this._settings.push(new Setting("sort_expected", "Sort by expected",true));
    this._settings.push(new Setting("show_arrived","Show arrived", false));
    this._settings.push(new Setting("show_departed", "Show departed", false));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  get settings(): Array<Setting> {
    return this._settings;
  }

}

export class Setting {

    constructor(private key: string,public text: string, selected: boolean ){      
      console.log("ctor " + key);
      if(localStorage.getItem(key) == null){
        console.log("ctor selected " + <any>selected);
        localStorage.setItem(key, <any>selected);
      }
    }

    get selected(): boolean {
      var selected = <any>localStorage.getItem(this.key);
      console.log(`get ${this.text} ${selected}`);
      return selected;
    }

    set selected(value: boolean){
      console.log(`set ${this.text} - ${value}`);
      localStorage.setItem(this.key, <any>value);
    }
}