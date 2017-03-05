import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  _image : string = null;

  constructor(public navCtrl: NavController) {

  }
  randomImage() {

      if (this._image !== null) {
          return this._image;
      }

      if (Math.random() > 0.5) {
          this._image = "assets/a380.jpg";
      } else {
        this._image = "assets/flyfin.jpg";
      }
      return this._image;
  }

}
