import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutenticacaoService } from '../../servicos/autenticacao.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  erro: string = "";

  constructor(
    private autenticacaoService: AutenticacaoService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/)
      ]],
      manterConectado: [true]
    });
  }

  fazerLogin(): void {
    if (this.loginForm.invalid) {
      this.erro = "Por favor, preencha os campos corretamente.";
      return;
    }

    const { email, senha, manterConectado } = this.loginForm.value;
    this.autenticacaoService.fazerLogin(email, senha).subscribe(resposta => {
      if (manterConectado) {
        localStorage.setItem('usuario_kanban', JSON.stringify(resposta));
      }
      sessionStorage.setItem('usuario_kanban', JSON.stringify(resposta));
      this.router.navigate(['home']);
    }, erro => {
      this.erro = erro.message;
    });
  }
}
