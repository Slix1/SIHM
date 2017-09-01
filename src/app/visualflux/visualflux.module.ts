import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CustomPipesModule }     from './../pipes/custom-pipes.module';

import { VisualfluxComponent } from './visualflux.component';
import { VisualfluxInfosComponent } from './visualflux-infos/visualflux-infos.component';
import { VisualfluxUsersComponent } from './visualflux-users/visualflux-users.component';





const routes: Routes = [
  { path: 'visualflux', component: VisualfluxComponent }
];

@NgModule({
  declarations: [
    VisualfluxComponent,
    VisualfluxInfosComponent,
    VisualfluxUsersComponent
  ],
  imports: [
    CommonModule,
    CustomPipesModule,
    RouterModule.forChild(routes)
  ],
  providers: [],
  bootstrap: [VisualfluxComponent]
})
export class VisualfluxModule { }
