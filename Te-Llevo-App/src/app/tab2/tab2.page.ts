import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatExpansionModule } from '@angular/material/expansion';
import { IonHeader, IonContent, IonToolbar, IonTitle, IonButton, IonModal, IonButtons } from "@ionic/angular/standalone";

@Component({
  standalone: true,
  selector: 'app-tab2',
  templateUrl: './tab2.page.html',
  styleUrls: ['./tab2.page.scss'],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatExpansionModule,
    IonHeader,
    IonContent,
    IonToolbar,
    IonTitle,
    IonButton,
    IonModal,
    IonButtons
  ]
})
export class Tab2Page {
  panelOpenState = false;

  user = {
    name: 'Juan Pérez',
    email: 'juan.perez@example.com',
    phone: '123456789'
  };

  isPerfilModalOpen = false;
  isBilleteraModalOpen = false;
  isConfiguracionModalOpen = false;

  constructor() {}

  setOpenPerfil(isOpen: boolean) {
    this.isPerfilModalOpen = isOpen;
  }

  setOpenBilletera(isOpen: boolean) {
    this.isBilleteraModalOpen = isOpen;
  }

  setOpenConfiguracion(isOpen: boolean) {
    this.isConfiguracionModalOpen = isOpen;
  }

  togglePanel() {
    this.panelOpenState = !this.panelOpenState;
  }
}
