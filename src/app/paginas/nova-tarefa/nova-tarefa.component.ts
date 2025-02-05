import { Component, Input } from '@angular/core';
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
import { ModalComponent } from "../../componentes/modal/modal.component";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nova-tarefa',
  imports: [CabecalhoComponent, RodapeComponent, CommonModule, FormsModule, ModalComponent],
  templateUrl: './nova-tarefa.component.html',
  styleUrl: './nova-tarefa.component.css'
})
export class NovaTarefaComponent {
  usuarios: Usuario[] = [];
  tiposTarefa: TipoTarefa[] = [];
  statuses: Status[] = [];
  @Input() exibirModal = false;

  novaTarefa: Tarefa = {
    id: 0,
    title: "",
    created_on: "",
    author: "",
    type: "",
    status: "",
    assigned_to: ""
  };

  edicao: boolean = false;

  constructor(private usuariosService: UsuariosService,
    private tiposTarefaService: TiposTarefaService,
    private statusesService: StatusesService,
    private tarefasService: TarefasService,
    private router: Router,
    private route: ActivatedRoute
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

    // Carrega dados da tarefa apenas se houver o 'id' na rota.
    this.route.paramMap.subscribe(parametros => {
      const id = Number(parametros.get('id'));
      if (id) {
        this.carregarDadosTarefa(id);
        this.edicao = true;
      }
    })
  }

  salvarTarefa(): void {
    if (this.novaTarefa.id !== 0) {
      // Se 'id' é válido/existente, atualizar a tarefa.
      this.tarefasService.atualizarTarefa(this.novaTarefa.id, this.novaTarefa).subscribe(resposta => {
        alert("Tarefa atualizada com sucesso!");
        this.router.navigate(['home']);
      })
    } else {
      // Caso contrário, criar nova tarefa.
      this.tarefasService.cadastrarTarefa(this.novaTarefa).subscribe({
        next: (resposta) => {
          this.exibirModal = true;
        },
        error: (erro) => alert("Erro ao salvar tarefa: " + erro)
      });
    }
  }

  redirecionarParaHome(): void {
    this.router.navigate(['home']);
  }

  redirecionarParaNovaTarefa(): void {
    // recarrega a página com estado vazio
    window.location.reload();
  }

  carregarDadosTarefa(id: number): void {
    this.tarefasService.buscarTarefa(id).subscribe((resposta) => {
      this.novaTarefa = resposta;
    })
  }
}
