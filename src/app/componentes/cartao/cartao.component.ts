import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cartao',
  imports: [],
  templateUrl: './cartao.component.html',
  styleUrl: './cartao.component.css'
})
export class CartaoComponent {
  @Input() codigo: string = "";
  @Input() titulo: string = "";
  @Input() descricao: string = "";
  @Input() dataCriacao: string = "";
  @Input() criadoPor: string = "";
  @Input() atribuidoPara: string = "";
}
