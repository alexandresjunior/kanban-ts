import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ModalComponent } from "../modal/modal.component";
import { TarefasService } from '../../servicos/tarefas.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cartao',
  imports: [ModalComponent, CommonModule],
  templateUrl: './cartao.component.html',
  styleUrl: './cartao.component.css'
})
export class CartaoComponent {
  @Input() id: number = 0;
  @Input() titulo: string = "";
  @Input() dataCriacao: string = "";
  @Input() autor: string = "";
  @Input() tipo: string = "";
  @Input() responsavel: string = "";
  exibirModal = false;

  constructor(
    private router: Router,
    private tarefasService: TarefasService
  ) { }

  abrirModalExclusao() {
    this.exibirModal = true;
  }

  fecharModalExclusao() {
    this.exibirModal = false;
  }

  editarTarefa(): void {
    this.router.navigate(['editarTarefa', this.id]);
  }

  executarExclusao(): void {
    this.tarefasService.excluirTarefa(this.id).subscribe((resposta) => {
      alert("Tarefa excluída com sucesso!");
      this.fecharModalExclusao();
      window.location.reload();
    }, (erro) => {
      alert("Erro ao excluir tarefa: " + erro);
    })
  }

}
