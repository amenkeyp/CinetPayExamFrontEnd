import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import {DescriptionComponent} from "./description.component";

export const routes = [
  {
      path: '', 
      component: DescriptionComponent,
  }
];

@NgModule({
  declarations: [
      DescriptionComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class DescriptionModule { }
