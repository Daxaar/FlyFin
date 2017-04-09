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
    this._settings.push(new Setting("Sort by expected",true));
    this._settings.push(new Setting("Show arrived", false));
    this._settings.push(new Setting("Show departed", false));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingsPage');
  }

  get settings(): Array<Setting> {
    return this._settings;
  }

}

export class Setting {

    private _text:string;
    private _selected:boolean;

    constructor(text: string, selected: boolean ){
      this._text = text;
      this._selected = selected;
    }

    get text(): string {
      return this._text;
    }
    set text(value: string){
      this._text = value;
    }
    get selected(): boolean {
      return this._selected;
    }
    set selected(value: boolean){
      console.log(`${this._text} - ${value}`);
      this._selected = value;
    }
}