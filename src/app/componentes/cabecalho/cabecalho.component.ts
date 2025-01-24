import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faPlus, faSignOut } from '@fortawesome/free-solid-svg-icons';
import { TarefasService } from '../../services/tarefas.service';

@Component({
  selector: 'app-cabecalho',
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './cabecalho.component.html',
  styleUrl: './cabecalho.component.css'
})
export class CabecalhoComponent {
  faPlus = faPlus;
  faSignOut = faSignOut;
  usuarios: string[] = [];
  tiposTarefa: string[] = [];
  usuarioSelecionado: string = "Todos";
  tipoTarefaSelecionado: string = "Todos";
  projetoSelecionado: string = "GSAN";

  @Output() selecaoUsuario = new EventEmitter<string>();
  @Output() selecaoTipoTarefa = new EventEmitter<string>();

  constructor(private router: Router, private tarefasService: TarefasService) { }

  ngOnInit(): void {
    this.carregarTiposTarefa();
    this.carregarUsuarios();
  }

  fazerLogout(): void {
    localStorage.removeItem('usuario_kanban');
    sessionStorage.removeItem('usuario_kanban');
    this.router.navigate(['']);
  }

  atualizarUsuarioSelecionado(usuario: string): void {
    this.usuarioSelecionado = usuario;
    this.selecaoUsuario.emit(usuario);
  }

  atualizarTipoSelecionado(tipo: string): void {
    this.tipoTarefaSelecionado = tipo;
    this.selecaoTipoTarefa.emit(tipo);
  }

  carregarUsuarios(): void {
    this.tarefasService.listarUsuariosComTarefasAtribuidas().subscribe((usuarios) => {
      this.usuarios = usuarios;
    });
  }

  carregarTiposTarefa(): void {
    this.tarefasService.listarTiposTarefa().subscribe((tiposTarefa) => {
      this.tiposTarefa = tiposTarefa;
    });
  }

}
