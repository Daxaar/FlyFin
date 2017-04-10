import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as _ from 'lodash';

@Component({
  selector: 'page-arrivals',
  templateUrl: 'arrivals.html'
})
export class ArrivalsPage {

    flights: any;
    arrivals: any;
    private _arrived: boolean = false;

    constructor(public navCtrl: NavController, public navParams: NavParams, private http: Http) {
        this.getArrivals();
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ArrivalsPage');
  }

  get arrived(): boolean {
      return this._arrived;
  }
  set arrived(value: boolean) {
      this._arrived = value;
  }

  isOnApproach(flight) {
      return flight.Status === "On Approach";
  }

  getArrivals(refresher: any = null) {

      this.http.get("http://daxaar.ddns.net:3001/flights/arrivals")
          .map(res => res.json())
          .subscribe(data => {
              if(localStorage.getItem("sort_estimated")){
                this.flights = _.sortBy(data.arrivals, arrival => arrival.EstimatedTime);
              } else{
                this.flights = data.arrivals;
              }
              refresher && refresher.complete();
          },
          error => console.log("error! : ", error));
  }
}
