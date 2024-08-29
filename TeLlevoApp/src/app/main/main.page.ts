import { Component, OnInit } from '@angular/core';
import { ViajesService } from '../viajes/viajes.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(private viajesService: ViajesService, private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async handleRefresh(event: CustomEvent) {
    const refresher = event.target as HTMLIonRefresherElement;
    if (refresher) {
      refresher.complete();
    }
  }
}
