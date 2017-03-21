import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { NavController } from 'ionic-angular';
import 'rxjs/add/operator/map';
import { LocalNotifications } from 'ionic-native';
import { AlertController } from 'ionic-angular';

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

    
    constructor(public navCtrl: NavController, private http: Http, private alertCtl : AlertController) {
        this.getDepartures();
    }

    getDepartures(refresher: any = null) {
        console.log("getting posts");

        this.http.get("http://daxaar.ddns.net:3001/flights/departures")
            .map(res => res.json())
            .subscribe(data => {
                this.flights = data.departures;
                refresher && refresher.complete();
                //setTimeout(function(){
                //    this.presentAlert(null,'xzy');
                //},2000);
                LocalNotifications.schedule({
                  title: "There's a plane coming in!",
                  at: new Date(new Date().getTime() + 5 * 1000),
                  sound: null
                });
            },
            error => console.log("error! : ", error));
    }

    // presentAlert(text: string, subTitle: string) {
    //     let alert = this.alertCtl.create({
    //     title: "There's a plane coming in!",
    //     subTitle: "Look up in the air!",
    //     buttons: ['Dismiss']
    //     });
    //     alert.present();
    // }
}