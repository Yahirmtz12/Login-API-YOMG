import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';  // Necesario para que funcione CommonModule
import { ReactiveFormsModule } from '@angular/forms';  // Para formularios reactivos
import { MatInputModule } from '@angular/material/input';  // Para inputs de Angular Material
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from "../../app.component";  // Para botones de Angular Material

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule, // Importa ReactiveFormsModule aquí
    MatInputModule, // Para los inputs de Angular Material
    MatButtonModule // Para los botones de Angular Material
    ,
    AppComponent
],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(private formBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnInit(): void {
    // Aquí podrías hacer otras inicializaciones si es necesario
  }

  onLogin(): void {
    if (this.loginForm.invalid) {
      return; // Si el formulario es inválido, no hacer nada
    }

    const { username, password } = this.loginForm.value;

    if (username === 'admin' && password === 'admin123') {
      this.router.navigate(['/list']);
    } else {
      this.errorMessage = 'Invalid username or password';
    }
  }

  onRegister(): void {
    this.router.navigate(['/list']);
  }
}
