import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { ColorsRoutes } from './colors.routes';
import { RouterModule } from '@angular/router';

 




@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(ColorsRoutes),
  ]
})
export class ColorsModule { }
