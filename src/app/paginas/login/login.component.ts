import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { AutenticacaoService } from '../../servicos/autenticacao.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  loginForm: FormGroup;
  erro: string = "";
  usuario = {
    email: "",
    senha: "",
    manterConectado: true
  }

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
        Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{6,}$/)
      ]],
      manterConectado: true
    })
  }

  fazerLogin(): void {
    if (this.loginForm.invalid) {
      this.erro = "Por favor, preencha os campos corretamente.";
      return;
    }

    this.autenticacaoService.fazerLogin(this.usuario.email, this.usuario.senha).subscribe(resposta => {
      if (this.usuario.manterConectado) {
        localStorage.setItem('usuario_kanban', JSON.stringify(resposta));
      }

      sessionStorage.setItem('usuario_kanban', JSON.stringify(resposta));

      this.router.navigate(['home']);
    }, erro => {
      this.erro = erro.message;
    })
  }

}
