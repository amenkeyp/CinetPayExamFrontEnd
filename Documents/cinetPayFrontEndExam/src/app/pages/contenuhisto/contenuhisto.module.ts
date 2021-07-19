import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { ContenuhistoComponent } from './contenuhisto.component';
import { HistoriqueComponent } from './historique/historique.component';

export const routes = [
  {
      path: '', 
      component: ContenuhistoComponent,
      children:[
        { path: '', redirectTo: 'contenuhisto', pathMatch: 'full'},
        { path: 'contenuhisto', component: HistoriqueComponent, data: { breadcrumb: 'HISTORIQUE' } },
      ]
  }
];

@NgModule({
  declarations: [
    ContenuhistoComponent,
      HistoriqueComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ContenuhistoModule { }
