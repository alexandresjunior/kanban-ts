import { Component, Input } from '@angular/core';
import { CartaoComponent } from "../../componentes/cartao/cartao.component";
import { CabecalhoComponent } from "../../componentes/cabecalho/cabecalho.component";
import { RodapeComponent } from "../../componentes/rodape/rodape.component";
import { CommonModule } from '@angular/common';
import { Tarefa } from '../../interfaces/tarefa';
import { TarefasService } from '../../services/tarefas.service';

@Component({
  selector: 'app-home',
  imports: [CartaoComponent, CabecalhoComponent, RodapeComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tarefas: Tarefa[] = [];
  carregando: boolean = false;
  tipoSelecionado: string = 'Todos';
  usuarioSelecionado: string = 'Todos';

  statuses: string[] = [
    'Registrada',
    'Análise Viabilidade',
    'Análise Priorização',
    'Em Execução',
    'Pronta para Homologação',
    'Aguardando Versão',
    'Reaberta'
  ];

  constructor(private service: TarefasService) { }

  ngOnInit(): void {
    this.carregando = true; 
    this.service.listarTarefas().subscribe((tarefas) => {
      this.tarefas = tarefas;
      this.carregando = false;
    });
  }

  filtrarTarefas(status: string): Tarefa[] {
    return this.tarefas.filter(tarefa => {
      const filtroStatus = tarefa.status === status;
      const filtroUsuario = this.usuarioSelecionado === 'Todos' || tarefa.assigned_to === this.usuarioSelecionado;
      const filtroTipo = this.tipoSelecionado === 'Todos' || tarefa.type === this.tipoSelecionado;

      return filtroStatus && filtroUsuario && filtroTipo;
    });
  }

  atualizarUsuarioSelecionado(novoUsuario: string): void {
    this.usuarioSelecionado = novoUsuario;
  }

  atualizarTipoSelecionado(novoTipo: string): void {
    this.tipoSelecionado = novoTipo;
  }

}
