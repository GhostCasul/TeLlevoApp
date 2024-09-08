import { Component } from '@angular/core';
import { AutenticaService } from '../autenticación/autentica.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {
  constructor(private autenticaService: AutenticaService, private router: Router) { }

  logout() {
    this.autenticaService.logout().subscribe(() => {
      this.router.navigate(['/login']);
    });
  }
}
