import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViajesService {
  private viajes = [
    { id: 1, destino: 'Santiago Centro', inicio: 'Duoc - Alameda', costo: 2000, capacidad: 4, disponibles: 4, hora: '22:00' },
    { id: 2, destino: 'Las Condes', inicio: 'Duoc - Padre Alonso Ovalle', costo: 4000, capacidad: 4, disponibles: 4, hora: '22:30' },
    { id: 3, destino: 'Providencia', inicio: 'Duoc - Alameda', costo: 3000, capacidad: 4, disponibles: 4, hora: '22:00' },
    { id: 4, destino: 'Vitacura', inicio: 'Duoc - Padre Alonso Ovalle', costo: 2000, capacidad: 4, disponibles: 4, hora: '22:30' },
    { id: 5, destino: 'Quinta Normal', inicio: 'Duoc - Alameda', costo: 1500, capacidad: 4, disponibles: 4, hora: '22:00' },
    { id: 6, destino: 'Cerro Navia', inicio: 'Duoc - Padre Alonso Ovalle', costo: 3000, capacidad: 4, disponibles: 4, hora: '22:30' },
    { id: 7, destino: 'Pudahuel', inicio: 'Duoc - Alameda', costo: 3500, capacidad: 4, disponibles: 4, hora: '22:00' },
    { id: 8, destino: 'Estación Central', inicio: 'Duoc - Alameda', costo: 1000, capacidad: 4, disponibles: 4, hora: '22:00' }
  ];

  constructor() {}

  getViajes(): Observable<any[]> {
    return of(this.viajes);
  }

  solicitarViaje(id: number): boolean {
    const viaje = this.viajes.find(v => v.id === id);
    if (viaje && viaje.disponibles > 0) {
      viaje.disponibles -= 1;
      return true;
    }
    return false;
  }
}
