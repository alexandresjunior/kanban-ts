import { Component } from '@angular/core';
import { CartaoComponent } from "../../componentes/cartao/cartao.component";
import { CabecalhoComponent } from "../../componentes/cabecalho/cabecalho.component";
import { RodapeComponent } from "../../componentes/rodape/rodape.component";
import { Tarefa } from '../../interfaces/tarefa';
import { TarefasService } from '../../servicos/tarefas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CartaoComponent, CabecalhoComponent, RodapeComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  tarefas: Tarefa[] = [];
  statuses = [
    'Registrada',
    'Análise Viabilidade',
    'Análise Priorização',
    'Em Execução',
    'Pronta para Homologação',
    'Aguardando Versão',
    'Reaberta'
  ]

  constructor(private tarefasService: TarefasService) { }

  ngOnInit(): void {
    this.tarefasService.listarTarefas().subscribe((tarefas) => {
      this.tarefas = tarefas;
    })
  }

  obterTarefasPorStatus(status: string): Tarefa[] {
    return this.tarefas.filter((tarefa) => tarefa.status === status);
  }

}
