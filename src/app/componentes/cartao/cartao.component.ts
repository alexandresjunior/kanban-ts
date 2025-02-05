import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cartao',
  imports: [],
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
  @Output() acaoExclusao = new EventEmitter<boolean>();
  @Output() selecaoTarefa = new EventEmitter<number>();

  constructor(private router: Router) {}

  executarAcaoExclusao(): void {
    this.selecaoTarefa.emit(this.id);
    this.acaoExclusao.emit(true);
  }

  editarTarefa(): void {
    this.router.navigate(['editarTarefa', this.id]);
  }

}
