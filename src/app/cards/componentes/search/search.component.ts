import {Component, EventEmitter, Output} from '@angular/core';
import { TodoService } from '../../../shared/services/todo.service';
import { Todo } from '../../../shared/models/todo.model';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SetsService} from "../../../shared/services/sets.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  searchForm: FormGroup;
  @Output() setsData = new EventEmitter();

  constructor(private fb: FormBuilder,
              private setsService: SetsService) { }

  ngOnInit(): void {
    this.searchForm = this.fb.group({
      name: [''],
      block: [null, Validators.required]
    });
  }

  // Getter para fácil acesso aos controles do formulário
  getSelect() {
    return this.searchForm.get('block');
  }

  onSubmit() {
    // Lógica para lidar com a submissão do formulário
    if (this.searchForm.valid) {
      this.setsService.getSets(this.searchForm.value).subscribe(data => this.setsData.emit(data));
    }else{
      Object.keys(this.searchForm.controls).forEach(campo =>{
        const controle = this.searchForm.get(campo);
        controle?.markAsDirty();
      })
    }
  }
}
