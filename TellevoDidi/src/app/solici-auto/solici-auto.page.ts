import { Component, OnInit } from '@angular/core';
import { ViajesService } from '../service/viajes.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-solici-auto',
  templateUrl: './solici-auto.page.html',
  styleUrls: ['./solici-auto.page.scss'],
})
export class SoliciAutoPage implements OnInit {
  viajes: any[] = [];

  constructor(private viajesService: ViajesService, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.loadViajes();
  }

  loadViajes() {
    this.viajesService.getViajes().subscribe(viajes => {
      this.viajes = viajes;
    });
  }

  async handleRefresh(event: CustomEvent) {
    await this.loadViajes();
    const refresher = event.target as HTMLIonRefresherElement;
    if (refresher) {
      refresher.complete();
    }
  }

  async solicitarViaje(id: number) {
    const success = this.viajesService.solicitarViaje(id);
    if (success) {
      const alert = await this.alertCtrl.create({
        header: 'Solicitud Exitosa',
        message: 'Has solicitado un viaje exitosamente.',
        buttons: ['OK']
      });
      await alert.present();
      this.loadViajes();
    } else {
      const alert = await this.alertCtrl.create({
        header: 'Sin Espacio',
        message: 'Lo sentimos, no hay espacio disponible en este viaje.',
        buttons: ['OK']
      });
      await alert.present();
    }
  }
}