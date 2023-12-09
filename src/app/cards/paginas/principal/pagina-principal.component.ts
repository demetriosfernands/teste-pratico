import { Component, OnInit } from '@angular/core';
import { Todo } from '../../../shared/models/todo.model';
import { TodoService } from '../../../shared/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.css']
})
export class PaginaPrincipalComponent implements OnInit {
  cards: any = [];
  submited = false;

  constructor(private todoService: TodoService) { }

  ngOnInit(): void {}

  loadCards(data) {
    this.submited = true;
    this.cards = data.sets;
  }
}
