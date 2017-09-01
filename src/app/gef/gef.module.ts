import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomPipesModule }     from './../pipes/custom-pipes.module';


import { GefComponent } from './gef.component';
import { GefInfosComponent } from './gef-infos/gef-infos.component';




const routes: Routes = [
  { path: 'gef', component: GefComponent }
];

@NgModule({
  declarations: [
    GefComponent,
    GefInfosComponent
  ],
  imports: [
    CommonModule,
    CustomPipesModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  bootstrap: [GefComponent]
})
export class GefModule { }
