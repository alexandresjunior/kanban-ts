import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AutenticacaoService } from '../../servicos/autenticacao.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usuario = {
    email: "",
    senha: "",
    manterConectado: true
  }

  erro: string = "";

  constructor(
    private autenticacaoService: AutenticacaoService,
    private router: Router
  ) { }

  fazerLogin(): void {
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
