import { Component, Input } from '@angular/core';

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

  getTipoClasse(): string {
    switch (this.tipo) {
      case 'Atendimento':
        return 'atendimento';
      case 'Correções':
        return 'correcoes';
      case 'Evoluções e Novos Projetos':
        return 'evolucoes';
      case 'Desenvolvimento':
        return 'desenvolvimento';
      default:
        return '';
    }
  }
}
