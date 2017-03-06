import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';

@Component({
    selector: 'page-departures',
    templateUrl: 'departures.html'
})
export class DeparturesPage {

    flights: any;
    private _departed: boolean = false;

    get departed(): boolean {
        return this._departed;    
    }
    set departed(value: boolean) {
        this._departed = value;
    }

    
    constructor(public navCtrl: NavController, private http: Http) {
        this.getDepartures();
    }

    getDepartures(refresher: any = null) {
        console.log("getting posts");

        this.http.get("http://daxaar.ddns.net:3001/flights/departures")
            .map(res => res.json())
            .subscribe(data => {
                this.flights = data.departures;
                refresher && refresher.complete();
            },
            error => console.log("error! : ", error));
    }
}