import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus, faSignOut } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cabecalho',
  imports: [FontAwesomeModule],
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.css'
})
export class CabecalhoComponent {
  faPlus = faPlus;
  faSignOut = faSignOut;
  @Output() tipoSelecionado = new EventEmitter<string>();

  constructor(private router: Router) {}

  fazerLogout() : void {
    localStorage.removeItem('usuario_kanban');
    sessionStorage.removeItem('usuario_kanban');
    this.router.navigate(['']);
  }

  atualizarTipoSelecionado(tipo: string): void {
    this.tipoSelecionado.emit(tipo);
  }
}
