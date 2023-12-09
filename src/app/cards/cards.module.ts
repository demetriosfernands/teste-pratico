import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { CardsRoutingModule } from './cards-routing.module';
import { PaginaPrincipalComponent } from './paginas/principal/pagina-principal.component';
import { SetItemComponent } from './componentes/set-item/set-item.component';
import { SearchComponent } from './componentes/search/search.component';
import {CardsSorteioComponent} from "./paginas/cards-sorteio/cards-sorteio.component";
import {CardItemComponent} from "./componentes/card-item/card-item.component";


@NgModule({
  declarations: [
    PaginaPrincipalComponent,
    SetItemComponent,
    SearchComponent,
    CardItemComponent,
    CardsSorteioComponent
  ],
  imports: [
    CommonModule,
    CardsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class CardsModule { }
