import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaginaPrincipalComponent } from './paginas/principal/pagina-principal.component';
import {CardsSorteioComponent} from "./paginas/cards-sorteio/cards-sorteio.component";

const routes: Routes = [
  { path: '', component: PaginaPrincipalComponent },
  { path: 'card/:id', component: CardsSorteioComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardsRoutingModule { }
