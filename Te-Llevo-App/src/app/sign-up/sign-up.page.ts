import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController } from '@ionic/angular';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  formularioRegistro: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController) {
    this.formularioRegistro = this.fb.group({
      nombre: ['', Validators.required],
      password: ['', Validators.required],
      confirmacionPassword: ['', Validators.required]
    }, { validator: this.passwordsMatch });
  }

  ngOnInit() {
  }

  passwordsMatch(group: FormGroup): { [key: string]: boolean } | null {
    const password = group.get('password')?.value;
    const confirmacionPassword = group.get('confirmacionPassword')?.value;

    if (password && confirmacionPassword) {
      return password === confirmacionPassword ? null : { mismatch: true };
    }
    return null;
  }

  async guardar() {
    if (this.formularioRegistro.invalid) {
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Tienes que llenar todos los datos correctamente',
        buttons: ['Aceptar']
      });

      await alert.present();
      return;
    }

    const f = this.formularioRegistro.value;
    const usuario = {
      nombre: f.nombre,
      password: f.password
    };

    localStorage.setItem('usuario', JSON.stringify(usuario));
  }
  usuario: string = '';
  password: string = '';
  confirmPassword: string = '';

  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Usuario:', this.usuario);
      console.log('Contraseña:', this.password);
    } else {
      console.error('Formulario inválido');
    }
  }
}
