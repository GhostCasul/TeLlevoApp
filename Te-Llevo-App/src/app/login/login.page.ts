import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(
    private fb: FormBuilder,
    private alertController: AlertController,
    private router: Router
  ) {
    this.formularioLogin = this.fb.group({
      'usuario': ['', Validators.required],
      'password': ['', Validators.required]
    });
  }

  ngOnInit() {}

  async ingresar() {
    const usuarioString = localStorage.getItem('usuario');
    const usuario = usuarioString ? JSON.parse(usuarioString) : null;

    if (usuario && usuario.nombre === this.formularioLogin.value.usuario && usuario.password === this.formularioLogin.value.password) {
      console.log('Ingresado');
      this.router.navigate(['/tabs']);
    } else {
      const alert = await this.alertController.create({
        header: 'Datos incorrectos',
        message: 'Los datos que ingresaste son incorrectos.',
        buttons: ['Aceptar']
      });

      await alert.present();
    }
  }
  usuario: string = '';
  password: string = '';
  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Usuario:', this.usuario);
      console.log('Contraseña:', this.password);

      this.router.navigate(['/tabs']);
    } else {
      console.error('Formulario inválido');
    }
  }
}
