import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {SetsService} from "../../../shared/services/sets.service";

@Component({
  selector: 'app-cards-sorteio',
  templateUrl: './cards-sorteio.component.html',
  styleUrls: ['./cards-sorteio.component.css']
})
export class CardsSorteioComponent implements OnInit {
  postId: number;
  cards = [];
  isLoading = true;
  errorMessage = 'Erro ao obter detalhes';
  showError = false;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private setsService: SetsService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {

      this.postId = params['id'];
      this.showError = false;

      // Faz a chamada HTTP usando o ID
      this.setsService.getSetsById(this.postId).subscribe(
        (response) => {
          this.cards = response.cards;
          console.log(response);
          this.isLoading = false;
        },
        (error) => {
          this.isLoading = false;
          this.showError = true;
          console.error('Erro ao obter detalhes:', error);
        }
      );
    });
  }
  goBack() {
    this.router.navigate(['']);
  }
}
