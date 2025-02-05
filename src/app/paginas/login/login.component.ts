import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  router: Router = new Router;

  usuario = {
    email: "",
    senha: "",
    manterConectado: true
  }

  fazerLogin(): void {
    // Chamada a API de autenticação
    console.log(this.usuario);

    if (this.usuario.manterConectado) {
      localStorage.setItem('usuario_kanban', JSON.stringify(this.usuario));
    }

    sessionStorage.setItem('usuario_kanban', JSON.stringify(this.usuario));

    this.router.navigate(['home']);
  }

}
