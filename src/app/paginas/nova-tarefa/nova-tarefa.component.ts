import { Component } from '@angular/core';
import { CabecalhoComponent } from "../../componentes/cabecalho/cabecalho.component";
import { RodapeComponent } from "../../componentes/rodape/rodape.component";
import { Usuario } from '../../interfaces/usuario';
import { UsuariosService } from '../../servicos/usuarios.service';
import { CommonModule } from '@angular/common';
import { TipoTarefa } from '../../interfaces/tipoTarefa';
import { Status } from '../../interfaces/status';
import { TiposTarefaService } from '../../servicos/tipos-tarefa.service';
import { StatusesService } from '../../servicos/statuses.service';
import { Tarefa } from '../../interfaces/tarefa';
import { FormsModule } from '@angular/forms';
import { TarefasService } from '../../servicos/tarefas.service';

@Component({
  selector: 'app-nova-tarefa',
  imports: [CabecalhoComponent, RodapeComponent, CommonModule, FormsModule],
  templateUrl: './nova-tarefa.component.html',
  styleUrl: './nova-tarefa.component.css'
})
export class NovaTarefaComponent {
  usuarios: Usuario[] = [];
  tiposTarefa: TipoTarefa[] = [];
  statuses: Status[] = [];
  
  novaTarefa: Tarefa = {
    id: 0,
    title: "",
    created_on: "",
    author: "",
    type: "",
    status: "",
    assigned_to: ""
  };

  constructor(private usuariosService: UsuariosService,
    private tiposTarefaService: TiposTarefaService,
    private statusesService: StatusesService,
    private tarefasService: TarefasService
  ) { }

  ngOnInit(): void {
    this.usuariosService.listarUsuarios().subscribe((usuarios) => {
      this.usuarios = usuarios
    });

    this.tiposTarefaService.listarTiposTarefa().subscribe((tiposTarefa) => {
      this.tiposTarefa = tiposTarefa
    });

    this.statusesService.listarStatuses().subscribe((statuses) => {
      this.statuses = statuses
    });
  }

  salvarTarefa(): void {
    this.tarefasService.cadastrarTarefa(this.novaTarefa).subscribe({
      next: (resposta) => alert("Tarefa cadastrada com sucesso!" + resposta),
      error: (erro) => alert("Erro ao salvar tarefa: " + erro)
    });
  }
}
