import { Component } from '@angular/core';
import { CartaoComponent } from "../../componentes/cartao/cartao.component";
import { CabecalhoComponent } from "../../componentes/cabecalho/cabecalho.component";
import { RodapeComponent } from "../../componentes/rodape/rodape.component";

@Component({
  selector: 'app-home',
  imports: [CartaoComponent, CabecalhoComponent, RodapeComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
