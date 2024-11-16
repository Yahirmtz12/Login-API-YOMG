import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';  // Necesario para que funcione CommonModule
import { ReactiveFormsModule } from '@angular/forms';  // Para formularios reactivos
import { MatInputModule } from '@angular/material/input';  // Para inputs de Angular Material
import { MatButtonModule } from '@angular/material/button';
import { AppComponent } from "../../app.component";  // Para botones de Angular Material
import { UserService } from '../../services/user.service';
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
  providers: [UserService],
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string = '';
  users: any[] = [];

  constructor(private formBuilder: FormBuilder, private router: Router,private userService: UserService) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(0)]],
      password: ['', [Validators.required, Validators.minLength(0)]],
    });
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
      },
      error: (err) => {
        console.error('Error fetching users:', err);
      },
    });
  }

  onLogin(): void {
    if (this.loginForm.invalid) {
      return; // Si el formulario es inválido, no hacer nada
    }

    const { username, password } = this.loginForm.value;

    const user = this.users.find(
      (u) => u.name === username && u.password === password
    );

     if (user) {
      // Si las credenciales son correctas
      this.router.navigate(['/list']);
    } else {
      // Si las credenciales son incorrectas
      this.errorMessage = 'Invalid username or password';
    }
  }

  onRegister(): void {
    this.router.navigate(['/list']);
  }
}
