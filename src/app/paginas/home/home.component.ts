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
  @Input() tarefas: Tarefa[] = [];

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
    this.service.listarTarefas().subscribe((tarefas) => {
      this.tarefas = tarefas;
    });
  }

  obterTarefasPorStatus(status: string): Tarefa[] {
    return this.tarefas.filter(tarefa => tarefa.status === status);
  }
}
